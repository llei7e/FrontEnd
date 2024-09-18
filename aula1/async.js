async function buscarEndereço(){

    const cep = document.getElementById('cep').value.trim();

    if (cep.length !== 8 || isNaN(cep)){
        alert('Favor, digitar um CEP valido !');
        return;
    }

    try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok){
        throw new Error('Erro ao buscar o endereço !');
    }

    const data = await response.json();

    if (data.erro){
        throw new Error('CEP não encontrado !')
    }

    document.getElementById('resultado').innerHTML = `
    <p><strong>Logradouro: </strong>${data.logradouro}</p>
    <p><strong>Bairro: </strong>${data.bairro}</p>
    <p><strong>Cidade: </strong>${data.localidade}</p>
    <p><strong>UF: </strong>${data.uf}</p>
    `;
    }catch (error) {
        document.getElementById('resultado').innerHTML = `
            <p class="error">${error.message}</p>
        `;
    }
}