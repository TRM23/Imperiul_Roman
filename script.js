// script.js
k=1;
dai=daj=40;
//Functie sa existe butone faine
function selectOption(option) {
    //Verificare sa se vada pe care ai apasat
    if(option === 'da'){
        
        var daButton = document.getElementById('da-button');
        var daTexts = ['Ummm, da', 'Cum sa nu...', 'Sa spunem ca da...', 'CUM SA NU RAUL??? <3 <3 <3'];
        if(k==5)
            flashRainbowColors(function(){
                document.getElementById('question').style.display='none' // Ascundem intrebarea
                displayCatHeart();
            });
        else
        if (k <= daTexts.length) {
            daButton.innerText = daTexts[k - 1];
        }
        var duButton = document.getElementById('da-button');
        duButton.style.fontSize = (parseFloat(daj) * 1.2) + 'px';
        daj*=1.2;
        k++;
    }
    else if (option === 'nu'){
        //Schimbam din "Nu" in "Esti sigura <3?"
        var nuButton = document.getElementById('nu-button');
        if (k == 3) {
            nuButton.innerText = "It's over Anakin, I have the high ground";
        } else {
            nuButton.innerText = (k % 2 === 0) ? 'Esti sigură? <3' : 'Rawr nah';
        }
        //Marim font-ul al butonului "Da"
        var daButton = document.getElementById('da-button');
        daButton.style.fontSize = (parseFloat(dai) * 1.2) + 'px';
        dai*=1.2;
        j++;
    }
    else {
        //Daca nu avem nici "Da", nici "Nu" apasat, atunci avem "Ba ce?"
        alert('Bă ce?');
    }
}

// Fuctie sa faca culorile curcubeului and si apoi sa faca o functie de strigare inapoi
function flashRainbowColors(callback){
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i=0;
    var interval = setInterval(function(){
        document.body.style.backgroundColor = colors[i];
        i=(i+1) % colors.length;
    }, 200
);
setInterval(function() {
    clearInterval(interval);
    document.body.style.backgroundColor = '';
    if(callback){
        callback();
    }
}, 2000
);
}

// Functie the arate gif-ul cu pisi
function displayCat(){
    //Ia continerul unde apare imaginea
    var imageContainer = document.getElementById('image-container');
    //Creeaza o imagine-elemnt pentru pisi
    var catImage = new Image();
    catImage.src = 'car.gif';
    //Alt text pentru imagine (pentru mine)
    catImage.alt = 'Cat';
    //Cand se incarca, adauga imaginea la container
    catImage.onload = function(){
        imageContainer.appendChild(catImage);
    };
    catImage.onerror = function() {
        console.error('Failed to load car.gif. Check the file path.');
    };
}

//Functie sa apara gif-ul 2
function displayCatHeart() {
    //Sterge orice ar fi in container-ul pentru imagine
    document.getElementById('image-container').innerHTML = '';
    //Ia container-ul unde va fi imaginea
    var imageContainer = document.getElementById('image-container');
    //Creeaza un nou image-element pentru gif 2
    var catHeartImage = new Image();
    var catHeartImage2 = new Image();
    //Seteaza sursa (locatia fisierului) pentru gif 2
    catHeartImage.src = 'love.gif'; //presupunem ca gif 2 se numeste "cat-heart.gif"
    //Setam un alt text pentru imagine (pentru sufletul meu)
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.style.maxWidth = "90%"; // Makes sure it fits within the screen
    catHeartImage.style.height = "auto"; // Keeps aspect ratio
    catHeartImage.style.display = "block"; // Centers the image
    catHeartImage.style.margin = "0 auto"; // Centers horizontally
    //Cand se incarca gif 2, adauga-l la containerul de imagine
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        //Ascunde containerul de optiuni
        document.getElementById('options').style.display = 'none';
        var thankYouText = document.createElement('pp');
        thankYouText.textContent = 'Multumesc pentru ca m-ai onorat cu acest raspuns (sper ca nu esti un extraterestru si nu o sa dispari ca si Crystal si Amber) <3 <3 <3';
        thankYouText.style.textAlign = 'center';
        thankYouText.style.fontSize = '24px'; 
        thankYouText.style.fontWeight = 'bold'; 
        thankYouText.style.color = '#ff4d6d'; 
        thankYouText.style.marginTop = '10px';

        const heartColor = '#ff4d6d'; // Define the heart color
        const style = document.createElement('style');
        if (!document.getElementById('heart-style')) {
            style.id = 'heart-style';
            style.textContent = `
                .heart {
                    position: absolute;
                    top: 24%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(-45deg);
                    height: 150px;
                    width: 150px;
                    background: ${heartColor};
                    box-shadow: 15px 5px 150px 20px ${heartColor};
                    animation: heartBeat 0.6s linear infinite;
                }
                .heart::before, .heart::after {
                    content: "";
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    right: 70%;
                    background: ${heartColor};
                    border-radius: 50%;
                }
                .heart::before {
                    top: -50%;
                    left: 0;
                }
                .heart::after {
                    left: 50%;
                    top: 0;
                }
                @keyframes heartBeat {
                    0% { transform: translate(-50%, -50%) rotate(-45deg) scale(1.07); }
                    80% { transform: translate(-50%, -50%) rotate(-45deg) scale(1); }
                    100% { transform: translate(-50%, -50%) rotate(-45deg) scale(0.8); }
                }
            `;
            document.head.appendChild(style);
        }

        if (!document.querySelector('.heart')) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            document.body.appendChild(heart);
        }
        imageContainer.appendChild(thankYouText);
    };
}

//Sa arate car.gif initial
displayCat();