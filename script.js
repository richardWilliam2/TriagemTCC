    const nome = document.querySelector("#name");
    const sintomas = document.querySelector("#sint1");
    const sintomas2 = document.querySelector("#sint2");
    const sintomas3 = document.querySelector("#sint3");
    const sintomas4 = document.querySelector("#sint4");
    const formulario = document.querySelector("#formTriagem");
    const Tela = document.querySelector("#telaPrincipal")
    
function esvaziarformulario(){
    //Quando apertar enter levar para o proximo campo
    nome.addEventListener("keydown", (event)=> {
        if(event.key ==="Enter"){
            event.preventDefault();//evita enviar formulario
            sintomas.focus();
        }
    })
    sintomas.addEventListener("keydown", (event)=> {
        if(event.key ==="Enter"){
            event.preventDefault();//evita enviar formulario
            sintomas2.focus();
        }
    })
    sintomas2.addEventListener("keydown", (event)=> {
        if(event.key ==="Enter"){
            event.preventDefault();//evita enviar formulario
            sintomas3.focus();
        }
    })
    sintomas3.addEventListener("keydown", (event)=> {
        if(event.key ==="Enter"){
            event.preventDefault();//evita enviar formulario
            sintomas4.focus();
        }
    })
        formulario.addEventListener("submit",(event)=> {
            event.preventDefault();
            if(nome.value === " " || sintomas.value === ""|| sintomas2.value === "" || sintomas3.value === "" || sintomas4.value === ""){
            alert("Insira dados em todos os campos");
        }else{
            alert("Formulario enviado com sucesso!");
            formulario.reset();
            formulario.innerHTML = "";
        }
        })    
      
        }
esvaziarformulario();


