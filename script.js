
let video;
let mobilnet;
let label;
var res=document.getElementsByTagName("h2");
console.log('ml5 version:', ml5.version);
function modelReady(){
    console.log("Your model is ready");
    mobilnet.predict(video,gotResult)
}
function gotResult(error,result){
  if(error){
    console.log(error);
  }else{
    //console.log(result);
     label=result[0].label;
     let prob=result[0].confidence;

    
    //mobilnet=ml5.imageClassifier('MobileNet',modelReady)
   res.innerHTML=label;
  }
}
function setup(){
    createCanvas(600,500);
    video=createCapture(VIDEO);
    video.hide();
   // mobilnet=ml5.imageClassifier('MobileNet',modelReady)
}
function startPrediction(){
  mobilnet=ml5.imageClassifier('MobileNet',modelReady)
}


function draw() {
    background(0);
    image(video,0,0);
   fill(55);
   textSize(64);
   text(label,10,height-100)
  }