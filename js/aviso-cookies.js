const botonaceptarcookies = document.getElementById('btn-aceptar-cookies');
const avisocookies = document.getElementById('aviso-cookies');
const fondoavisocookies = document.getElementById('fondo-aviso-cookies');


avisocookies.classList.add('activo');
fondoavisocookies.classList.add('activo');

botonaceptarcookies.addEventListener('click',() =>{
    avisocookies.classList.remove('activo');
    fondoavisocookies.classList.remove('activo');


    localStorage.setItem('cookies-aceptadas', true);
});