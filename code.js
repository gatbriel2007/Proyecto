var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5037dd59-e7d8-45d4-aa60-f92b3e0c37c5","cde04b27-9610-497b-9b52-8c4afdaf3a29","bd22bc03-3642-45d5-ba34-08169ea50db4","0e9ca5de-3160-4598-a51a-83781a566488","3f19e627-7ae4-4ff8-9bfb-685bd6209f4c","82f7e635-5c51-48a7-acd1-2c1396a92882","69316205-bd50-407e-aad4-1a951c4d0ba2","a50f22b6-b087-41ba-a0ba-e4321db45daf","17e54162-488c-4fcd-b618-1ceb0457d202","f792b7d0-eea8-4cb5-b017-f40c8a767244","f8eb49e4-2e9a-45e9-9ee6-a4b64fdd9891","3f739ab7-576f-4abe-a992-a3761c0e5fc3","b7377a8a-1fe8-490a-a2f2-621ff8335190","cbaf38be-d8a7-424c-abb6-d5219a8f1183","c8ef2b87-cd3e-44d9-a550-f330a074e984","106424f1-9c18-4e4d-ac45-b43ed9b94075"],"propsByKey":{"5037dd59-e7d8-45d4-aa60-f92b3e0c37c5":{"name":"retrocreature_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/B6mUms6yflHdiaD7nVfqAGRzs7rymc12/category_retro/retrocreature_01.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"B6mUms6yflHdiaD7nVfqAGRzs7rymc12","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B6mUms6yflHdiaD7nVfqAGRzs7rymc12/category_retro/retrocreature_01.png"},"cde04b27-9610-497b-9b52-8c4afdaf3a29":{"name":"retrocreature_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png"},"bd22bc03-3642-45d5-ba34-08169ea50db4":{"name":"retrocreature_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"},"0e9ca5de-3160-4598-a51a-83781a566488":{"name":"retrocreature_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid/category_retro/retrocreature_04.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid/category_retro/retrocreature_04.png"},"3f19e627-7ae4-4ff8-9bfb-685bd6209f4c":{"name":"retrocreature_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gweexffTvzt5T_AHvh28Ivkd3olW3tsV/category_retro/retrocreature_05.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"gweexffTvzt5T_AHvh28Ivkd3olW3tsV","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gweexffTvzt5T_AHvh28Ivkd3olW3tsV/category_retro/retrocreature_05.png"},"82f7e635-5c51-48a7-acd1-2c1396a92882":{"name":"retrocreature_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/n8bOZIda_fIfEief4IOi2AunJKUrNsWn/category_retro/retrocreature_06.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"n8bOZIda_fIfEief4IOi2AunJKUrNsWn","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8bOZIda_fIfEief4IOi2AunJKUrNsWn/category_retro/retrocreature_06.png"},"69316205-bd50-407e-aad4-1a951c4d0ba2":{"name":"retrocreature_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY/category_retro/retrocreature_07.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY/category_retro/retrocreature_07.png"},"a50f22b6-b087-41ba-a0ba-e4321db45daf":{"name":"retrocreature_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png"},"17e54162-488c-4fcd-b618-1ceb0457d202":{"name":"retrocreature_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png"},"f792b7d0-eea8-4cb5-b017-f40c8a767244":{"name":"retrocreature_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dm3BSNDfoxBO2AXK2XSAbPsNnhojGB_f/category_retro/retrocreature_10.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dm3BSNDfoxBO2AXK2XSAbPsNnhojGB_f","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dm3BSNDfoxBO2AXK2XSAbPsNnhojGB_f/category_retro/retrocreature_10.png"},"f8eb49e4-2e9a-45e9-9ee6-a4b64fdd9891":{"name":"retrocreature_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zaTnIStazDSd4yfPFncm.5c6ya1zKT9a/category_retro/retrocreature_11.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"zaTnIStazDSd4yfPFncm.5c6ya1zKT9a","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zaTnIStazDSd4yfPFncm.5c6ya1zKT9a/category_retro/retrocreature_11.png"},"3f739ab7-576f-4abe-a992-a3761c0e5fc3":{"name":"retrocreature_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/QKXUDVeIay_sBLYA2JLiCTN_M54lBRiZ/category_retro/retrocreature_12.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"QKXUDVeIay_sBLYA2JLiCTN_M54lBRiZ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QKXUDVeIay_sBLYA2JLiCTN_M54lBRiZ/category_retro/retrocreature_12.png"},"b7377a8a-1fe8-490a-a2f2-621ff8335190":{"name":"retrocreature_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png","frameSize":{"x":299,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":299,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png"},"cbaf38be-d8a7-424c-abb6-d5219a8f1183":{"name":"retrocreature_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png"},"c8ef2b87-cd3e-44d9-a550-f330a074e984":{"name":"retrocreature_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e2tb1Nb2HGnxX.mc3jZKUpt8VeyZBeFX/category_retro/retrocreature_15.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"e2tb1Nb2HGnxX.mc3jZKUpt8VeyZBeFX","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e2tb1Nb2HGnxX.mc3jZKUpt8VeyZBeFX/category_retro/retrocreature_15.png"},"106424f1-9c18-4e4d-ac45-b43ed9b94075":{"name":"retrocreature_16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "serve"

var score = 0

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box1.setAnimation("retrocreature_01_1")
box1.scale = 0.1

var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box2.setAnimation("retrocreature_02_1")
box2.scale = 0.1

var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box3.setAnimation("retrocreature_03_1")
box3.scale = 0.1

var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box4.setAnimation("retrocreature_04_1")
box4.scale = 0.1

var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box5.setAnimation("retrocreature_05_1")
box5.scale = 0.1

var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box6.setAnimation("retrocreature_06_1")
box6.scale = 0.1

var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box7.setAnimation("retrocreature_07_1")
box7.scale = 0.1

var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box8.setAnimation("retrocreature_08_1")
box8.scale = 0.1

var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box9.setAnimation("retrocreature_09_1")
box9.scale = 0.1

var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box10.setAnimation("retrocreature_10_1")
box10.scale = 0.1

var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box11.setAnimation("retrocreature_11_1")
box11.scale = 0.1

var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box12.setAnimation("retrocreature_12_1")
box12.scale = 0.1

var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
box13.setAnimation("retrocreature_13_1")
box13.scale = 0.1

var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box14.setAnimation("retrocreature_14_1")
box14.scale = 0.1

var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box15.setAnimation("retrocreature_15_1")
box15.scale = 0.1

var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
box16.setAnimation("retrocreature_16_1")
box16.scale = 0.1

paddle=createSprite(200,390,100,20)
ball=createSprite(200,200,20,20)

createEdgeSprites()

function draw() {
  background("white");
  
  if (gameState === "serve") {
    fill("red");
    textSize(20)
    text("preciona Space para comenzar", 70, 230)
    
  if (keyDown("space")) {
    ball.velocityX = 4
    ball.velocityY = 3
    gameState = "play"
  }
  
  }
  
  if (gameState === "play") {
    paddle.x = World.mouseX
    background("black")
    textSize(30)
  text("puntuación: " + score, 190,25)
  if (ball.isTouching(bottomEdge)) {
    gameState = "end"
  }
  if (ball.bounceOff(box1)) {
     box1.destroy()
     score += 10;
   }
    
  if (ball.bounceOff(box2)) {
     box2.destroy()
     score += 10;
   }
    
   if (ball.bounceOff(box3)) {
     box3.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box4)) {
     box4.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box5)) {
     box5.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box6)) {
     box6.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box7)) {
     box7.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box8)) {
     box8.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box9)) {
     box9.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box10)) {
     box10.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box11)) {
     box11.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box12)) {
     box12.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box13)) {
     box13.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box14)) {
     box14.destroy()
     score += 10;
   }
   
   if (ball.bounceOff(box15)) {
     box15.destroy()
     score += 10;
   }
   
   if(ball.bounceOff(box16)){  
    box16.destroy() 
    score += 10;
  }
  
  if (score === 160) {
    gameState = "win"
  }
  
  fill("white")
  stroke("black")
  strokeWeight(4);
  textFont("arial");
  }
  
  
  
  if (gameState === "gameOver") {
    fill("red")
    textSize(50)
    text("Game Over", 80, 200)
    if (ball.isTouching(bottomEdge)) {
      background("white")
      
    }
    
  }
  
  if (gameState === "win") {
    textSize(50)
    text("Ganaste", 100,200)
    ball.velocityX = 0
    ball.velocityY = 0
  }
  
  
  
  
  fill("white")
  stroke("black")
  strokeWeight(4);
  textFont("arial");
  
  ball.bounceOff(rightEdge)
  ball.bounceOff(leftEdge)
  ball.bounceOff(topEdge)
  ball.bounceOff(paddle) 
 
     
drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
