const loader = document.getElementById('loader');
const page = document.getElementById('page');
const valueBox = document.querySelector(".value-box");
const sectionFrame1 = document.getElementById('frame_1');
const sectionFrame2 = document.getElementById('frame_2');
const sectionFrame3 = document.getElementById('frame_3');
const sectionFrame4 = document.getElementById('frame_4');
const sectionFrame5 = document.getElementById('frame_5');
const buttonRegistry = document.querySelector('#frame_1 > button');
const buttonNext = document.getElementById('next');
const buttonCancel = document.getElementById('cancel');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('#form_id input');
const pass = document.getElementById('pass');
const repeatPass = document.getElementById('repeat_pass');
const countries = ["Абхазия", "Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Ангуилья", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Беларусь", "Белиз", "Бельгия", "Бенин", "Бермуды", "Болгария", "Боливия", "Босния/Герцеговина", "Ботсвана", "Бразилия", "Британские Виргинские о-ва", "Бруней", "Буркина Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гваделупа", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Гернси остров", "Гибралтар", "Гондурас", "Гонконг", "Государство Палестина", "Гренада", "Гренландия", "Греция", "Грузия", "ДР Конго", "Дания", "Джерси остров", "Джибути", "Доминиканская Республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Китай", "Колумбия", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Кука острова", "Кыргызстан", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малайзия", "Мали", "Мальдивские острова", "Мальта", "Марокко", "Мексика", "Мозамбик", "Молдова", "Монако", "Монголия", "Мьянма (Бирма)", "Мэн о-в", "Намибия", "Непал", "Нигер", "Нигерия", "Нидерланды (Голландия)", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "О.А.Э.", "Оман", "Пакистан", "Палау", "Панама", "Папуа Новая Гвинея", "Парагвай", "Перу", "Питкэрн остров", "Польша", "Португалия", "Пуэрто Рико", "Республика Конго", "Реюньон", "Россия", "Руанда", "Румыния", "США", "Сальвадор", "Самоа", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Святая Люсия", "Северная Корея", "Сейшеллы", "Сен-Пьер и Микелон", "Сенегал", "Сент Китс и Невис", "Сент-Винсент и Гренадины", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Токелау острова", "Тонга", "Тринидад и Тобаго", "Тувалу", "Тунис", "Туркменистан", "Туркс и Кейкос", "Турция", "Уганда", "Узбекистан", "Украина", "Уоллис и Футуна острова", "Уругвай", "Фарерские острова", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Полинезия", "Хорватия", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Южная Корея", "Южная Осетия", "Ямайка", "Япония",];
const select = document.getElementById('countries');
const email = document.getElementById('email');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const buttonSend = document.getElementById('send');
const buttonCheck = document.getElementById('check');
const buttonNextOfPhonePage = document.getElementById('nextPhone');
const inputPhone = document.getElementById('phone');
const inputCode = document.getElementById('code');
const blockConfirmationCode = document.querySelector('.confirmation-code');
const buttonBackCard = document.getElementById('backCard');
const buttonEnd = document.getElementById('end');
const inputValidity = document.getElementById('validity');
const inputCVV = document.getElementById('cvv');
const checkbox = document.getElementById('checkbox');
const inputFirstPart = document.querySelector('#valueOfCard input:nth-child(1)');
const inputSecondPart = document.querySelector('#valueOfCard input:nth-child(2)');
const inputThirdPart = document.querySelector('#valueOfCard input:nth-child(3)');
const inputFourthPart = document.querySelector('#valueOfCard input:nth-child(4)');
let progress = 0;

// progress bar
let timerId = setInterval(function () {
    if (progress > 100) {
        clearInterval(timerId);
        loader.style.display = "none";
        page.style.display = "flex";
    }
    progress += 5;
    valueBox.style.width = `${progress}%`;
}, 75);

buttonRegistry.addEventListener('click', () => {
    sectionFrame1.style.display = "none";
    sectionFrame2.style.display = "flex";
});
buttonCancel.addEventListener('click', () => {
    sectionFrame2.style.display = "none";
    sectionFrame1.style.display = "flex";
});
buttonNext.addEventListener('click', () => {
    if (validate()) {
        sectionFrame2.style.display = "none";
        sectionFrame3.style.display = "flex";
    }
});

