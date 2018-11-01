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
  const image = '<img src="Here">'
  const list = '<li></li>'
  ul.innerHTML = ul.innerHTML + list;
  document.getElementsByTagName('li')[i].innerHTML = image;
  document.getElementsByTagName('img')[i].src = kuvat[i];
}