let min = document.querySelector('#min');
let plus = document.querySelector('#pl');
let ch = document.querySelector('#ch');
let selCh = document.querySelector('#childs');
let sel = document.querySelectorAll('.q');
let num = document.querySelector('#num').innerHTML;
let x = 0;
let buttonMoreTours = document.querySelector('.moretours');
let tours = document.querySelector('.tours');
let touri = document.querySelector('.touri');
let arrayOfExcursions = [{country:'Германия', name: 'По Мюнхену на велосипеде', background: 'url("../img/exc/minxen.jpeg")'},{country:'Германия', name: 'Берлинская стена', background: 'url("../img/exc/berlin_wall.jpg")'}, {country:'Греция', name: 'Индивидуальные экскурсии на Крите', background: 'url("../img/exc/krit.jpg")'}, {country:'Грузия', name: 'Тбилиси-Мцхета: две древние легенды', background: 'url("../img/exc/tbilisi.jpg")'}, {country:'Египет', name: 'Каир на автобусе', background: 'url("../img/exc/kair.jpeg")'}, {country:'Испания', name: 'Башни Серранос', background: 'url("../img/exc/bashni.jpg")'},{country:'Турция', name: 'Обзорная экскурсия по Стамбулу', background: 'url("../img/exc/istanbul.jpg")'}, {country:'Швейцария', name: 'Тур по Швейцарии', background: 'url("../img/exc/sweatherland.png")'} , {country:'Швеция', name: 'Фьорды и ледники Норвегии', repeat:'none', background: 'url("../img/exc/sweden_norway.png")'}, {country:'Норвегия', name: 'Фьорды и ледники Норвегии', background: 'url("../img/exc/sweden_norway.png")'}, {name: 'Однодневная экскурсия в Канди', country: 'Шри-Ланка', background: 'url("../img/exc/kandy-one-day.jpg")'}, {name: 'Однодневная экскурсия в Галле', country: 'Шри-Ланка', background: 'url("../img/exc/galle-one-day.jpg")'}];
let arrayOfTours = [{name: 'Германия', city: ['Дюссельдорф','Мюнхен', 'Росток'], hotels: ['Hyatt Regency Dusseldorf','Sofitel Munich Bayerpost', 'Park Hotel Huebner'], tourists: 2, nights: 7, background: 'url("../img/germany.jpg")'}, {name: 'Греция', city: ['Остров Кос','Остров Крит', 'Пелопоннесский полуостров'], hotels: [], tourists: 3, nights: 5, background: 'url("../img/greece.jpeg")'}, {name: 'Грузия', city: ['Анаклия','Батуми', 'Боржоми'], hotels: [], tourists: 5, nights: 14, background: 'url("../img/georgia.jpg")'}, {name: 'Египет', city: ['Хургада','Макади Бей', 'Таба'], hotels: [], tourists: 2, nights: 10, background: 'url("../img/egypt.jpg")'}, {name: 'Испания', city: ['Барселона','Коста-Верде', 'Менорка'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/spain.jpg")'}, {name: 'Норвегия', city: ['Хафьель','Осло', 'Ставангер'], hotels: [], tourists: 7, nights: 20, background: 'url("../img/norway.jpg")'},{name: 'Турция', city: ['Анкара','Анаталья', 'Стамбул'], hotels: [], tourists: 6, nights: 20, background: 'url("../img/turkey.jpg")'}, {name: 'Швейцария', city: ['Давос','Озеро Леман', 'Санкт-Мориц'], hotels: [], tourists: 2, nights: 9, background: 'url("../img/sweatherland.png")'}, {name: 'Швеция', city: ['Оре','Стокгольм', 'Висбю'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/sweeden.jpg")'}, {name: 'Шри-Ланка', city: ['Бадулла','Элла', 'Канди'], hotels: [], tourists: 4, nights: 14, background: 'url("../img/shri-lanka.jpg")'}];
let germany = document.querySelector('.germany');
let georgia = document.querySelector('.georgia');
let greece = document.querySelector('.greece');
let egypt = document.querySelector('.egypt');
arrayOfTours[0].perem = germany;
arrayOfTours[1].perem = greece;
arrayOfTours[2].perem = georgia;
arrayOfTours[3].perem = egypt;
let blurBlock;
for(let i = 0; i<4; i++){
   arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background;
   blurBlock = document.createElement('div');
   blurBlock.classList.add('blur');
   arrayOfTours[i].perem.append(blurBlock);
   blurBlock.innerText = arrayOfTours[i].name;
}

buttonMoreTours.addEventListener('click', ()=>{
   buttonMoreTours.innerText = '';
   buttonMoreTours.style.setProperty('--sq-display', 'none');
   buttonMoreTours.style.height = '0%';
   tours.style.height = '1000px';
   tours.style.padding = '0px 0px 50px 0px';
   let secondLine = document.createElement('div');
   let thirdLine = document.createElement('div');
   secondLine.classList.add('tourLine2');
   thirdLine.classList.add('tourLine3');
   tours.append(secondLine);
   tours.append(thirdLine);
   touri.style.height = '33%';

   let spain;
   let norway;
   let turkey;
   let sweatherland;
   let sweeden;
   let shri_lanka;
   let counterCountries = 0;
   let countryTourCreating = (country) => {
      counterCountries++;
      country = document.createElement('div');
      country.classList.add('tour');
      arrayOfTours[counterCountries+3].perem = country;
      if(counterCountries<5) secondLine.append(country)
      else if(counterCountries>4) {
         country.classList.add('tourMarginClass');
         thirdLine.append(country);
      }
   }
   countryTourCreating(spain);
   countryTourCreating(norway);
   countryTourCreating(turkey);
   countryTourCreating(sweatherland);
   countryTourCreating(sweeden);
   countryTourCreating(shri_lanka);
   
   for(let i = 4; i<arrayOfTours.length; i++){
      arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background;
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfTours[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfTours[i].name;
  }

})

let allNum = 0;//!переменная общего числа людишек

min.addEventListener('click', ()=>{
   num--;
   if(num < 1)num = 1;
   document.querySelector('#num').innerHTML = num;
   allNum = num;
});

plus.addEventListener('click', ()=>{
   num++;
   if(num > 20)num = 20;
   document.querySelector('#num').innerHTML = num;
   allNum = num;
});

ch.addEventListener('click', ()=>{
   selCh.classList.toggle('tok');
});

let suggestions_tours_container = document.querySelector('.suggestions-tours-container');
let formBlock = document.querySelector('.formBlock');
let suggestions = document.querySelector('.suggestions');
let toursBlock = document.querySelector('.tours');
let otherOffersContainer = document.createElement('div');
otherOffersContainer.classList.toggle('otherOffersClass');

let ch1 = document.querySelector('.ch1');
let ch2 = document.querySelector('.ch2');
let ch3 = document.querySelector('.ch3');
let ch4 = document.querySelector('.ch4');
let excCounter = 0;
arrayOfExcursions.forEach(el => {
   el.perem = document.createElement('div');
   el.perem.classList.add('tour');
})


let firstExcLine = document.createElement('div');
let secondExcLine = document.createElement('div');
let thirdExcLine = document.createElement('div');
let spanExcBlock = document.createElement('div');
let tipe = 0;
ch1.classList.add('active');

ch1.addEventListener('click', ch1Func);

ch2.addEventListener('click',ch2Func);

ch3.addEventListener('click', ch3Func);

ch4.addEventListener('click', ch4Func);

function excCreating(){
   spanExcBlock.classList.add('excSpanBl');
   firstExcLine.classList.add('tourLine2');
   secondExcLine.classList.add('tourLine2');
   thirdExcLine.classList.add('tourLine3');
   spanExcBlock.innerText = 'Экскурсии';
   otherOffersContainer.append(spanExcBlock);
   otherOffersContainer.append(firstExcLine);
   otherOffersContainer.append(secondExcLine);
   otherOffersContainer.append(thirdExcLine);
   secondExcLine.style['padding-bottom'] = '20px';
   secondExcLine.style['padding-top'] = '20px';
   secondExcLine.style['border-top'] = 'solid 2px black';
   secondExcLine.style['border-bottom'] = 'solid 2px black';

   for(let i = 0; i<arrayOfExcursions.length;i++){
      if(arrayOfExcursions[i].repeat != 'none'){
         if(i<4) firstExcLine.append(arrayOfExcursions[i].perem)
         else if(i<8) secondExcLine.append(arrayOfExcursions[i].perem)
         else {
            thirdExcLine.append(arrayOfExcursions[i].perem);
            arrayOfExcursions[i].perem.style.margin =  ' 0px 2.5%';
         }
      }
      arrayOfExcursions[i].perem.style['background-image'] = arrayOfExcursions[i].background; 
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfExcursions[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfExcursions[i].name;
      blurBlock.style['font-size'] = '120%';
      blurBlock.style.display = 'inline-block';
      blurBlock.classList.add('excClassSpan');
      blurBlock.style['padding-top'] = '3.5%';
   }

}


function ch1Func(event) {
   ch1.classList.add('active');
   ch2.classList.remove('active');
   ch3.classList.remove('active');
   ch4.classList.remove('active');
   formBlock.style.display = 'block';
   suggestions.style.display = 'flex';
   toursBlock.style.display = 'flex';
   otherOffersContainer.style.display = 'none';
   ch1.removeEventListener('click', ch1Func);

ch2.addEventListener('click',ch2Func);

ch3.addEventListener('click', ch3Func);

ch4.addEventListener('click', ch4Func);
}

function ch2Func(event) {
   ch1.classList.remove('active');
   ch2.classList.add('active');
   ch3.classList.remove('active');
   ch4.classList.remove('active');
   formBlock.style.display = 'none';
   suggestions.style.display = 'none';
   toursBlock.style.display = 'none';
   spanExcBlock.style.display = 'flex';
   firstExcLine.style.display = 'flex';
   secondExcLine.style.display = 'flex';
   thirdExcLine.style.display = 'flex';
   otherOffersContainer.classList.add('otherOffersClass');
   otherOffersContainer.style.display = 'flex';
   otherOffersContainer.style.background = '#4e4d4d'
   suggestions_tours_container.append(otherOffersContainer);
   ch2.removeEventListener('click',ch2Func);
   ch1.addEventListener('click', ch1Func);
   ch3.addEventListener('click', ch3Func);
   ch4.addEventListener('click', ch4Func);

   if(tipe == 0)excCreating();
   tipe++;
}
let u = 0;
function ch3Func(event) {
   ch1.classList.remove('active');
   ch2.classList.remove('active');
   ch3.classList.add('active');
   ch4.classList.remove('active');
   formBlock.style.display = 'none';
   suggestions.style.display = 'none';
   toursBlock.style.display = 'none';
   spanExcBlock.style.display = 'none';
   firstExcLine.style.display = 'none';
   secondExcLine.style.display = 'none';
   thirdExcLine.style.display = 'none';
   otherOffersContainer.classList.add('otherOffersClass');
   suggestions_tours_container.append(otherOffersContainer);
   otherOffersContainer.style.display = 'flex';
   otherOffersContainer.style.background = '#4e4d4d'
   ch3.removeEventListener('click', ch3Func);
   ch1.addEventListener('click', ch1Func);
   ch2.addEventListener('click',ch2Func);
   ch4.addEventListener('click', ch4Func);
   
   
   let scr = document.createElement('div');
   scr.classList.add('scr');
   let b1 = document.createElement('div');
   b1.classList.add('b1');
   let b2 = document.createElement('div');
   b2.classList.add('b2');
   scr.append(b1);
   scr.append(b2);

   /* ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'brown', 'pink'] */

   let slider = {
      slides:[0, 1, 2, 3, 4, 5, 6, 7],
      frame:0, // текущий кадр для отбражения
      set: function(num){ // установка нужного фона слайдеру
         if(num == 0){
            b1.style.background = 'red';
            b2.style.background = 'yellow';
         };
         if(num == 1){
            b1.style.background = 'yellow';
            b2.style.background = 'green';
         };
         if(num == 2){
            b1.style.background = 'green';
            b2.style.background = 'blue';
         };
         if(num == 3){
            b1.style.background = 'blue';
            b2.style.background = 'orange';
         };
         if(num == 4){
            b1.style.background = 'orange';
            b2.style.background = 'purple';
         };
         if(num == 5){
            b1.style.background = 'purple';
            b2.style.background = 'brown';
         };
         if(num == 6){
            b1.style.background = 'brown';
            b2.style.background = 'pink';
         };
         if(num == 7){
            b1.style.background = 'pink';
            b2.style.background = 'red';
         };
      },
      init: function(){ // запуск слайдера с картинкой с нулевым индексом
         this.set(this.slides[this.frame]);
         console.log(this.frame)
      },
      left: function(){
         this.frame--;
         if(this.frame < 0) this.frame = this.slides.length-1;
         this.set(this.slides[this.frame]);
      },
      right: function(){
         this.frame++;
         if(this.frame == this.slides.length) this.frame = 0;
         this.set(this.slides[this.frame]);		
      }
   };
   window.onload = function(){ // запуск слайдера после загрузки документа
      slider.init();
   };

   let left = document.createElement('button');
   left.classList.add('left');
   left.innerHTML = '<';
   left.addEventListener('click', ()=>{
      slider.left();
   });
   let right = document.createElement('button');
   right.classList.add('right');
   right.innerHTML = '>';
   right.addEventListener('click', ()=>{
      slider.right();
   });

   let blop = document.createElement('div');
   blop.classList.add('main');

   blop.append(left);
   blop.append(scr);
   blop.append(right);
   if(u == 0)otherOffersContainer.append(blop);
   u++;
   otherOffersContainer.classList.add('sx');

}
function ch4Func(event) {
   ch1.classList.remove('active');
   ch2.classList.remove('active');
   ch3.classList.remove('active');
   ch4.classList.toggle('active');
   formBlock.style.display = 'none';
   suggestions.style.display = 'none';
   toursBlock.style.display = 'none';
   spanExcBlock.style.display = 'none';
   firstExcLine.style.display = 'none';
   secondExcLine.style.display = 'none';
   thirdExcLine.style.display = 'none';
   otherOffersContainer.classList.add('otherOffersClass');
   suggestions_tours_container.append(otherOffersContainer);
   ch4.removeEventListener('click', ch4Func);
   otherOffersContainer.style.display = 'flex';
   otherOffersContainer.style.background = '#4e4d4d'

   ch1.addEventListener('click', ch1Func);
   ch2.addEventListener('click',ch2Func);
   ch3.addEventListener('click', ch3Func);
}

let r1 = document.querySelector('.r1');
let r2 =document.querySelector('.r2');
let r3 =document.querySelector('.r3');
let r4 = document.querySelector('.r4');
let r5 = document.querySelector('.r5');
let s1 = document.querySelector(".ss");
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let bar = document.getElementsByClassName('bar');

r1.onclick = function() {
    s1.style.marginLeft="0";
    for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r1.classList.add('barcheck');

   };
r2.onclick = function() {
   s1.style.marginLeft="-20%";
   for(let i=0;i<bar.length;i++){
   bar[i].classList.remove('barcheck');
   }
   r2.classList.add('barcheck');
};
r3.onclick = function() {
   s1.style.marginLeft="-40%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r3.classList.add('barcheck');
   };

r4.onclick = function() {
   s1.style.marginLeft="-60%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r4.classList.add('barcheck');
   };
r5.onclick = function() {
   s1.style.marginLeft="-80%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r5.classList.add('barcheck');
   };
let magrin = +window.getComputedStyle(s1).marginLeft.slice(0, -2);
arrow1.onclick=function(){
   magrin += 20;
   if(magrin > 0){

      s1.style.marginLeft ="-80%";
      magrin = -80;

}
   else{s1.style.marginLeft = magrin + "%"; }
   k();
}
arrow2.onclick=function(){
   
   magrin -= 20;
   if(magrin < -80){
      s1.style.marginLeft ="0";
      magrin = 0;
}
   else{s1.style.marginLeft = magrin + "%"; }
   k();
}
r1.classList.add('barcheck')
let k = () =>{
   if(magrin == 0){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r1.classList.add('barcheck')
   }
   else if(magrin == -20){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r2.classList.add('barcheck');
      
   }
   else if(magrin == -40){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r3.classList.add('barcheck');
   }
   else if(magrin == -60){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r4.classList.add('barcheck');
   }
   else if(magrin == -80){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r5.classList.add('barcheck');
   }
}

let butT = document.querySelector('#lll');
let ppp = document.querySelector('#ppp');
let lang = document.querySelector('.language');
let az = document.querySelector('#az');

const uhb = () => {
   document.querySelector('.zap').style.display = 'flex';
   document.querySelector('.ex').style.display = 'flex';
   document.querySelector('.fucktors').style.display = 'flex';
   document.querySelector('.sales').style.display = 'flex';
   butT.removeEventListener('click', uhb);
   ppp.addEventListener('click', ygv);
}

const ygv = () => {
   document.querySelector('.zap').style.display = 'none';
   document.querySelector('.ex').style.display = 'none';
   document.querySelector('.fucktors').style.display = 'none';
   document.querySelector('.sales').style.display = 'none';
   butT.addEventListener('click', uhb);
   ppp.removeEventListener('click', ygv);
}

const okm = () => {
   lang.removeEventListener('click', okm);
   az.addEventListener('click', ijn);
   az.style.display = 'flex';
   lang.style.visibility = 'hidden';
}

const ijn = () => {
   az.removeEventListener('click', ijn);
   lang.addEventListener('click', okm);
   az.style.display = 'none';
   lang.style.visibility = 'visible';
}

butT.addEventListener('click', uhb);
ppp.addEventListener('click', ygv);
lang.addEventListener('click', okm);
az.addEventListener('click', ijn);