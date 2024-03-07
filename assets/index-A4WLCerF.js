function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BcSJAO_m.js","assets/index-DiAzB68-.js","assets/index-CkUg_pFd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DiAzB68-.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BcSJAO_m.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
