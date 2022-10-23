function startClassification()
{
   navigator.mediaDevices.getUserMedia({ audio:true});
   classifier = ml5.soundClassifer("https://teachablemachine.withgoogle.com/models/azcaMNlzP/model.json", modelReady) ;
}
 
function modelReady(){
   classifier.classify(gotResults);
}

function gotResults(error, results){
 
   if (error){   
      console.error(error);
  }
  else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) +1;
      random_number_g = Math.floor(Math.random() * 255) +1;
      random_number_b = Math.floor(Math.random() * 255) +1;
      document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Detected Voice is Of - ' + (results[0].confidence*100).toFixed(2)+"%";
      document.getElementById("result_label").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

      img =document.getElementById('dog.jpg');
      img1 =document.getElementById('cat.jpg');
      img2 =document.getElementById('lion.jpg');
      img3 =document.getElementById('cow.jpg');

      if (results[0].label == "barking"){
         img.src = 'dog.jpg';
      } else if (results[0].label == "meowing"){
         img.src = 'cat.jpg';
      }else if (results[0].label == "roar"){
          img.src = 'lion.jpg';
      } else {
          img.src = 'cow.jpg';
      }
   }

}