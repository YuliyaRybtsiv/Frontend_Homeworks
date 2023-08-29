// 1. При клике на параграф перекрашивать его в красный цвет и менять размер шрифта на 30px

// - Найти параграф в документе и присвоить его переменной
// - Повесить слушатель события на эту переменную
// - При клике менять стиль

const par = document.querySelector('.par');

par.addEventListener('click', function(){
  par.style.color = 'red';
  par.style.fontSize = '30px';
});

// 2. При клике на параграф перекрашивать его в зеленый цвет и менять размер шрифта на 30px. При повторном клике возвращать все как было

const par2 = document.querySelector('.par2');

par2.addEventListener('click', function(){
  par2.classList.toggle('par2_styles')
});

// add() - добавить класс
// remove() - удалить класс
// toggle() - добавить класс, если его нет, или удалить его, если он есть


// 3. Создать кнопку Click и параграф. При клике на кнопку у параграфа меняется цвет заднего фона на зеленый и увеличивается шрифт до 25px. При повторном клике на кнопку все возвращаются

const click_btn = document.querySelector('.click_btn');
const par3 = document.querySelector('.par3');

click_btn.addEventListener('click', function(){
  par3.classList.toggle('par3_styles')
});


// 4. Создать три параграфа. При клике на первый параграф у второго менять цвет текста и цвет заднего фона. При клике на второй параграф, выводить сообщение в консоль - 'Произошел клик на второй параграф'. При клике на третий параграф - удалять стили у второго парграфа.

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

p1.addEventListener('click', function(){
  p2.classList.add('p2_styles')
});

p2.addEventListener('click', function(){
  console.log('Произошел клик на второй параграф')
});

p3.addEventListener('click', function(){
  p2.classList.remove('p2_styles')
});

// 5. Создать кнопку Add paragraph и div. При клике на кнопку в контейнер добавляется параграф с произвольным текстом

const add_par_btn = document.querySelector('.add_par_btn');
const pars_container = document.querySelector('.pars_container');

add_par_btn.addEventListener('click', function(){
  // создать элемент
  const par = document.createElement('p');

  // добавить элементу текст
  par.innerText = 'Hello!!!';

  // добавить созданный элемент в контейнер
  pars_container.append(par);
});

// 6. Создать div в html-документе. Через js добавить в этот div парграф красного цвета

// - найти элемент
const par_container = document.querySelector('.par_container');

// - создать параграф
const par4 = document.createElement('p');

// - наполнить параграф текстом
par4.innerText = 'This paragraph was created by JS';

// - покрасить цвет параграфа в красный (style)
par4.style.color = 'red';

// - положить параграф в контейнер
par_container.append(par4);


// 7. Создать параграф с произвольным текстом в HTML. Создать переменную num с любым числом в JS. Если число в переменной больше 10, то покрасить цвет текста в параграфе в синий, если меньше или равно 10, то покрасить в зеленый

// - найти параграф
const color_text = document.querySelector('.color_text');

// - создать переменную с любым числом
const num = 99;

// - прописать стили для парграфа через if else
if(num > 10){
  color_text.style.color = 'blue'
} else {
  color_text.style.color = 'green'
}


// 8. Создать кнопку и параграф. При каждом клике на кнопку размер шрифта в параграфе увеличивается на 5px

// - найти кнопку и параграф
const incr_btn = document.querySelector('.incr_btn');
const incr_text = document.querySelector('.incr_text');

// - повесить на кнопку событие клик
// - при клике изменять fontSize параграфа на +5px
let size = 14;

incr_btn.addEventListener('click', function(){
  size += 5;
  incr_text.style.fontSize = size + 'px';
});





