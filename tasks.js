function sum(a, b) { return a + b; }

function getType(type) {
    return typeof type;
}

function createArray(num = 10) {
    let arr = new Array(num);

    for(let i = 0; i < arr.length; i++)
    {
        let rand = Math.floor((Math.random()*10)+1);
        arr[i] = rand; 
    }

    return arr;
}

function lessThanSix() {
    let arr = createArray(5);
    console.log(arr);
    let newArr = arr.filter(item => item >= 6);
    console.log(newArr);
    let procent = 100*newArr.length/arr.length;
    return procent;
}

function arrOfStudents (str) {
    let template = ['Настя','Ира','Катя','Сергей','Маша','Стас','Ваня','Миша','Женя','Саша','Денис','Дима','Коля','Паша','Надежда','Таня','Валера'];
    let newArr = [];
    for(let i = 0; i < template.length; i++)
    {
        if(str.search(template[i]) != -1)
            newArr.push(template[i]);
    }

    return newArr;
}

function daysBetween(date) {
    let now = new Date(); // current time - Sat Mar 16 2019 13:04:34 GMT+0300 (Moscow Standard Time) {}
    if(date > now)
    {
        console.log("date can't be future time!");
        return 0;
    }        

    let past = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    // new Date(date.getFullYear()); - Thu Jan 01 1970 03:00:02 GMT+0300 (Moscow Standard Time) {}
    // new Date(date.getFullYear(), date.getMonth()); - Fri Mar 01 2019 00:00:00 GMT+0300 (Moscow Standard Time) {}
    // new Date(date.getFullYear(), date.getMonth(), date.getDate()); - Sun Mar 10 2019 00:00:00 GMT+0300 (Moscow Standard Time) {}

    let millisecondsPerDay = 1000 * 60 * 60 * 24;
    let millisBetween = now.getTime() - past.getTime(); // getTime() - Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0
    let days = millisBetween / millisecondsPerDay;

    return Math.floor(days);
}

function randomSort(arr) {

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    arr.sort(compareRandom);
    for(let i = 0; i < arr.length; i++)
        console.log(`${i+1} - ${arr[i]}`);
}



let x = 7;

switch(x) 
{
    case 1:
    console.log( sum(2,2) );
    break;
    case 2:
    console.log( getType(() => {}) );
    break;
    case 3:
    console.log( createArray(5) );
    break;
    case 4:
    console.log( lessThanSix() );
    break;
    case 5:
    console.log( arrOfStudents('Привет ребята. Давайте отметимся. Валера есть? Ира? Настя? Сергей? Хорошо. Тема нашего занятия следующая...') );
    break;
    case 6:
    let randomDate = new Date("March 1, 2019 23:15:20");
    console.log( daysBetween(randomDate) );
    break;
    case 7:
    let arr = ['Царь', 'Укроп', 'Кенгуру', 'Ель', 'Небоскрёб', 'Гусар'];
    randomSort(arr);
    break;
    default:
    console.log("Enter the value of the existing task number in the variable 'x'!");
}

// ---------------------------------------------
// function onlyUnique(value, index, arr) { 
//     return arr.indexOf(value) === index;
// }
// var a = ['a','a','a','a'];
// var unique = a.filter( onlyUnique );
// console.log(unique);
// ---------------------------------------------
// function countOfDays() { 
//     let now = new Date();
//     console.log(`${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`);
// }