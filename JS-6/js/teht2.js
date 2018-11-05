const image = document.getElementById('kuva');
const text = document.getElementsByTagName('p')[0];
image.addEventListener('mouseenter', function() {
  text.setAttribute('class', 'show');
});
image.addEventListener('mouseleave', function() {
  text.setAttribute('class', 'hidden');
});