function inputsHasValues() {
    let check = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            check = false;
            break;
        }
    }
    return check;
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {
        if (inputsHasValues()) {
            if (pass.value == repeatPass.value) {
                buttonNext.removeAttribute('disabled');
                repeatPass.style.borderBottom = '1.5px solid #a397ff';
            } else if (pass.value != repeatPass.value) {
                repeatPass.style.borderBottom = '1.5px solid #ff0000';
                buttonNext.setAttribute('disabled', 'disabled');
            } else {
                console.log('No');
                buttonNext.setAttribute('disabled', 'disabled');
            }
        }
    });
}

// load countries
for (let i = 0; i < countries.length; i++) {
    let option = document.createElement('option');
    option.innerHTML = `${countries[i]}`;
    select.appendChild(option);
}

function validate() {
    let regEmail = /^[a-zA-Z0-9!#$%&'*+\-=?^_`{|}~]+@[a-z]+\.[a-z]{2,4}$/;
    let regNameAndSurname = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    if (regNameAndSurname.test(name.value) == false) {
        alert('Введите корректное имя');
        return false;
    }

    if (regEmail.test(email.value) == false) {
        alert('Введите корректный e-mail');
        return false;
    }

    if (regNameAndSurname.test(surname.value) == false) {
        alert('Введите корректную фамилию');
        return false;
    }

    return true;
}

function validatePhoneNumber() {
    let regPhoneNumber = /^[+]{1}[0-9]{3}[(]{1}[0-9]{2}[)]{1}[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
    if (regPhoneNumber.test(inputPhone.value) == false) {
        alert('Введите корректный номер телефона');
        inputPhone.value = "";
        return false;
    }
    return true;
}

buttonSend.addEventListener('click', () => {
    if (validatePhoneNumber()) {
        blockConfirmationCode.style.visibility = 'visible';
    } else {
        blockConfirmationCode.style.visibility = 'hidden';
    }
});

buttonCheck.addEventListener('click', () => {
    if(inputCode.value.length == 4) {
        console.log('Yes');
        buttonNextOfPhonePage.removeAttribute('disabled');
    } else {
        console.log('No');
        buttonNext.setAttribute('disabled', 'disabled');
    }
});

buttonNextOfPhonePage.addEventListener('click', () => {
    sectionFrame3.style.display = "none";
    sectionFrame4.style.display = "flex";
});

function validateCardNumber() {
    let regCardNumber = /^[0-9]{4}$/;
    let regValidity = /^(01|02|03|04|05|06|07|08|09|10|11|12)\/{1}[0-9]{2}$/;
    let regCVV = /^[0-9]{3}$/;
    if (regCardNumber.test(inputFirstPart.value) == false || regCardNumber.test(inputSecondPart.value) == false || 
        regCardNumber.test(inputThirdPart.value) == false || regCardNumber.test(inputThirdPart.value) == false) {
        alert('Введите корректный номер карты');
        regCardNumber.value = "";
        return false;
    }

    if(regValidity.test(inputValidity.value) == false) {
        alert('Введите корректный срок действия');
        inputValidity.value = "";
        return false;
    }

    if(regCVV.test(inputCVV.value) == false) {
        alert('Введите корректный CVV');
        inputCVV.value = "";
        return false;
    }
    return true;
}

checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        buttonEnd.removeAttribute('disabled');
    } else {
        buttonEnd.setAttribute('disabled', 'disabled');
    }
})

buttonEnd.addEventListener('click', () => {
    if (validateCardNumber()) {
        sectionFrame4.style.display = 'none';
        sectionFrame5.style.display = 'flex';
    }
});

inputFirstPart.addEventListener('input', () => {
    if(inputFirstPart.value.length == 4) {
        inputSecondPart.focus();
    }
});
inputSecondPart.addEventListener('input', () => {
    if(inputSecondPart.value.length == 4) {
        inputThirdPart.focus();
    }
});
inputThirdPart.addEventListener('input', () => {
    if(inputThirdPart.value.length == 4) {
        inputFourthPart.focus();
    }
});

