var muda_img = document.querySelector('.muda-img');
var imagens = ['A1.jpg', 'A2.jpg', 'A3.jpg', 'A4.jpg', 'A5.jpg'];   // Vetor com as imagens a serem exibidas
var i = 0;  // Index da imagem atual

function anterior(){    // Ocorre quando clicar o botão anterior
    if(i <= 0){
        i = imagens.length;
    }
    i--;
    return setImagem();
}

function proxima(){     // Ocorre quando clicar o botão proximo
    if(i >= imagens.length - 1){
        i = -1;
    }
    i++;
    return setImagem();
}

function setImagem(){   // Muda o endereço da imagem
    return muda_img.setAttribute('src', 'Imagens/' + imagens[i]);
}