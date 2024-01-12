let inputFieldValue = document.body.querySelector('.inputField'),
    inputBtn = document.body.querySelector('.inputBtn'),
    deleteBtn = document.body.querySelector('.deleteBtn'),
    numBtns = document.getElementsByClassName('numBtn'),
    textLength = inputFieldValue.innerText,
    limit = 4;

for(let i = 0; i < numBtns.length; i++){
    numBtns[i].addEventListener('click', function(){
        if(inputFieldValue.value.length > 3){ //Не допускаем ввод больше четырех символов
            console.log('You entered too much!');
            return;
        } 
        inputFieldValue.value += numBtns[i].innerText;
    });
    numBtns[i].addEventListener('keydown', function(event){ //Отключаем работу кнопок клавиатуры
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

deleteBtn.addEventListener('click', function(){ //По нажатию удаляем последний символ
    inputFieldValue.value = inputFieldValue.value.slice(0, -1);
    console.log('Last symbol deleted');
    deleteBtn.addEventListener('keydown', function(event){ //Отключаем работу кнопок клавиатуры
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
    if(inputFieldValue.value == 1234){ //При введении правильного пароля выводится приветственный заголовок
        let welcomeEl = document.createElement('h1');
            welcomeEl.classList.add('welcomeEl');
            welcomeEl.innerText = 'You are welcome!!!';
        
        document.body.querySelector('#pinCont').style.animation = 'hide 1s linear forwards normal';
        
        setTimeout(function(){ 
            welcomeEl.style.animation = 'show 1.5s linear forwards normal'; 
            document.body.appendChild(welcomeEl);
        }, 1000);
    } else { //При введении неправильного пароля выводится окно с ошибкой
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
    inputBtn.addEventListener('keydown', function(event){ //Отключаем работу кнопок клавиатуры
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
