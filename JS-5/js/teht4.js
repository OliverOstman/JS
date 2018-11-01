const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let i;
const ul = document.getElementsByTagName('ul')[0];
for (i=0; i<=4; i++) {
  const im = document.createElement('img');
  im.src = kuvat[i];
  const list = document.createElement('li');
  ul.appendChild(list);
  list.appendChild(im);
}