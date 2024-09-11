// FFFFFFFFFFFFFFFFUUUUUUNNNNNNCCCCCTTTTTTTTIIIIIIIIIIIIIIIOOOOOOONNNNNNNNNN//////////////////////////////
// function two(a, b, c){
// return(`Привет ${a} ${b} с возрастом ${c} лет!`)
// };
// two('Иван', 'Петров', '17')

// function three(p){
//     if(p === 'm') return 'Ваш пол мужской!';
//     if(p === 'f') return 'Ваш пол Женский!';
//     if(p === undefined) return 'Ваш пол Неопределен!';
    
// }
// three('m')

// function four(i){
    
//     if(i === 1) {return 'Понедельник'};
//     if(i === 2) {return 'Вторник'};
//     if(i === 3) {return 'Среда'};
//     if(i === 4) {return 'Четверг'};
//     if(i === 5) {return 'Пятница'};
//     if(i === 6) {return 'Суббота'};
//     if(i === 7) {return 'Воскресенье'};
//     if(i < 1 || i > 7) {
//         alert('Неверное значение!');}
// } 

// four(9)


// function five(){
// const text = "Нечего не понимаю я! Возможно и не пойму! Нет я  постараюсь!" 
// const str1 = text.split(' ')[0];
// const str2 = text.split(' ')[4];
// const str3 = text.split(' ')[8]
// return (`${str1}, ${str2}, ${str3}`);
// };

// five()

// function six(name){
//     let time = new Date().getHours();
//     if(time >= 0 && time <= 6){ 
//         return `Доброй ночи ${name}!`};
//     if(time >= 6 && time <= 12){ 
//         return `Доброе утро ${name}!`};
//     if(time >= 12 && time <= 18){ 
//         return `Добрый день ${name}!`};
//     if(time >= 18 && time <= 24){ 
//         return `Добрый вечер ${name}!`};
// }
// six("Каролина")

// function seven(){
//     for (let i = 1; i <= 100; i++) {
//         let ageCategory = '';

//          if (i <= 17) {
//             ageCategory = 'ребенок';
//         } else if (i <= 29) {
//             ageCategory = 'молодой';
//         } else if (i <= 54) {
//             ageCategory = 'зрелый';
//         } else {
//             ageCategory = 'старый';
//         }

//         if (ageCategory) {
//             console.log(`${i} - ${ageCategory}`);
//         }
//     }
// }

// seven();




// const ageFn = (age) => {
//     if (age <= 17) {
//         return 'ребенок';
//     } else if (age <= 29) {
//         return 'молодой';
//     } else if (age <= 54) {
//         return 'зрелый';
//     } else {
//         return 'старый';
//     }
// }

// function eight(name, age) {
//     const ageCategory = ageFn(age);
//     return `${name} имеет возраст ${age} и она ${ageCategory}!`;
// }


// console.log(eight("Каролина", 30));

// Massive /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// if(arr.forEach((item) % 2 === 0)){return true}
// else if (arr.forEach((item) % 2 !== 0)){return false}



// function arr1 (){
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
//     // for( let i = 0; i < arr.length; i++){
//     //     if ((arr[i] % 2) === 0){arr = true}
//     //     if ((arr[i] % 2) !== 0){arr = false}
//     // }
//    arr.forEach((item) => {
//     if((item % 2) === 0){arr = true} 
//     if ((item % 2) !== 0){arr = false}
//    } 
// )
// return arr
// }
// arr1()

// function arr2 (){
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];


//     arr.forEach((item) => {
//             if((item % 2) !== 0){arr = true} 
//             if ((item % 2) === 0){arr = false}
//            }) 
//            return arr
// }
// arr2()


// function arr3(){
//     let arr = [1, 2, 5, 10, 12, 15, 9, ];
//     const arr2 = arr.filter((item) =>((item % 5) === 0))
//         return arr2

    
// }
// arr3()


// function arr4 (){
//     const arr = [1, 2, 3, 4, 5]
//      let sum = 0;
//      arr.map((item) => sum += item)
//      return sum / arr.length 
//  }
//  arr4().toFixed(1)

// function arr5 (){
//     const arr = [1, 2, 3, 4, 5]
//     let cut = arr.shift(0, 1) 
//     arr.push(cut) 
//     return arr
// }
// arr5()


// function arr6 (){
//     const arr = [{ name: "Ivan", age: 23},{name: "Igor", age:33}]
    
//     console.log("User 1 :" + JSON.stringify(arr[0]))
//     console.log("User 1 :" + JSON.stringify(arr[1])) 
// }
// arr6 ()

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOBBBBBBBJJJJJJJJJJJEEEEEEEEEEECCCCCCCCCTTTTTTTTTTT/////////////////////////////////

