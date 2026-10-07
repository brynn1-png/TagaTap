import fs from 'node:fs/promises';
const tab=(await (await fetch('http://127.0.0.1:9233/json')).json()).find(x=>x.type==='page');
const ws=new WebSocket(tab.webSocketDebuggerUrl);
await new Promise(resolve=>ws.addEventListener('open',resolve,{once:true}));
let id=0;const pending=new Map();
ws.addEventListener('message',e=>{const packet=JSON.parse(e.data);if(pending.has(packet.id)){pending.get(packet.id)(packet.result);pending.delete(packet.id)}});
function send(method,params={}){return new Promise(resolve=>{const next=++id;pending.set(next,resolve);ws.send(JSON.stringify({id:next,method,params}))})}
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
await send('Page.navigate',{url:'http://127.0.0.1:5175/'});
await new Promise(resolve=>setTimeout(resolve,1300));
await send('Runtime.evaluate',{expression:'document.getElementById("how-it-works").scrollIntoView({behavior:"instant"})'});
await new Promise(resolve=>setTimeout(resolve,350));
const state=await send('Runtime.evaluate',{expression:'JSON.stringify({viewport:innerWidth,scroll:document.documentElement.scrollWidth,active:document.querySelector(".how-step-picker [aria-pressed=true]").textContent,description:document.querySelector(".how-active-step p").textContent})',returnByValue:true});
console.log(state.result.value);
const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
await fs.writeFile('design-review/how-mobile.png',Buffer.from(shot.data,'base64'));
const next=await send('Runtime.evaluate',{expression:'document.querySelectorAll(".how-step-picker button")[2].click(); JSON.stringify({active:document.querySelector(".how-step-picker [aria-pressed=true]").textContent,description:document.querySelector(".how-active-step p").textContent})',returnByValue:true});
console.log(next.result.value);
ws.close();
