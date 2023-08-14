$(document).ready(function () {
    $('header button').click(() => { //Evento de clique no botão
        $('form').slideDown();
    })

    $('#btn-cancelar').click(() => {
        $('form').slideUp();
    })

    $('form').on('submit', (e) => {
        e.preventDefault(); //Retirando o comportamento padrão de reset do formulário

        const urlNovaImagem = $('#url-novaImagem').val();
        const novoItem = $('<li style="display:none;"></li>');
        
        $(`<img src="${urlNovaImagem}" />`).appendTo(novoItem);

        $(
            `<div class="overlay-imagem-link">
                <a href="${urlNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#url-novaImagem').val('');


    })
})