// function obj1(){
//     let obj = {John: 250, Ann: 300, Igor: 350}
//     let sum = 0;
//     for(let key in obj){
//         if(typeof obj[key] == 'number'){sum +=obj[key]}
//     }
// return sum
// }
// obj1()

// function obj2(){
//     let obj = {John: 250, Ann: 300, Igor: 350}

//     for(let key in obj){
//         if(typeof obj[key] == 'number'){obj[key] *= 2}
//     }
//     return obj
// }
// obj2()

// function obj2(){
//     let obj = {John: 250, Ann: 300, Igor: 350}

//     for(let key in obj){
//         if(typeof obj[key] == 'number'){obj[key] *= 2}
//     }
//     return obj
// }
// obj2()

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { 
//       alert( this.step );
//     }
//   };

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep();
//   ladder.down();
//   ladder.showStep()

// DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM///////////////////////////////////////

// function dom1(){
//     alert ("Привет мир!")
// }

// function dom3 (){
//     const input = document.getElementById("inptext");
//     // const button = document.getElementById("myButton")
//     const value = input.value.trim()
//     if(value){ alert(`Вы ввели ${value}`)}
//     else {
//         console.log('введите текст')
//     }
// }
// // button.addEventListener("click", dom3())

// function dom2 

// document.addEventListener("DOMContentLoaded", function() {
//     const input = document.getElementById("inptexte");
//     const button = document.getElementById("myButton");

//     button.addEventListener("click", function() {
//         input.value = "test@email.ru";
//     });
// });

// function dom4 

// document.addEventListener("DOMContentLoaded", function() {
    
    
//     const button = document.getElementById("myButton");
    
//     button.addEventListener("click", function() {
//         if(button.className == "btn1"){
//         let input1 = document.getElementById("inp1").value;
//         let input2 = document.getElementById("inp2").value;
//        document.getElementById("inp1").value = input2;
//        document.getElementById("inp2").value = input1;
//     }
//     });
// });

// function dom5??????????????????????????

// document.addEventListener("DOMContentLoaded", function() {
    
//         const button1 = document.getElementById("myButton1");
//         const button2 = document.getElementById("myButton2");
//         const input = document.getElementById("inp");

//     button1.addEventListener("click", function() {
//         input.disabled =true;});

//     button2.addEventListener("click", function() {
//         input.disabled =false;});  
// });

// function dom6


// let isVisible = true;
// function dom6() {
//     const button = document.getElementById("myButton");
//     const redSquare =document.getElementById("square")
//     if(isVisible) { 
//         redSquare.style.display = 'none';
//         isVisible = false;
//         button.innerText = "hidden";
//     } else { 
//         redSquare.style.display = 'block';
//         isVisible = true;
//         button.innerText = "show";
//     }
    
// };
// function dom7


// document.addEventListener("DOMContentLoaded", function (){
// const redSquare = document.getElementById("square")
// redSquare.addEventListener('mouseover', function () {
//     this.style.backgroundColor = 'green';
// })
// redSquare.addEventListener('mouseout', function () {
//     this.style.backgroundColor = 'red';
// })
// })

// function dom8 с этого все начиналось........


// document.addEventListener("DOMContentLoaded", function () {
//     const redSquares = document.querySelectorAll('.rectangle');

//     redSquares.forEach(function(square) {
        
//         square.style.backgroundColor = 'red';

//         square.addEventListener('click', function () {
//             if (square.style.backgroundColor === 'red') {
//                 square.style.backgroundColor = 'green';
//             } else {
//                 square.style.backgroundColor = 'red';
//             }
//         });
//     });
// });



// function dom8 этим все закончилось!!!!

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector('.container'); 
//     // задаем всем  красный цвет
//     container.querySelectorAll('.rectangle').forEach(function(square) {
//         square.style.backgroundColor = 'red';
//     });

//     container.addEventListener('click', function (event) {
//         // выбираем квадраты 
//         if (event.target.classList.contains('rectangle')) {
//             const redSquares = container.querySelectorAll('.rectangle');
            
//             // проверяем, есть ли уже зеленый 
//             let hasGreen = false;
//             redSquares.forEach(function(sq) {
//                 if (sq.style.backgroundColor === 'green') {
//                     hasGreen = true;
//                 }
//             });

//             if (hasGreen) {
//                 // если есть зеленый , меняем на красные
//                 redSquares.forEach(function(sq) {
//                     sq.style.backgroundColor = 'red';
//                 });
//             } else {
//                 // если нет,то меняем на зеленый
//                 event.target.style.backgroundColor = 'green';
//             }
//         }
//     });
// });

// function dom 99999

// let expression = ''; 

//     //  добавляем символы 
//     function buttonFn(char) {
//         expression += char;
//         document.getElementById('display').innerText = expression;
//     }

//     // функция вычисления 
//     function calculate() {
//         try {
//             expression = eval(expression).toString(); //  вычисление и строка.
//             document.getElementById('display').innerText = expression;
//         } catch (e) {
//             document.getElementById('display').innerText = 'Ошибка';
//             expression = '';
//         }
//     }

//     //  очистка выражения
//     function clearExpression() {
//         expression = '';
//         document.getElementById('display').innerText = '0';
//     }

// regular expressions 1

// http://site.com
// site.ru/index.php
// http://site.ru/index.php

// const isValidUrl = (str) => {
    
//     try {
//         const url = new URL(str);
//         return (url.protocol === "http:" || url.protocol === "https:") &&
//                (url.pathname.endsWith(".php") || url.pathname.endsWith(".html"));
//     } catch (_) {
//         return false;
//     }
// };
// console.log(isValidUrl("http://site.com"))
// console.log(isValidUrl("http://site.ru/index.php"))
// console.log(isValidUrl("site.ru/index.php"))


// regular expressions 2

// const isValidPhoneNumber = (phone) => {
   
//     const phoneRegex = /^(\+7|8)\s?\(?\d{3}\)?\s?(\d{3})([-\s]?\d{2}){2}$/; // инфа есть desktop/saves/txt
    
    
//     return phoneRegex.test(phone);
// };

// console.log(isValidPhoneNumber("89991112233"));            
// console.log(isValidPhoneNumber("8 (999) 1112233"));        
// console.log(isValidPhoneNumber("+7 (999) 111-22-33"));     
// console.log(isValidPhoneNumber("+7 (999) 111 22 33"));     
// console.log(isValidPhoneNumber("7 (999) 111 22 33"));      
// console.log(isValidPhoneNumber("8999111"));


// AAAAAAAAAAAAAAAASSSSSSSSSYYYYYYYYYYYYNNNNNNNNNNNNNNNCCCCCCCCCCCCCCC

// function func(n, callback) {
//     console.log(n);  
//     if (n < 10) {
//         setTimeout(function(){callback(n + 1)}, 1000);  
//     }
// }


// func(1, (n) => {
//     func(n, (n) => {
//         func(n, (n) => {
//             func(n, (n) => {
//                 func(n, (n) => {
//                     func(n, (n) => {
//                         func(n, (n) => {
//                             func(n, (n) => {
//                                 func(n, (n) => {
//                                     func(n);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// })


// function func2(n, callback) {
//     console.log(n);  
//     if (n < 10) {
//         setTimeout(function(){callback(n + 1)}, 1000);  
//     }
// }
// function delay(ms){
//     return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
// });
// }
// delay(1000).then( func2(1, (n) => {
//     func2(n, (n) => {
//         func2(n, (n) => {
//             func2(n, (n) => {
//                 func2(n, (n) => {
//                     func2(n, (n) => {
//                         func2(n, (n) => {
//                             func2(n, (n) => {
//                                 func2(n, (n) => {
//                                     func2(n);
//                                      });
//                                  });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//      }))


// function beAsync(n){
//     return new Promise((resolve) => {setTimeout(() => resolve(n), 1000);});}


// async function func(n) {
//     console.log(n);
//     if (n < 10) {
//         await beAsync(n + 1);  
//         await func(n + 1);  
//     }
// }

// beAsync(1)

// //////////////////////////////////////////////////////////////////////////не знаю что не так
// function ranodomTime(){
//     return new Promise((resolve, reject) => {
//         const rNum = Math.floor(Math.random() * 10) + 1;
//         console.log(rNum);
//         setTimeout(() => {
//             if(rNum <= 5) {
//                 resolve(`Промис выполнен успешно! Число: ${rNum}`);
//             } else {
//                 reject(`Ошибка! Сгенерировано число: ${rNum}`);
//             }
//         }, rNum * 1000);
//     });
// }

// ranodomTime()
///////////////////////////////////////////////////////////////////////////////////

// function firstPromise() {
//     return new Promise((resolve) => {
//         const randomNumber = Math.floor(Math.random() * 10) + 1; 
//         resolve(randomNumber);  
//     });
// }

// function timePromise(number){ 
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number * number);  
//         }, 3000);
//     })
// }

// firstPromise()
//     .then((result) => {
//         console.log(`Первый промис : ${result}`);
//         return timePromise(result);  
//     })
//     .then((result) => {
//         console.log(`Второй промис : ${result}`);
//         return timePromise(result);  
//     })
//     .then((result) => {
//         console.log(`Третий промис : ${result}`);
//         return timePromise(result);  
//     })
//     .then((result) => {
//         alert(`Результат: ${result}`);  
//     });
    

// ////////////////////////////////////////////////////////////////////////////////////////







