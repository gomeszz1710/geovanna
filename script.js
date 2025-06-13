const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seu estilo de vida?",
        alternativas: [
            {
                texto: "Campo",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Cidade",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "O que te faz sentir que está vivendo uma vida plena e satisfatória no seu local?",
        alternativas: [
            {
                texto: "A paz, o ar puro e a conexão com a natureza me dão uma sensação de plenitude. Ter tempo para cuidar da horta, ver o pôr do sol sem pressa...",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Acesso a cultura, eventos, a diversidade de pessoas e a facilidade de acesso a tudo me fazem sentir que aproveito a vida ao máximo. As oportunidades de aprendizado e crescimento são enormes.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Como você lida com os momentos de estresse ou cansaço? Onde encontra refúgio?",
        alternativas: [
            {
                texto: "Quando estou estressado, busco a simplicidade: uma caminhada no meio do mato, cuidar dos animais, ou simplesmente sentar e ouvir o silêncio. A natureza me acalma",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Para desestressar, procuro um parque tranquilo, um café aconchegante, ou me perco num bom livro. Às vezes, o próprio agito da cidade, como uma corrida ou um show, me ajuda a esvaziar a mente.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Qual é o maior desafio diário de viver onde você mora? Como você o enfrenta?",
        alternativas: [
            {
                texto: "O transporte é sempre um desafio, especialmente para acessos mais específicos ou serviços. Tenho que planejar tudo com antecedência e muitas vezes dependo de carro. Mas a tranquilidade compensa.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "O trânsito e o tempo de deslocamento são enormes. Tento otimizar minhas rotas, usar transporte público ou bicicleta sempre que possível. Paciência é a chave! ",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Como você constrói e mantém suas relações sociais e senso de comunidade?",
        alternativas: [
            {
                texto: "A comunidade aqui é muito unida. Nos conhecemos todos, ajudamos uns aos outros. As festas da igreja, os mutirões e as visitas de vizinhos são essenciais para manter os laços.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Participo de grupos de interesse, faço aulas, frequento eventos no meu bairro. As redes sociais também ajudam a manter contato com amigos de diferentes círculos. A diversidade de pessoas é um ponto forte.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();