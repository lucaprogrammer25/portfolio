function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DiAzB68-.js";async function _(a,e=!0){const{SquareDrawer:r}=await t(()=>import("./SquareDrawer-C3wQIQqh.js"),__vite__mapDeps([]));await a.addShape(["edge","square"],new r,e)}export{_ as loadSquareShape};
