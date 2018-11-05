const yhteen = document.getElementById('sum');
const vahennus = document.getElementById('sub');
const kerto = document.getElementById('multi');
const jako = document.getElementById('div');
const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const vast = document.getElementById('vastaus');
let num, num1, end;
yhteen.addEventListener('click', function() {
  num = numero1.value;
  num1 = numero2.value;
  end = +num + +num1;
  vast.innerText = end;
});
vahennus.addEventListener('click', function() {
  num = numero1.value;
  num1 = numero2.value;
  end = +num - +num1;
  vast.innerText = end;
});
kerto.addEventListener('click', function() {
  num = numero1.value;
  num1 = numero2.value;
  end = +num * +num1;
  vast.innerText = end;
});
jako.addEventListener('click', function() {
  num = numero1.value;
  num1 = numero2.value;
  end = +num / +num1;
  vast.innerText = end;
});