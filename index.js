let photographer = "Виктория Вебер";
let i = 0;
let speed = 100;

function type() {
    if(i < photographer.length) {
        document.querySelector("#photographer").textContent += photographer.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

const buttonOne = document.querySelector("#buttonOne");
const buttonTwo = document.querySelector("#buttonTwo");
const questions = document.querySelector("#questions");
const image = document.querySelector("#photoChange");
const choice = document.querySelector(".chioce");
const sectionPhotoshoot = document.querySelector(".aboutPhotoshoot")
const questionnaire = document.querySelector(".questionnaire");

const recommendOne = document.querySelector("#one");
const recommendTwo = document.querySelector("#two");
const recommendThree = document.querySelector("#three");
const recommendFour = document.querySelector("#four");
const recommendFive = document.querySelector("#five");

buttonOne.addEventListener("click", personal);
buttonTwo.addEventListener("click", group);

function personal() {
    questions.innerHTML = "Где планируется фотосессия?"
    buttonOne.innerHTML = "В студии";
    buttonTwo.innerHTML = "На улице";

    buttonOne.addEventListener("click", peronalStudio);
    buttonTwo.addEventListener("click", peronalOutside);
}

    function peronalStudio() {
        sectionPhotoshoot.style = "display:flex"; 
        questionnaire.style = "display:none";
    }

    function peronalOutside() {
        sectionPhotoshoot.style = "display:flex";
        image.setAttribute("src", "aloneNature.jpg");
        choice.textContent = "Индивидуальная (улица)";
        recommendThree.textContent = "Продумайте обувь и аксессуары под каждый комплект. Проверьте, что одежда не мятая и без пятен.";
        recommendFour.textContent = "Если вы выбрали съемку на улице, необходимо определить, будет ли это съемка в городе или на природе. Для съемки на природе лучше выбирать утренние или вечерние часы.";
        recommendFive.textContent = "Проверьте заранее прогноз погоды на выбранную дату и предусмотрите запасные варианты на случай смены погоды, другие локации и места.";
        questionnaire.style = "display:none";
    }

function group() {
    questions.innerHTML = "Фотосессия с детьми или нет?"
    buttonOne.innerHTML = "С детьми";
    buttonTwo.innerHTML = "Без детей";

    buttonOne.addEventListener("click", withKids);
    buttonTwo.addEventListener("click", withoutKids);
}
    function withKids() {
        questions.innerHTML = "Где планируется фотосессия?"
        buttonOne.innerHTML = "В студии";
        buttonTwo.innerHTML = "На улице";

        buttonOne.addEventListener("click", withKidsStudio);
        buttonTwo.addEventListener("click", withKidsOutside);
    }
        function withKidsStudio() {
            sectionPhotoshoot.style = "display:flex";
            image.setAttribute("src", "famStudio.jpg");
            choice.textContent = "Групповая с детьми (студия)";
            questionnaire.style = "display:none";
            recommendOne.textContent = "Подбирайте вещи одного стиля и цвета для всех участников съемки.";
            recommendTwo.textContent = "Если вы хотите организовать детскую фотосъемку или семейную фотосессию, можно пригласить фотографа и к вам домой.";
            recommendThree.textContent = "При фотосессии с маленьким ребенком не стоит рассматривать время перед обеденным сном и вечер. Когда малыш бодр и весел - фотосессия получается максимально комфортной для всех.";
            recommendFour.textContent = "Возьмите на фотосессию несколько комплектов одежды. Продумайте обувь и аксессуары под каждый комплект.";
        }
        function withKidsOutside() {
            sectionPhotoshoot.style = "display:flex";
            image.setAttribute("src", "familyNature.jpg");
            choice.textContent = "Групповая с детьми (улица)";
            questionnaire.style = "display:none";
            recommendOne.textContent = "Подбирайте вещи одного стиля и цвета для всех участников съемки.";
            recommendTwo.textContent = "Если вы выбрали съемку на улице, необходимо определить, будет ли это съемка в городе или на природе. Для съемки на природе лучше выбирать утренние или вечерние часы.";
            recommendThree.textContent = "При фотосессии с маленьким ребенком не стоит рассматривать время перед обеденным сном и вечер. Когда малыш бодр и весел - фотосессия получается максимально комфортной для всех.";
            recommendFour.textContent = "Проверьте заранее прогноз погоды на выбранную дату и предусмотрите запасные варианты на случай смены погоды, другие локации и места.";
            recommendFive.textContent = "Возьмите на фотосессию несколько комплектов одежды. Продумайте обувь и аксессуары под каждый комплект.";
        }


    function withoutKids() {
        questions.innerHTML = "Где планируется фотосессия?"
        buttonOne.innerHTML = "В студии";
        buttonTwo.innerHTML = "На улице";

        buttonOne.addEventListener("click", withoutKidsStudio);
        buttonTwo.addEventListener("click", withoutKidsOutside);
    }
        function withoutKidsStudio() {
            sectionPhotoshoot.style = "display:flex";
            image.setAttribute("src", "groupStudio.jpg");
            choice.textContent = "Групповая без детей (студия)";
            questionnaire.style = "display:none";
            recommendOne.textContent = "Подбирайте вещи одного стиля и цвета для всех участников съемки.";
            recommendTwo.textContent = "Учитывайте, чтобы каждому было удобно прийти на встречу в назначенный день и час.";
            recommendThree.textContent = "Возьмите на фотосессию несколько комплектов одежды. Продумайте обувь и аксессуары под каждый комплект.";
            recommendFour.textContent = "Посмотрите и обсудите удачные позы и идеи для фотосессии. Загляните на Pinterest, там очень много вдохновения.";
        }
        function withoutKidsOutside() {
            sectionPhotoshoot.style = "display:flex";
            image.setAttribute("src", "groupNature.jpg");
            choice.textContent = "Групповая без детей (улица)";
            questionnaire.style = "display:none";
            recommendOne.textContent = "Подбирайте вещи одного стиля и цвета для всех участников съемки.";
            recommendTwo.textContent = "Учитывайте, чтобы каждому было удобно прийти на встречу в назначенный день и час.";
            recommendThree.textContent = "Возьмите на фотосессию несколько комплектов одежды. Продумайте обувь и аксессуары под каждый комплект.";
            recommendFour.textContent = "Проверьте заранее прогноз погоды на выбранную дату и предусмотрите запасные варианты на случай смены погоды, другие локации и места.";
            recommendFive.textContent = "Если вы выбрали съемку на улице, необходимо определить, будет ли это съемка в городе или на природе. Для съемки на природе лучше выбирать утренние или вечерние часы.";
        }




