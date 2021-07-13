Webcam.set({
    width: 320,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints:{
        facingMode: 'environment'
    }
});

Webcam.attach('#webcam');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='snapshot' src='"+data_uri+"'>"
    })
}

console.log('ml5 version : ', ml5.version);
classifier = ml5.imageClassifier('Mobilenet', modelLoaded);

function modelLoaded(){
    console.log('Model is Loaded');
}

function check(){
    img = document.getElementById("snapshot");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}