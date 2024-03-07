function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DBqELQ41.js","assets/index-DiAzB68-.js","assets/index-CkUg_pFd.css","assets/index-BftauKsK.js","assets/index-B0s6WvRy.js","assets/index-fSp9JrRe.js","assets/index-Bi8TJMls.js","assets/index-Bx2Y5XDx.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DiAzB68-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DBqELQ41.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BftauKsK.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B0s6WvRy.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-fSp9JrRe.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Bi8TJMls.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bx2Y5XDx.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
