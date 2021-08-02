var mousePos = {
    x: -10,
    y: -10
  };
  var boxElements = document.getElementsByClassName('box');
  

  var boxes = [];
  for (var i = 0; i < boxElements.length; i++) {
    boxes.push({
      el: boxElements[i],
      targetX: 0,
      targetY: 0,
      prevX: 0,
      prevY: 0,
      x: 0,
      y: 0,
      left: boxElements[i].offsetLeft,
      top: boxElements[i].offsetTop,
      size: boxElements[i].offsetWidth
    })
  }
  
  function mousemove(e) {
  
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  }
  
  function updateBox(box) {

    if (mousePos.x > box.left && mousePos.x < (box.left+box.size) &&
      mousePos.y > box.top && mousePos.y < (box.top+box.size)) {
      box.targetX = (box.size/2 - (mousePos.x - box.left)) * 0.1;
      box.targetY = (box.size/2 - (mousePos.y - box.top)) * 0.1;
    } else {
      box.targetX = 0;
      box.targetY = 0;
    }
    

    box.x += (box.targetX - box.x)*0.2;
    box.y += (box.targetY - box.y)*0.2;
    
   if(Math.abs(box.x) < .001) box.x = 0;
    if(Math.abs(box.y) < .001) box.y = 0;
    

    if (box.prevX !== box.x && box.prevY !== box.y) {
      box.el.children[0].children[0].style.transform = 'translate3d('+box.x+'px, '+box.y+'px, 0)';
    }
    

    box.prevX = box.x;
    box.prevY = box.y;
  }
  
  function loop() {
    for (var i = 0, l = boxes.length; i < l; i++) {
      updateBox(boxes[i]);
    }
    requestAnimationFrame(loop);  
  }
  
  function resize() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].left = boxes[i].el.offsetLeft;
      boxes[i].top = boxes[i].el.offsetTop;
      boxes[i].size = boxes[i].el.offsetWidth;
    }
  }
  document.addEventListener('mousemove', mousemove);
  window.addEventListener('resize', resize);
  loop();