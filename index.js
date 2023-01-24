//filepaths to the different sound files...
var crash = './sounds/happy_birthday_remastered-73308.mp3';
var numOfBtns = document.querySelectorAll('.drum').length;

for (var i = 0; i < numOfBtns; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        // this.style.color = 'white';

        var btnInnerHTML = this.innerHTML;

        playSound(crash)
        // selectSound(btnInnerHTML);

        buttonAnimation(btnInnerHTML);

    });

}

//use keydown instead of 'keypress'
document.addEventListener('keydown', function (event) {
    // alert('key was pressed...');
    console.log(event);

    selectSound(event.key);

    buttonAnimation(event.key);

});


//function to be reused to play sounds...
function playSound(path) {
    
    var a = new Audio(path);
    a.play();

}

//function to select sound to use with the previous function...
function selectSound(key) {

    switch (key) {
        
        case 'w':
            playSound(crash)
            break;

        case 'a':
            playSound(kick);
            break;

        case 's':
            playSound(snare);
            break;
        
        case 'd':
            playSound(tom1);
            break;
        
        case 'j':
            playSound(tom2);
            break;
        
        case 'k':
            playSound(tom3);
            break;
        
        case 'l':
            playSound(tom4);
            break;

        default: 
            console.log(key);

    }

}

function buttonAnimation(currentKey) {

    var activeBtn = document.querySelector('.' + currentKey);

    activeBtn.classList.add('pressed');

    setTimeout( function() {
        
        activeBtn.classList.remove('pressed');

    }, 100);
    
}