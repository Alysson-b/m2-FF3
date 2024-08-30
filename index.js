const arr = []
const input = document.getElementById('inputName')
const btn = document.getElementById('button')
const div = document.getElementById('result')

btn.addEventListener('click', function(){
    buscarName();
})

function buscarName(){

    const inputValue = input.value.trim();

    if(inputValue){

    const name = inputValue.split(' ');
    const lastName = name.pop().toUpperCase();
    const iniciais = name.map(nome => nome.charAt(0).toLowerCase()).join('.')

    arr.push({lastName, iniciais})

    div.innerText = `${lastName}. ${iniciais}`;
    div.style.display = 'flex'
    
    }else{
        alert('Digite seu nome')
    }
}