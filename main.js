function startClassification()
{
   navigator.mediaDevices.getUserMedia({ audio:true});
   classifier = ml5.soundClassifer("https://teachablemachine.withgoogle.com/models/azcaMNlzP/model.json", modelReady) ;
}
 
function modelReady(){
   classifier.classify(gotResults);
}

function gotResults(){

}