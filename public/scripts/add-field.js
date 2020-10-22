//Procurar o botão
document.querySelector("#add-time")
//Quando clicar nobotão
.addEventListener('click', cloneField);

//Executar ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); //o true faz pegar o conteudo dentro da classe

    //Pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo, limpar
    fields.forEach(function(field) {
        //Pegar o field atual e limpa ele
        field.value = "";
    });

    //Colocar na page. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}