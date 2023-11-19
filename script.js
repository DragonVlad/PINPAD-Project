let inputFieldValue = document.body.querySelector('.inputField');
let inputBtn = document.body.querySelector('.inputBtn');
let deleteBtn = document.body.querySelector('.deleteBtn');
let numBtns = document.getElementsByClassName('numBtn');
let limit = 4;
let textLength = inputFieldValue.innerText;

//Сделать набор цифр только до 4-х

for(let i = 0; i < numBtns.length; i++){
    numBtns[i].addEventListener('click', function(){
        //console.log(inputFieldValue.value.length);
        if(inputFieldValue.value.length > 3){ //Недопускаем ввод больше чертырех символов
            console.log('Oh no!');
            return;
        } 
        inputFieldValue.value += numBtns[i].innerText;
    });
    numBtns[i].addEventListener('keydown', function(event){
        if(event.code == 'Space'){
            event.preventDefault();
            numBtns[i].blur();
        } else if(event.code == 'Enter'){
            event.preventDefault();
            numBtns[i].blur();
        } else if(event.code == 'Tab'){
            event.preventDefault();
            numBtns[i].blur();
        } else if(event.keyCode == '8'){
            event.preventDefault();
            numBtns[i].blur();
        }
    });
}

deleteBtn.addEventListener('click', function(){
    inputFieldValue.value = inputFieldValue.value.slice(0, -1);
    console.log('Text deleted');
    deleteBtn.addEventListener('keydown', function(event){
        if(event.code == 'Space'){
            event.preventDefault();
            deleteBtn.blur();
        } else if(event.code == 'Enter'){
            event.preventDefault();
            deleteBtn.blur();
        } else if(event.code == 'Tab'){
            event.preventDefault();
            deleteBtn.blur();
        } else if(event.keyCode == '8'){
            event.preventDefault();
            deleteBtn.blur();
        }
    });
});

inputBtn.addEventListener('click', function(){
    if(inputFieldValue.value == 1234){
        let welcomeEl = document.createElement('h1');
            welcomeEl.classList.add('welcomeEl');
            welcomeEl.innerText = 'You are welcome!!!';
        
        document.body.querySelector('#pinCont').style.animation = 'hide 1s linear forwards normal';
        
        setTimeout(function(){
            welcomeEl.style.animation = 'show 1.5s linear forwards normal'; 
            document.body.appendChild(welcomeEl);
        }, 1000);
    } else {
        let errorMessage = document.createElement('h1');
            errorMessage.classList.add('errorMessage');
            errorMessage.innerText = 'ERROR';

        document.body.querySelector('#pinCont').style.animation = 'hide 1s linear forwards normal';
        document.body.appendChild(errorMessage);
        errorMessage.style.animation = 'show 1s linear forwards normal';
        document.body.style.animation = 'colorChange1 1s linear forwards normal';
        setTimeout(function(){
            document.body.querySelector('.errorMessage').style.animation = 'hide 3s linear forwards normal';
            document.body.removeChild(errorMessage);
            document.body.style.animation = 'colorChange2 2s linear forwards normal';
            document.body.querySelector('#pinCont').style.animation = 'show 1s linear forwards normal';
        }, 1200);
        inputFieldValue.value = '';
    }
    inputBtn.addEventListener('keydown', function(event){
        if(event.code == 'Space'){
            event.preventDefault();
            inputBtn.blur();
        } else if(event.code == 'Enter'){
            event.preventDefault();
            inputBtn.blur();
        } else if(event.code == 'Tab'){
            event.preventDefault();
            inputBtn.blur();
        } else if(event.keyCode == '8'){
            event.preventDefault();
            inputBtn.blur();
        }
    });
});