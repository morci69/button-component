var button1 = document.getElementById('checkName1');
var button2 = document.getElementById('checkName2');

button1.addEventListener('click', function (event) {
    event.defaultPrevented;
    alert("Soy el boton ON numero 1");
})

button2.addEventListener('click', function (event) {
    event.defaultPrevented;
    alert("Soy el boton OFF numero 2");
})
