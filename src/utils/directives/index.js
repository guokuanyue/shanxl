import Vue from 'vue'
// 全局注册


// import vueDrag from 'vue-dragging'
// Vue.use(vueDrag)


Vue.directive('drag', {
  inserted (el, binding) {
    let oDiv = el
    //  左边距最大值
    let maxLeft = el.parentNode.clientWidth - el.clientWidth;
    console.log(el.clientWidth,'el.clientWidth')
    console.log(maxLeft,'maxLeft')
     //  上边距最大值
    let maxTop = el.parentNode.clientHeight - el.clientHeight
    console.log(maxTop,'maxTop')

    oDiv.onmousedown = function (e) {
     //  鼠标按下，计算当前元素距离可视区的距离
      let disX = e.clientX - oDiv.offsetLeft
      let disY = e.clientY - oDiv.offsetTop
      document.onmousemove = function (e) {
      //  获取到鼠标拖拽后的横向位移(距离父级元素)
        let l = e.clientX - disX

      //  获取到鼠标拖拽后的纵向位移(距离父级元素)
        let t = e.clientY - disY 
     
        oDiv.style.left = l + 'px' 
     
        oDiv.style.top = t + 'px'

        if (e.clientX - disX-el.clientWidth <= 0) { oDiv.style.left = 0 + 'px' } 

        if (e.clientY - disY-el.clientHeight <= 0) { oDiv.style.top = 0 + 'px' } 

        if (e.clientX - disX-el.clientWidth >= maxLeft) { oDiv.style.left = maxLeft + 'px' } 

        if (e.clientY - disY-el.clientHeight >= maxTop) { oDiv.style.top = maxTop + 'px' } 

        //     将此时的位置传出去  
        binding.value({x: oDiv.style.left, y: oDiv.style.top}) } 
        //     松开事件后，移除事件
       document.onmouseup = function (e) { 
          document.onmousemove = null 
          document.onmouseup = null
        } 
     } 
   } 
})




