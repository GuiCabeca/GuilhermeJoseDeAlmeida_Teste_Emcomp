var linhaEscolhida = null;  // Variávle para conferir se é um objeto novo ou uma edição de um existente

function onFormSubmit(){        // Efetua quando o botão "Concluir" é pressionado:
    if(validar()){  // Valida se Nome do Livro foi inserido
        var formData = lerFormData();   // Coloca os campos em uma variável
        if(linhaEscolhida == null){     // Confere se é um objeto novo
            inserirNovo(formData);  // Insere as informações da variável na tabela
        }
        else{
            update(formData)    // Caso seja a edição de um objeto, atualiza o objeto com novas informações
        }
        resetarForm();  // Limpa os campos
    }
}

function lerFormData(){     //Coloca as informações inseridas na variável formData
    var formData = {};
    formData["nomeLivro"] = document.getElementById("nomeLivro").value;
    formData["autorLivro"] = document.getElementById("autorLivro").value;
    formData["precoLivro"] = document.getElementById("precoLivro").value;
    formData["idLivro"] = document.getElementById("idLivro").value;

    return formData;
}

function inserirNovo(data) {    // Insere as informações na tabela
    var table = document.getElementById("informacoesLivro").getElementsByTagName('tbody')[0];
    var novaLinha = table.insertRow(table.length);  // Cria nova linha para informações do objeto
    cell1 = novaLinha.insertCell(0);
    cell1.innerHTML = data.nomeLivro;
    cell2 = novaLinha.insertCell(1);
    cell2.innerHTML = data.autorLivro;
    cell3 = novaLinha.insertCell(2);
    cell3.innerHTML = data.precoLivro;
    cell4 = novaLinha.insertCell(3);
    cell4.innerHTML = data.idLivro;
    cell4 = novaLinha.insertCell(4);
    cell4.innerHTML = `<a onClick="editar(this)">Editar</a>|| 
                        <a onClick="deletar(this)">Deletar</a>`;
}

function resetarForm() {    // Remove as informações das caixas de texto
    document.getElementById("nomeLivro").value = "";
    document.getElementById("autorLivro").value = "";
    document.getElementById("precoLivro").value = "";
    document.getElementById("idLivro").value = "";
    linhaEscolhida = null;  // Reseta linhaEscolhida
}

function editar(td){    // Coloca as informações do objeto nas caixas de texto
    linhaEscolhida = td.parentElement.parentElement;    // Coloca esse objeto na variável linhaEscolhida
    document.getElementById("nomeLivro").value = linhaEscolhida.cells[0].innerHTML;
    document.getElementById("autorLivro").value = linhaEscolhida.cells[1].innerHTML;
    document.getElementById("precoLivro").value = linhaEscolhida.cells[2].innerHTML;
    document.getElementById("idLivro").value = linhaEscolhida.cells[3].innerHTML;
}

function update(formData){  // Atualiza as informações da tabela
    linhaEscolhida.cells[0].innerHTML = formData.nomeLivro;
    linhaEscolhida.cells[1].innerHTML = formData.autorLivro;
    linhaEscolhida.cells[2].innerHTML = formData.precoLivro;
    linhaEscolhida.cells[3].innerHTML = formData.idLivro;
}

function deletar(td){   // Deleta um dos objetos
    if(confirm('Tem certeza de que quer deletar esse livro?')){
        linha = td.parentElement.parentElement;
        document.getElementById("informacoesLivro").deleteRow(linha.rowIndex);
        resetarForm();
    }
}

function validar(){     // Valida se um nome foi inserido para o livro. Se não foi, avisa o usuário de que um nome é necessário
    valido = true;
    if(document.getElementById("nomeLivro").value == ""){
        valido = false;
        document.getElementById("nomeLivroValidacaoErro").classList.remove("hide");
    }
    else{
        valido = true;
        if(!document.getElementById("nomeLivroValidacaoErro").classList.contains("hide")){
            document.getElementById("nomeLivroValidacaoErro").classList.add("hide");
        }
    }
    return valido;
}