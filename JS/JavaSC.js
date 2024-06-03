//Выпадающий список с ссылками
const select = document.querySelector('select');
select.addEventListener('change', function(){
  window.location.href = select.value
}) 




