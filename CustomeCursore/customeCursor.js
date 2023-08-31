document.querySelector(".main").addEventListener("mouseMove",function(dets){
    document.querySelector("#cursor").computedStyleMap.left = dets.x + "px";
    document.querySelector("#cursor").computedStyleMap.top = dets.y + "px";
})