function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div")
    if (nome && nome.trim() !== ""){
            div.style.display = "flex"
            document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "flex";
        div.style.display = "none"
    }
}

function fechar (){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal{
    var selectPratos = document.getElementById("selectPratos");
    var selectBebidas = document.getElementById("selectBebidas");
    var selectSobremesas = document.getElementById("selectSobremesas");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value){
        case "Favorito Do Olimpo":
            total = total + ;
            prato = ;
            break;
        case "Forja de Hefesto":
            total = total + ;
            prato = ;
            break;
        case "Caçada de Ártemis":
            total = total + ;
            prato = ;
            break;
    }

    switch (selectBebidas.value){
        case "Favorito Do Olimpo":
            total = total + ;
            prato = ;
            break;
        case "Forja de Hefesto":
            total = total + ;
            prato = ;
            break;
        case "Caçada de Ártemis":
            total = total + ;
            prato = ;
            break;
    }

    switch (selectSobremesas.value){
        case "Favorito Do Olimpo":
            total = total + ;
            prato = ;
            break;
        case "Forja de Hefesto":
            total = total + ;
            prato = ;
            break;
        case "Caçada de Ártemis":
            total = total + ;
            prato = ;
            break;
    }
    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
}

const limpar = () => {
    document.getElementById("resultado").value = "0";
    document.getElementById("selectPratos").value = "Selecione um prato:";
    document.getElementById("selectBebidas").value = "Selecione uma bebida:";
    document.getElementById("selectSobremesas").value = "Selecione uma sobremesa:";
    document.getElementById("prato-pronto").textContent = " ";
    document.getElementById("bebida-pronto").textContent = " ";
    document.getElementById("sobremesa-pronto").textContent = " ";   
}