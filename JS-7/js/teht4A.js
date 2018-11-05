const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];
let i, s;
s = 2;
const body = document.getElementsByTagName('body')[0];
for (i=0; i<=2; i++) {
  const image = '<img class="list">';
  const list = '<li></li>';
  body.innerHTML = list + body.innerHTML;
  document.getElementsByTagName('li')[0].innerHTML = image;
  document.getElementsByTagName('img')[0].src = pics[s].thumb;
  s--;
}
const bigImg = document.getElementsByTagName('img')[3];
const img1 = document.getElementsByTagName('img')[0];
const img2 = document.getElementsByTagName('img')[1];
const img3 = document.getElementsByTagName('img')[2];
img1.addEventListener('click', function() {
  bigImg.src = pics[0].big;
  document.getElementsByTagName('div')[0].setAttribute('class', 'visible');
});
img2.addEventListener('click', function() {
  bigImg.src = pics[1].big;
  document.getElementsByTagName('div')[0].setAttribute('class', 'visible');
});
img3.addEventListener('click', function() {
  bigImg.src = pics[2].big;
  document.getElementsByTagName('div')[0].setAttribute('class', 'visible');
});
bigImg.addEventListener('click', function() {
  document.getElementsByTagName('div')[0].setAttribute('class', 'hidden');
});