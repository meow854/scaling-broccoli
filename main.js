//https://teachablemachine.withgoogle.com/models/5wC9kQ-Mf/

function classifiysound() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5wC9kQ-Mf/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gtre);
}

function gtre(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        red= Math.floor(Math.random() * 255) + 1;
        green= Math.floor(Math.random() * 255) + 1;
        blue= Math.floor(Math.random() * 255) + 1;
        document.getElementById("resultlbl").innerHTML= 'I Can Hear - ' + results[0].label;
        document.getElementById("resultcon").innerHTML= 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + ' %';
        document.getElementById("resultlbl").style.color= "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("resultcon").style.color= "rgb(" + red + "," + green + "," + blue + ")";
        img1= document.getElementById("alien1");
        img2= document.getElementById("alien2");
        img3= document.getElementById("alien3");
        img4= document.getElementById("alien4");
        
        if (results[0].label == "Clap") {
            img1.src= "aliens-01.gif";
            img2.src= "aliens-02.png";
            img3.src= "aliens-03.png";
            img4.src= "aliens-04.png";
        }
        else if (results[0].label == "Clicking") {
            img1.src= "aliens-01.png";
            img2.src= "aliens-02.gif";
            img3.src= "aliens-03.png";
            img4.src= "aliens-04.png"; 
        }
        else if (results[0].label == "Bell") {
            img1.src= "aliens-01.png";
            img2.src= "aliens-02.png";
            img3.src= "aliens-03.gif";
            img4.src= "aliens-04.png"; 
        }
        else {
            img1.src= "aliens-01.png";
            img2.src= "aliens-02.png";
            img3.src= "aliens-03.png";
            img4.src= "aliens-04.gif"; 
        }
    }
}