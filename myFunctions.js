function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.height/2 + object1.height/2
      && object2.x - object1.x < object2.height/2 + object1.height/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}
  function collide(movingRect,fixedRect){
 
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
      fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2  && 
      movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
      fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
     
     if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
        fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) 
        { 
          movingRect.velocityX = movingRect.velocityX * (-1);
           fixedRect.velocityX = fixedRect.velocityX * (-1); 
         }
         if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
           && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
           { 
           movingRect.velocityY = movingRect.velocityY * (0); 
            fixedRect.velocityY = fixedRect.velocityY * (0);
             }
       
       }
       
      