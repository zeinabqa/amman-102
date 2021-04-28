'use strict'

let score=0;
alert('Welcome to my home bage');
let userName = prompt('Could you enter your name please');
alert(' Hello Mr/Ms ' + userName);

// eslint-disable-next-line no-unused-vars
let userInput1 = prompt('Do you know my name ?');
switch (userInput1.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('yes my name is zeinab');
        alert('yse my name is zeinab');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('my name is zeinab  have a nice day');
        alert('my name is zeinab have a nice day');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput2 = prompt('do you live in amman' ?');
switch (userInput2.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('yes i live in amman');
        alert('yes i live in amman ');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong i dont live in amman  ');
        alert('you are wrong i dont live in amman ');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput3 = prompt('is my fav color is green ?');
switch (userInput3.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('you are right');
        alert('you are right');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong');
        alert('you are wrong');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput4 = prompt('Do i love reading  ?');
switch (userInput4.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('you are right i love reading ');
        alert('you are right i love reading');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong i love reading ');
        alert('you are wrong i love reading ');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput5 = prompt('Am i accountant  ?');
switch (userInput5.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('you are right iam accountant ');
        alert('you are right iam accountant');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong iam accountant');
        alert('you are wrong iam accountant');
        break;
}

 alert('For this question you only have 7 attempts only')

let userInput6;
for(let i = 1; i <= 4; i++){
    userInput6 = Number(prompt('How old Am I ?'));
    while(!userInput6){
        userInput6 = Number(prompt('Please Enter a Number Value'));
    }
    if(userInput6 == 25){
        alert('Correct Answar ');
        score++;
        break;
    }else if(userInput6 <= 25){
        alert('Your answar too low');
    }else if(userInput6 >= 25){
        alert('your answar too high');
    }
}
alert('The Correct answar is 26');

alert('For this question you only have 6 attempts only');

let games = ['dota2','wourld of warcraft','hearthstone','warcraft 3'];
let userInput7;
for(let i = 1 ; i <=6 ;i++){
    userInput7 = prompt('Name one strategy game from my top 10 Video games');

    if(userInput7.toLowerCase() === games[0] || userInput7 === games[1] || userInput7 === games[2] || userInput7 === games[3]){
    alert('you are correct');
    score++;
    break;
}else {
    alert('wrong answar please try agian')
}
}
alert(games[0]+'/ '+ games[1] +'/ '+ games [2] +'/ '+ games[3]);

alert('your score is ' + score + ' out of 7')

alert(' YOU DID A GREAT JOB Mr/Ms ' + userName);