/*
 Uma variável foi definida aqui,  não precisa mexer.
*/
let mostra_o_secundario = $('#card-jogador-secundario');

//////////TRABALHANDO COM BRANCHS//////////

/*
 Para exibir o personagem secundário que você
 vai adicionar ao time do seu colega, altere
 o valor da variável abaixo para 'display', 'block'.
 Testando alteracoes no codigo, (comentário) 
*/
mostra_o_secundario.css('display', 'block');

/*
 Aqui foram definidas as variáveis do personagem secundário. Não precisa mexer aqui. :)
*/
let tipo_personagem2_1 = $('#tipo_personagem2-1');
let tipo_personagem2_2 = $('#tipo_personagem2-2');
let tipo_personagem2_3 = $('#tipo_personagem2-3');
let tipo_personagem2_4 = $('#tipo_personagem2-4');

let forca_personagem_2 = $('#forca_personagem_2');
let carisma_personagem_2 = $('#carisma_personagem_2');
let sabedoria_personagem_2 = $('#sabedoria_personagem_2');
let velocidade_personagem_2 = $('#velocidade_personagem_2');
let regeneracao_personagem_2 = $('#regeneracao_personagem_2');
let magica_personagem_2 = $('#magica_personagem_2');

/*
 Aqui foram definidos os valores iniciais para os atributos do personagem secundário.
 Altere os dados do pesonagem modificando os valores das variáveis abaixo!
*/
tipo_personagem2_1.html('Elfo');
tipo_personagem2_2.html('Venenoso');
tipo_personagem2_3.html('Fantasma');
tipo_personagem2_4.html('Sombrio');

forca_personagem_2.css('width', '10%');
carisma_personagem_2.css('width', '15%');
sabedoria_personagem_2.css('width', '20%');
velocidade_personagem_2.css('width', '35%');
regeneracao_personagem_2.css('width', '40%');
magica_personagem_2.css('width', '70%');
