let formulario=document.getElementById("usuario");
let datos=document.querySelectorAll("#fusuario input");


form.addEventListener('submit',e=>{
    e.preventDefault(); 
})

const validarInput=(R,input,ss)=>{
    if(R.test(input.value)){
        document.getElementById(`S${ss}`).classList.remove('error');
            document.getElementById(`S${ss}`).classList.add('SC');
            document.querySelector(`#S${ss} i`).classList.add('CK');
            document.querySelector(`#S${ss} i`).classList.remove('Ex');
            document.querySelector(`#S${ss} .error`).classList.remove('Eroror')

        }else{
            document.getElementById(`S${ss}`).classList.add('error');
            document.getElementById(`S${ss}`).classList.remove('SC');
            document.querySelector(`#S${ss} i`).classList.remove('CK');
            document.querySelector(`#S${ss} i`).classList.add('Ex');
            document.querySelector(`#S${ss} .error`).classList.add('Eroror')

    }
}