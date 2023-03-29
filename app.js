const secretNum = Math.ceil(Math.random()*10);
let tries = 0;

function guessNum(num) {
    if (tries >= 5) return alert("Игра окончена!!");
    if (num === secretNum) alert("Вы угадали секретное число!");
    else if(secretNum > num){
        alert('Загаданное число больше');
        tries++;
    }
    else {
        alert('Загаданное число меньше');
        tries++;
    }
}
