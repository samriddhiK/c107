function startClassification() 
{
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/3oRZRDA8e/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
    
}
}

    
