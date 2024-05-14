    let numeroUm = document.getElementById("number-one");
    let numeroDois = document.getElementById("number-two");
    const acionar = document.getElementById("form-acionar");
    let message = document.getElementById("p-message");

  
   

    acionar.addEventListener('submit', (e) => {
        if(numeroUm.value > numeroDois.value) {
            //alert(`O número ${numeroUm.value} é maior que o número ${numeroDois.value}`);
            e.preventDefault();
            message.classList.add('p-mensagem-aprovada');
            message.innerHTML = `O número ${numeroUm.value} é maior que o número ${numeroDois.value}`;
            message.style.display = "flex";
            numeroUm.value = '';
            numeroDois.value = "";
       
        }else if(numeroUm.value < numeroDois.value){
            e.preventDefault();
            message.classList.add('p-mensagem-reprovada');
            message.innerHTML = `O número ${numeroUm.value} não é maior que o número ${numeroDois.value}`;
            message.style.display = "flex";
            numeroUm.value = '';
            numeroDois.value = "";
        }
    });



