import { ClasseAutor } from "../js-classes/classe-autor.js"
import { hojeISO } from "./funcoes-de-data-e-hora.js"

const CATALOGO_AUTORES = [
  // FILOSOFIA
  {
    id: "0001",
    nome: "Thomas Kuhn",
    descricaoCurta:
      "Thomas Samuel Kuhn foi um físico, historiador e filósofo da ciência dos EUA, célebre por ‘A Estrutura das Revoluções Científicas’, que introduziu o conceito de paradigma e a ideia de rupturas no progresso científico.",
    descricaoLonga:
      "Thomas Samuel Kuhn (1922–1996) foi um físico, historiador e filósofo da ciência estadunidense, conhecido por sua obra 'A Estrutura das Revoluções Científicas' (1962). Introduziu o conceito de paradigma, demonstrando que o progresso científico não é linear, mas ocorre por rupturas epistemológicas. Seu trabalho redefiniu a compreensão da ciência como prática social e histórica, influenciando campos como sociologia do conhecimento e epistemologia. Lecionou em Harvard, Berkeley e Princeton, tornando-se uma das vozes mais influentes da filosofia moderna da ciência.",
    nacionalidade: "Estadunidense",
    generos: ["Filosofia"],
    generoIrmao: "Divulgação Científica",
    titulos: ["A Estrutura das Revoluções Científicas", "A Tensão Essencial"]
  },
  {
    id: "0002",
    nome: "Alan Watts",
    descricaoCurta:
      "Alan Watts foi um escritor e palestrante anglo-americano que popularizou zen-budismo e taoísmo no Ocidente, unindo filosofia oriental, psicologia e linguagem acessível.",
    descricaoLonga:
      "Alan Wilson Watts (1915–1973) foi um filósofo, escritor e palestrante britânico radicado nos Estados Unidos. Tornou-se conhecido por traduzir conceitos do budismo zen, taoísmo e hinduísmo para o público ocidental, promovendo uma visão espiritual livre de dogmas. Autor de mais de 25 livros, entre eles 'A Sabedoria da Insegurança', misturou filosofia oriental e psicologia moderna com linguagem poética e acessível. Seu pensamento influenciou contraculturas e movimentos espirituais da década de 1960, permanecendo referência em espiritualidade comparada.",
    nacionalidade: "Britânico-Americano",
    generos: ["Filosofia"],
    generoIrmao: "Divulgação Científica",
    titulos: [
      "A Sabedoria da Insegurança - Como sobreviver na era da ansiedade",
      "Tao - O Curso do Rio"
    ]
  },
  {
    id: "0003",
    nome: "Sam Harris",
    descricaoCurta:
      "Sam Harris é um filósofo e neurocientista norte-americano; critica o dogmatismo religioso e defende uma espiritualidade baseada em ciência, ética e meditação.",
    descricaoLonga:
      "Sam Harris (n. 1967) é um filósofo, neurocientista e escritor estadunidense, conhecido por sua crítica à religião e defesa de uma espiritualidade racional. Cofundador do movimento Novo Ateísmo, combina filosofia moral, neurociência e meditação contemplativa em obras como 'Despertar' e 'A Paisagem Moral'. Doutor em neurociência pela UCLA, Harris explora livre-arbítrio, consciência e ética científica. Também é podcaster e palestrante popular, conhecido por debater razão, ceticismo e o papel da ciência na determinação de valores humanos.",
    nacionalidade: "Estadunidense",
    generos: ["Filosofia"],
    generoIrmao: "Divulgação Científica",
    titulos: [
      "Despertar - Um guia para a espiritualidade sem religião",
      "A Paisagem Moral - Como a ciência pode determinar os valores humanos"
    ]
  },

  // SOCIOLOGIA
  {
    id: "0004",
    nome: "Jessé Souza",
    descricaoCurta:
      "Jessé Souza é um sociólogo brasileiro que analisa desigualdades, classes e elites no Brasil, com crítica a narrativas que naturalizam privilégios.",
    descricaoLonga:
      "Jessé José Freire de Souza (n. 1960) é sociólogo brasileiro, professor e autor de obras que analisam as estruturas sociais do Brasil. Doutor pela Universidade de Heidelberg, tornou-se referência em temas como desigualdade, classe média e elites. Foi presidente do IPEA entre 2015 e 2016, destacando-se por uma abordagem crítica ao neoliberalismo e à dominação simbólica. Em livros como 'A Classe Média no Espelho' e 'A Elite do Atraso', questiona narrativas que naturalizam injustiças históricas e sociais no país.",
    nacionalidade: "Brasileiro",
    generos: ["Sociologia"],
    generoIrmao: "Psicologia",
    titulos: ["A Classe Média no Espelho", "A Herança do Golpe"]
  },
  {
    id: "0005",
    nome: "Domenico de Masi",
    descricaoCurta:
      "Domenico De Masi foi um sociólogo italiano e divulgador do conceito de ‘ócio criativo’, defendendo equilíbrio entre trabalho, estudo e lazer na sociedade pós-industrial.",
    descricaoLonga:
      "Domenico De Masi (1938–2023) foi sociólogo italiano e professor emérito da Universidade La Sapienza, em Roma. Criador do conceito de 'ócio criativo', defendia o equilíbrio entre trabalho, estudo e lazer como fundamento de uma sociedade pós-industrial. Suas pesquisas abordaram criatividade, inovação e transformação do trabalho no mundo moderno. Escreveu mais de 20 livros, entre eles 'O Ócio Criativo', influenciando debates sobre produtividade e qualidade de vida. Tornou-se figura pública ao propor um humanismo otimista diante das mudanças tecnológicas.",
    nacionalidade: "Italiano",
    generos: ["Sociologia"],
    generoIrmao: "Psicologia",
    titulos: ["Desenvolvimento sem Trabalho", "O Ócio Criativo"]
  },
  {
    id: "0006",
    nome: "Zygmunt Bauman",
    descricaoCurta:
      "Zygmunt Bauman foi um sociólogo polonês-britânico que cunhou a ideia de ‘modernidade líquida’, examinando consumo, identidades e laços sociais voláteis.",
    descricaoLonga:
      "Zygmunt Bauman (1925–2017) foi um sociólogo e filósofo polonês-britânico. Refugiado do nazismo e do stalinismo, consolidou-se como um dos grandes pensadores do século XX. Seu conceito de 'modernidade líquida' descreve uma sociedade marcada por volatilidade, consumismo e fragilidade das relações humanas. Autor de mais de 40 livros, analisou temas como globalização, moralidade, medo e identidade. Lecionou na Universidade de Leeds e influenciou profundamente os estudos contemporâneos sobre cultura, política e o papel do indivíduo na modernidade.",
    nacionalidade: "Polonês-Britânico",
    generos: ["Sociologia"],
    generoIrmao: "Psicologia",
    titulos: ["Vida a Crédito", "Estranhos à Nossa Porta"]
  },

  // DIVULGAÇÃO CIENTÍFICA
  {
    id: "0007",
    nome: "Carl Sagan",
    descricaoCurta:
      "Carl Sagan foi um astrônomo e divulgador científico dos EUA; popularizou a ciência com ‘Cosmos’, defendeu o ceticismo e impulsionou a busca por vida extraterrestre.",
    descricaoLonga:
      "Carl Edward Sagan (1934–1996) foi um astrônomo, astrofísico e divulgador científico estadunidense. Professor em Cornell e consultor da NASA, popularizou a ciência com a série e o livro 'Cosmos'. Defensor do ceticismo e do método científico, liderou o projeto SETI na busca por vida extraterrestre e escreveu obras marcantes como 'Contato' e 'O Mundo Assombrado pelos Demônios'. Sagan foi premiado com o Pulitzer e tornou-se símbolo da defesa da razão e da curiosidade científica diante do obscurantismo.",
    nacionalidade: "Estadunidense",
    generos: ["Divulgação Científica"],
    generoIrmao: "Filosofia",
    titulos: [
      "Bilhões e Bilhões - Reflexões sobre vida e morte na virada do milênio",
      "Contato"
    ]
  },
  {
    id: "0008",
    nome: "Stephen Hawking",
    descricaoCurta:
      "Stephen Hawking foi um físico teórico britânico que elucidou buracos negros e cosmologia, aproximando o público da ciência com ‘Uma Breve História do Tempo’.",
    descricaoLonga:
      "Stephen William Hawking (1942–2018) foi físico teórico, cosmólogo e autor britânico, reconhecido por suas contribuições à física de buracos negros e à cosmologia quântica. Mesmo com esclerose lateral amiotrófica (ELA), produziu obras que aproximaram ciência e público leigo, como 'Uma Breve História do Tempo'. Ocupou a cátedra Lucasiana de Matemática em Cambridge, antes pertencente a Newton. Hawking tornou-se ícone da superação intelectual e símbolo da capacidade humana de compreender o universo com racionalidade e curiosidade.",
    nacionalidade: "Britânico",
    generos: ["Divulgação Científica"],
    generoIrmao: "Filosofia",
    titulos: ["Uma Breve História do Tempo", "O Universo Numa Casca de Noz"]
  },
  {
    id: "0009",
    nome: "Sidarta Ribeiro",
    descricaoCurta:
      "Sidarta Ribeiro é um neurocientista brasileiro, cofundador do Instituto do Cérebro da UFRN, referência em sono, memória e sonhos, com forte atuação em divulgação científica.",
    descricaoLonga:
      "Sidarta Tollendal Gomes Ribeiro (n. 1971) é neurocientista, escritor e professor brasileiro, cofundador do Instituto do Cérebro da UFRN. Estuda sono, memória e sonhos, defendendo a ciência como pilar de uma sociedade democrática e humanista. Autor de 'O Oráculo da Noite', une neurociência e antropologia para compreender o papel dos sonhos na cultura e na criatividade. Ativista do conhecimento científico e da educação pública, tem atuação destacada em divulgação científica, articulando ciência e consciência social no Brasil.",
    nacionalidade: "Brasileiro",
    generos: ["Divulgação Científica"],
    generoIrmao: "Filosofia",
    titulos: [
      "O Oráculo da Noite - A história e a ciência do sonho",
      "Limiar - Ciência e vida contemporânea"
    ]
  },

  // PSICOLOGIA
  {
    id: "0010",
    nome: "Steven Pinker",
    descricaoCurta:
      "Steven Pinker é um psicólogo e linguista canadense-americano, professor em Harvard, conhecido por pesquisas sobre linguagem, cognição e tendências históricas de violência.",
    descricaoLonga:
      "Steven Pinker (n. 1954) é psicólogo cognitivo e linguista canadense-americano, professor em Harvard. Destaca-se por suas pesquisas em linguagem, cognição e evolução do comportamento humano. Em obras como 'Como a Mente Funciona' e 'Os Anjos Bons da Nossa Natureza', argumenta que a humanidade tem se tornado menos violenta ao longo do tempo. Combina biologia evolucionista, psicologia e estatística social em análises provocativas. É uma das vozes mais influentes na defesa da razão, da ciência e do otimismo racional moderno.",
    nacionalidade: "Canadense-Americano",
    generos: ["Psicologia"],
    generoIrmao: "Sociologia",
    titulos: ["Como a Mente Funciona", "Tabula Rasa"]
  },
  {
    id: "0011",
    nome: "Jonathan Haidt",
    descricaoCurta:
      "Jonathan Haidt é um psicólogo social dos EUA; criou a Teoria dos Fundamentos Morais e pesquisa polarização, tecnologia e convivência democrática.",
    descricaoLonga:
      "Jonathan Haidt (n. 1963) é psicólogo social estadunidense, professor na New York University. Desenvolveu a Teoria dos Fundamentos Morais, que explica diferenças políticas e culturais a partir de instintos éticos universais. Em livros como 'A Mente Moralista' e 'A Geração Ansiosa', aborda polarização política e impactos das redes sociais na juventude. Haidt propõe diálogo empático entre ideologias e defende a importância da convivência civil em sociedades pluralistas. É referência global em psicologia moral e comportamento coletivo.",
    nacionalidade: "Estadunidense",
    generos: ["Psicologia"],
    generoIrmao: "Sociologia",
    titulos: [
      "A Geração Ansiosa - Como a infância hiperconectada está causando uma epidemia de transtornos mentais",
      "A Mente Moralista - Por que pessoas boas são segregadas por política e religião"
    ]
  },
  {
    id: "0012",
    nome: "Oliver Sacks",
    descricaoCurta:
      "Oliver Sacks foi um neurologista e escritor britânico que humanizou casos clínicos, conectando neurociência, empatia e literatura em obras de grande alcance.",
    descricaoLonga:
      "Oliver Sacks (1933–2015) foi neurologista e escritor britânico. Ganhou fama internacional por transformar casos clínicos em narrativas literárias, humanizando a medicina. Em obras como 'O Homem que Confundiu Sua Mulher com um Chapéu' e 'Um Antropólogo em Marte', explorou as complexidades da mente e da percepção. Professor em Columbia, inspirou adaptações cinematográficas e consolidou a interseção entre neurociência, empatia e arte. Seu legado combina rigor científico com profundo respeito pela experiência humana individual.",
    nacionalidade: "Britânico",
    generos: ["Psicologia"],
    generoIrmao: "Sociologia",
    titulos: ["O Rio da Consciência", "Um Antropólogo em Marte"]
  },

  // FICÇÃO CIENTÍFICA
  {
    id: "0013",
    nome: "Aldous Huxley",
    descricaoCurta:
      "Aldous Huxley foi um escritor e ensaísta britânico; em ‘Admirável Mundo Novo’ antecipou dilemas de tecnologia, controle social e liberdade.",
    descricaoLonga:
      "Aldous Leonard Huxley (1894–1963) foi um escritor e ensaísta britânico, célebre por seu olhar visionário sobre ciência, sociedade e liberdade. Em 'Admirável Mundo Novo', antecipou questões sobre manipulação genética, controle social e condicionamento cultural. Membro de uma família de intelectuais, também se interessou por filosofia, misticismo e psicologia. Nos anos 1950, explorou os efeitos das drogas psicodélicas sobre a consciência, relatando suas experiências em 'As Portas da Percepção'. Sua obra permanece um alerta contra a alienação tecnológica.",
    nacionalidade: "Britânico",
    generos: ["Ficção Científica"],
    generoIrmao: "Mistério",
    titulos: ["Admirável Mundo Novo", "Macaco e Essência"]
  },
  {
    id: "0014",
    nome: "Isaac Asimov",
    descricaoCurta:
      "Isaac Asimov foi um escritor e bioquímico russo-americano; criou as ‘Três Leis da Robótica’ e as séries Fundação e Robôs, influenciando a visão de IA.",
    descricaoLonga:
      "Isaac Asimov (1920–1992) foi escritor e bioquímico russo-americano, reconhecido como um dos maiores nomes da ficção científica. Criador das 'Três Leis da Robótica', moldou o imaginário sobre inteligência artificial e ética tecnológica. Sua série 'Fundação' influenciou gerações de escritores e cientistas. Autor de mais de 500 obras, transitou entre ficção, ensaio e história científica. Sua escrita clara e racionalista buscava popularizar o conhecimento, mostrando a ciência como força criadora e moralmente responsável na evolução humana.",
    nacionalidade: "Estadunidense",
    generos: ["Ficção Científica"],
    generoIrmao: "Mistério",
    titulos: ["Fundação", "Poeira de Estrelas"]
  },
  {
    id: "0015",
    nome: "Jeronymo Monteiro",
    descricaoCurta:
      "Jeronymo Monteiro foi um escritor e editor brasileiro, pioneiro da ficção científica nacional, unindo aventura, crítica social e imaginação futurista.",
    descricaoLonga:
      "Jeronymo Monteiro (1908–1970) foi jornalista, editor e escritor brasileiro, considerado pioneiro da ficção científica nacional. Suas obras misturam aventura, crítica social e imaginação futurista. Em 'Três Meses no Século 81', descreve um Brasil utópico, tecnológico e igualitário. Também publicou romances policiais e contos fantásticos. Foi presidente da Associação Brasileira de Escritores e atuou na promoção da literatura popular. Sua escrita combinava idealismo humanista e preocupação com o avanço científico em sociedades desiguais, tornando-o figura singular na literatura nacional.",
    nacionalidade: "Brasileiro",
    generos: ["Ficção Científica"],
    generoIrmao: "Mistério",
    titulos: ["Três Meses no Século 81", "A Cidade Perdida"]
  },

  // MISTÉRIO
  {
    id: "0016",
    nome: "Agatha Christie",
    descricaoCurta:
      "Agatha Christie foi a ‘Rainha do Crime’, criadora de Poirot e Miss Marple; suas tramas engenhosas a tornaram recordista de vendas no gênero policial.",
    descricaoLonga:
      "Agatha Mary Clarissa Christie (1890–1976) foi uma escritora britânica e é conhecida como a 'Rainha do Crime'. Criadora dos detetives Hercule Poirot e Miss Marple, revolucionou o gênero policial com tramas engenhosas e finais imprevisíveis. Autora de mais de 80 romances e peças, suas obras venderam bilhões de exemplares, perdendo apenas para a Bíblia e Shakespeare. Além do sucesso literário, Christie explorou dilemas morais e psicológicos em contextos sociais sutis, consolidando-se como ícone da literatura popular e da cultura britânica.",
    nacionalidade: "Britânica",
    generos: ["Mistério"],
    generoIrmao: "Ficção Científica",
    titulos: ["A Mansão Hollow", "Os Quatro Grandes"]
  },
  {
    id: "0017",
    nome: "Freida McFadden",
    descricaoCurta:
      "Freida McFadden é uma médica neurologista e autora de thrillers psicológicos; ficou conhecida pela série iniciada em ‘A Empregada’.",
    descricaoLonga:
      "Freida McFadden é médica neurologista e escritora estadunidense especializada em thrillers psicológicos. Sua formação médica inspira enredos envolventes sobre manipulação, memória e trauma. Tornou-se um fenômeno editorial com 'A Empregada' e sua sequência, 'O Segredo da Empregada', traduzidos em dezenas de idiomas. Suas obras exploram a mente humana com tensão crescente e reviravoltas surpreendentes. McFadden mantém o anonimato parcial e escreve de forma independente, conquistando leitores por seu estilo ágil, humor sombrio e observações sobre a natureza humana.",
    nacionalidade: "Estadunidense",
    generos: ["Mistério"],
    generoIrmao: "Ficção Científica",
    titulos: ["O Segredo da Empregada", "Nunca Minta"]
  },
  {
    id: "0018",
    nome: "Karen M. McManus",
    descricaoCurta:
      "Karen M. McManus é escritora de mistério young adult; ‘Um de Nós Está Mentindo’ tornou-se best-seller e ganhou adaptação audiovisual.",
    descricaoLonga:
      "Karen M. McManus (n. 1970) é escritora estadunidense de romances de mistério voltados ao público jovem-adulto. Seu livro de estreia, 'Um de Nós Está Mentindo', permaneceu meses nas listas de mais vendidos e foi adaptado pela Netflix. Formada em jornalismo, combina ritmo narrativo moderno, linguagem cinematográfica e reflexões sobre reputação, redes sociais e identidade. Suas tramas unem drama escolar, suspense psicológico e crítica social, mostrando que o mistério contemporâneo pode dialogar com temas morais e tecnológicos da juventude.",
    nacionalidade: "Estadunidense",
    generos: ["Mistério"],
    generoIrmao: "Ficção Científica",
    titulos: ["Um de Nós é o Próximo", "Nada a declarar"]
  },

  // ROMANCE
  {
    id: "0019",
    nome: "Gabriel García Márquez",
    descricaoCurta:
      "Gabriel García Márquez foi um escritor colombiano, Nobel de 1982, mestre do realismo mágico em obras como ‘Cem Anos de Solidão’.",
    descricaoLonga:
      "Gabriel García Márquez (1927–2014) foi escritor e jornalista colombiano, vencedor do Prêmio Nobel de Literatura em 1982. Mestre do realismo mágico, retratou a América Latina por meio de histórias que misturam o fantástico e o cotidiano. Em 'Cem Anos de Solidão', criou o mítico vilarejo de Macondo, símbolo da condição humana e latino-americana. Suas narrativas poéticas abordam amor, poder e memória. Também foi correspondente internacional e crítico político, defendendo a dignidade e a identidade cultural de seu continente.",
    nacionalidade: "Colombiano",
    generos: ["Romance"],
    generoIrmao: "Fantasia",
    titulos: ["Cem Anos de Solidão", "Crônica de uma Morte Anunciada"]
  },
  {
    id: "0020",
    nome: "Jane Austen",
    descricaoCurta:
      "Jane Austen foi uma romancista britânica que refinou o romance de costumes, com ironia e crítica social em obras como ‘Orgulho e Preconceito’.",
    descricaoLonga:
      "Jane Austen (1775–1817) foi uma romancista britânica cuja obra moldou o romance moderno de costumes. Em livros como 'Orgulho e Preconceito' e 'Razão e Sensibilidade', retratou a condição feminina, as convenções sociais e o amor sob uma ótica irônica e realista. Sua escrita refinada, com humor e crítica sutil, antecipou o realismo psicológico do século XIX. Embora tenha vivido em relativa obscuridade, Austen é hoje considerada uma das maiores escritoras da língua inglesa, símbolo da inteligência e sensibilidade literária.",
    nacionalidade: "Britânica",
    generos: ["Romance"],
    generoIrmao: "Fantasia",
    titulos: ["Orgulho e Preconceito", "Razão e Sensibilidade"]
  },
  {
    id: "0021",
    nome: "Fiódor Dostoiévski",
    descricaoCurta:
      "Fiódor Dostoiévski foi um romancista russo que explorou culpa, fé e liberdade; autor de ‘Crime e Castigo’ e ‘Os Irmãos Karamázov’.",
    descricaoLonga:
      "Fiódor Mikhailovitch Dostoiévski (1821–1881) foi romancista, filósofo e jornalista russo. É considerado um dos maiores escritores de todos os tempos, conhecido por mergulhar nas profundezas psicológicas e morais do ser humano. Obras como 'Crime e Castigo' e 'Os Irmãos Karamázov' exploram culpa, fé, liberdade e redenção. Suas experiências na prisão e sua espiritualidade complexa marcaram profundamente sua visão do mundo. Dostoiévski influenciou autores como Nietzsche, Freud e Camus, definindo a literatura existencial moderna.",
    nacionalidade: "Russo",
    generos: ["Romance"],
    generoIrmao: "Fantasia",
    titulos: ["Crime e Castigo", "Os Irmãos Karamazov"]
  },

  // FANTASIA
  {
    id: "0022",
    nome: "J. K. Rowling",
    descricaoCurta:
      "J. K. Rowling é uma escritora britânica, criadora de ‘Harry Potter’; também assina romances policiais como Robert Galbraith.",
    descricaoLonga:
      "Joanne Kathleen Rowling (n. 1965) é escritora britânica, criadora do universo de 'Harry Potter', uma das franquias literárias e cinematográficas mais populares da história. Combinando fantasia, ética e crítica social, Rowling construiu uma narrativa de amadurecimento e amizade. Publica também sob o pseudônimo Robert Galbraith, em romances policiais. Superou adversidades pessoais e tornou-se símbolo de resiliência e criatividade. Sua escrita inspira leitores de todas as idades e redefiniu o gênero fantasia no final do século XX.",
    nacionalidade: "Britânica",
    generos: ["Fantasia"],
    generoIrmao: "Romance",
    titulos: [
      "Harry Potter e a Pedra Filosofal",
      "Harry Potter e a Câmara Secreta"
    ]
  },
  {
    id: "0023",
    nome: "J. R. R. Tolkien",
    descricaoCurta:
      "J. R. R. Tolkien foi um filólogo e escritor britânico, pai da fantasia moderna, criador da Terra-média em ‘O Senhor dos Anéis’ e ‘O Hobbit’.",
    descricaoLonga:
      "John Ronald Reuel Tolkien (1892–1973) foi filólogo, professor em Oxford e autor britânico, criador de 'O Senhor dos Anéis' e 'O Hobbit'. Considerado o pai da fantasia moderna, construiu um universo completo — a Terra-média — com línguas, mitologias e povos próprios. Sua obra reflete temas de heroísmo, amizade e corrupção do poder. Inspirou gerações de escritores e cineastas. Além da ficção, foi estudioso da literatura medieval e tradutor de Beowulf, unindo erudição e imaginação de modo singular.",
    nacionalidade: "Britânico",
    generos: ["Fantasia"],
    generoIrmao: "Romance",
    titulos: [
      "O Senhor dos Anéis - A Sociedade do Anel",
      "O Senhor dos Anéis - As Duas Torres"
    ]
  },
  {
    id: "0024",
    nome: "C. S. Lewis",
    descricaoCurta:
      "C. S. Lewis foi um escritor e ensaísta irlandês-britânico; autor de ‘As Crônicas de Nárnia’ e de obras de reflexão cristã.",
    descricaoLonga:
      "Clive Staples Lewis (1898–1963) foi escritor, professor e ensaísta irlandês-britânico. Lecionou em Oxford e Cambridge e é conhecido pela série 'As Crônicas de Nárnia', clássica alegoria cristã em forma de fantasia infantil. Converso ao cristianismo, escreveu obras teológicas como 'Cristianismo Puro e Simples'. Sua prosa combina imaginação, humor e reflexão moral. Amigo de J. R. R. Tolkien, via a literatura como meio de expressar valores espirituais universais. É referência duradoura em literatura e filosofia da religião.",
    nacionalidade: "Irlandês-Britânico",
    generos: ["Fantasia"],
    generoIrmao: "Romance",
    titulos: [
      "As Crônicas de Nárnia: o leão, a feiticeira e o guarda-roupa",
      "As Crônicas de Nárnia: Príncipe Caspian"
    ]
  }
];


export function seedAutoresVersora(){

    const dataCadastro = hojeISO()

    //limpa o vetor atual
    ClasseAutor.vetorAutores.length = 0

    CATALOGO_AUTORES.forEach((m) => {

        const autor = new ClasseAutor(

            m.id,
            m.nome,
            m.descricaoCurta,
            m.descricaoLonga,
            m.nacionalidade,
            m.generos,
            m.generoIrmao,
            m.titulos,
            dataCadastro
        )

        ClasseAutor.vetorAutores.push(autor)
    })

    
    localStorage.setItem(ClasseAutor.chaveLS, JSON.stringify(ClasseAutor.vetorAutores));
    ClasseAutor.numeroDeAutores = ClasseAutor.vetorAutores.length
    }