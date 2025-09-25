// src/js-funcoes/funcoes-cadastrar-livros.js
// Requer: ClasseLivro já carregada (src/js-classes/classe-livro.js)

import { ClasseLivro } from "../js-classes/classe-livro.js";

// ===== Util =====
export function hojeISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ===== Mapeamento físico das estantes =====
const MAPA_ESTANTES = {
  "Filosofia": "A",
  "Sociologia": "B",
  "Divulgação científica": "C",
  "Psicologia": "D",
  "Mistério": "E",
  "Romance": "F",
};
const POSICOES_POR_PRATELEIRA = 20;

// Número de chamada físico: E<Estante>-P<Prateleira>-C<Coluna>
export function gerarNumeroChamadaFisica(genero, indiceNoGenero) {
  const est = MAPA_ESTANTES[genero] || "Z";
  const prat = Math.floor(indiceNoGenero / POSICOES_POR_PRATELEIRA) + 1;
  const col  = String((indiceNoGenero % POSICOES_POR_PRATELEIRA) + 1).padStart(2, "0");
  return `E${est}-P${prat}-C${col}`;
}

// ===== Catálogo PT-BR (36 itens) =====
// t=título | a=autor | g=gênero | i=ISBN | edit=editora | ano=anoPublicacao | ed(edição)=opcional | desc=descricaoCurta
const CATALOGO_PTBR = [
  // ---------- FILOSOFIA ----------
  { t: "A Estrutura das Revoluções Científicas", a: "Thomas Kuhn",  g: "Filosofia", i: "9788527301114", edit: "Perspectiva", ano: 2020, desc: "Obra clássica de Thomas Kuhn que introduziu o conceito de paradigmas científicos e revoluções no avanço da ciência. Um marco na filosofia e história da ciência." },
  { t: "A Tensão Essencial",                      a: "Thomas Kuhn",  g: "Filosofia", i: "9788527300070", edit: "Perspectiva", ano: 2011, desc: "Coletânea que aprofunda a relação entre tradição e ruptura no fazer científico. Ensaios que consolidam a visão histórica de Kuhn sobre o progresso do conhecimento." },
  { t: "A Sabedoria da Insegurança",              a: "Alan Watts",   g: "Filosofia", i: "9786558311461", edit: "Vozes",       ano: 2022, desc: "Um convite a habitar o presente sem a obsessão pelo controle. Filosofia acessível com influências do Zen e da psicologia moderna." },
  { t: "Tao: O Curso do Rio",                     a: "Alan Watts",   g: "Filosofia", i: "9786558319429", edit: "Vozes",       ano: 2024, desc: "Introdução poética ao Taoísmo e ao princípio do wu wei. Uma reflexão sobre fluir com a realidade ao invés de resistir a ela." },
  { t: "Despertar: Um guia para a espiritualidade sem religião", a: "Sam Harris", g: "Filosofia", i: "9788535925654", edit: "Companhia das Letras", ano: 2015, desc: "Explora práticas contemplativas sob a lente da neurociência e do ceticismo. Espiritualidade laica para uma vida mais lúcida e menos dogmática." },
  { t: "A Paisagem Moral: Como a ciência pode determinar os valores humanos", a: "Sam Harris", g: "Filosofia", i: "9788535923292", edit: "Companhia das Letras", ano: 2013, desc: "Argumenta que fatos sobre bem-estar podem informar a ética. Provocação filosófica que conecta ciência, moral e política pública." },

  // ---------- SOCIOLOGIA ----------
  { t: "A Classe Média no Espelho", a: "Jessé Souza",        g: "Sociologia", i: "9788544104688", edit: "Estação Brasil (Sextante)", ano: 2018, desc: "Radiografia crítica da classe média brasileira e seus mitos de mérito. Analisa identidades, afetos e o papel político desse estrato social." },
  { t: "A Herança do Golpe",       a: "Jessé Souza",        g: "Sociologia", i: "9788542212477", edit: "LeYa",                      ano: 2016, desc: "Interpretação sociológica dos eventos políticos de 2016 no Brasil. Examina elites, mídia e as disputas por sentido na democracia." },
  { t: "Desenvolvimento sem Trabalho", a: "Domenico de Masi", g: "Sociologia", i: "9788587293046", edit: "Esfera",                    ano: 1999, desc: "Discute a transição para uma sociedade pós-industrial. Propõe criatividade e tempo livre como eixos de futuro." },
  { t: "O Ócio Criativo",              a: "Domenico de Masi", g: "Sociologia", i: "9788586796456", edit: "Sextante",                  ano: 2000, desc: "Manifesto a favor do equilíbrio entre trabalho, estudo e lazer. Defende o ócio como espaço fértil para inovação e bem-estar." },
  { t: "Vida a Crédito",               a: "Zygmunt Bauman",   g: "Sociologia", i: "9788537802656", edit: "Zahar",                     ano: 2010, desc: "Analisa consumo, endividamento e insegurança na modernidade líquida. Um retrato incômodo de como vivemos acima das possibilidades." },
  { t: "Estranhos à Nossa Porta",      a: "Zygmunt Bauman",   g: "Sociologia", i: "9788537816103", edit: "Zahar",                     ano: 2017, desc: "Revisita a crise migratória e as políticas do medo. Apelo humanista por soluções que transcendam muros e estigmas." },

  // ---------- DIVULGAÇÃO CIENTÍFICA ----------
  { t: "Bilhões e Bilhões: Reflexões sobre vida e morte na virada do milênio", a: "Carl Sagan", g: "Divulgação científica", i: "9788535908596", edit: "Companhia das Letras", ano: 1997, desc: "Ensaios luminosos sobre ciência, ambiente e finitude. Um testamento intelectual de ceticismo generoso e compromisso público." },
  { t: "Contato",                                     a: "Carl Sagan", g: "Divulgação científica", i: "9788535918069", edit: "Companhia das Letras", ano: 2009, desc: "Romance de primeiro contato que confronta ciência e fé. Uma aventura intelectual guiada por curiosidade e responsabilidade." },
  { t: "Uma Breve História do Tempo",                 a: "Stephen Hawking", g: "Divulgação científica", i: "9788580576467", edit: "Intrínseca", ano: 2015, desc: "Introdução elegante à cosmologia moderna em linguagem clara. Do big bang aos buracos negros, com humor e precisão." },
  { t: "O Universo Numa Casca de Noz",                a: "Stephen Hawking", g: "Divulgação científica", i: "9788580578881", edit: "Intrínseca", ano: 2016, desc: "Complementa a obra anterior com temas mais avançados. Ilustra especulações sobre dimensões, cordas e o tecido do espaço-tempo." },
  { t: "O Oráculo da Noite: A história e a ciência do sonho", a: "Sidarta Ribeiro", g: "Divulgação científica", i: "9788535932171", edit: "Companhia das Letras", ano: 2019, desc: "Panorama científico e cultural dos sonhos e da memória. Mostra como sonhar molda criatividade, aprendizado e saúde." },
  { t: "Limiar: Ciência e vida contemporânea",        a: "Sidarta Ribeiro", g: "Divulgação científica", i: "9786559871254", edit: "Todavia", ano: 2023, desc: "Coletânea que cruza ciência, educação e política no Brasil. Textos diretos sobre evidências, democracia e bem-estar." },

  // ---------- PSICOLOGIA ----------
  { t: "Como a Mente Funciona", a: "Steven Pinker",  g: "Psicologia", i: "9788571648463", edit: "Companhia das Letras", ano: 2000, desc: "Apresenta a mente como sistema de processamento de informação moldado pela evolução. Um guia provocativo para cognição, linguagem e comportamento." },
  { t: "Tábula Rasa: A negação contemporânea da natureza humana", a: "Steven Pinker", g: "Psicologia", i: "9788535904949", edit: "Companhia das Letras", ano: 2004, desc: "Critica a ideia de mente em branco e discute a natureza humana. Explora implicações éticas e políticas de reconhecer predisposições." },
  { t: "A Geração Ansiosa: Como a infância hiperconectada está causando uma epidemia de transtornos mentais", a: "Jonathan Haidt", g: "Psicologia", i: "9788535938531", edit: "Companhia das Letras", ano: 2024, desc: "Analisa o impacto das telas no desenvolvimento emocional de jovens. Propõe mudanças práticas para família, escola e sociedade." },
  { t: "A Mente Moralista: Por que pessoas boas são segregadas por política e religião", a: "Jonathan Haidt", g: "Psicologia", i: "9788550813905", edit: "Alta Books", ano: 2018, desc: "Introduz a teoria dos fundamentos morais e o tribalismo político. Mostra por que discordamos e como conversar melhor sobre valores." },
  { t: "O Rio da Consciência",  a: "Oliver Sacks",   g: "Psicologia", i: "9788535930023", edit: "Companhia das Letras", ano: 2017, desc: "Ensaios sobre percepção, criatividade e história da ciência. Um olhar humano e curioso sobre a neurologia do cotidiano." },
  { t: "Um Antropólogo em Marte", a: "Oliver Sacks", g: "Psicologia", i: "9788535908961", edit: "Companhia das Letras / Companhia de Bolso", ano: 2006, desc: "Sete casos clínicos que revelam plasticidade e adaptação. Narrativas empáticas que aproximam ciência e experiência." },

  // ---------- MISTÉRIO ----------
  { t: "A Mansão Hollow",       a: "Agatha Christie",  g: "Mistério", i: "9786560051812", edit: "HarperCollins Brasil", ano: 2024, desc: "Poirot retorna para desvendar um crime em cenário bucólico. Relações ambíguas e pistas falsas elevam o jogo dedutivo." },
  { t: "Os Quatro Grandes",     a: "Agatha Christie",  g: "Mistério", i: "9788595085916", edit: "HarperCollins Brasil", ano: 2020, desc: "Um complô internacional desafia a lógica e a paciência de Poirot. Thriller de escala global com sabor de espionagem clássica." },
  { t: "O Segredo da Empregada (A Empregada – Livro 2)", a: "Freida McFadden", g: "Mistério", i: "9786555655940", edit: "Arqueiro", ano: 2024, desc: "Sequência repleta de reviravoltas no subúrbio perfeito. Aparências enganam e cada detalhe pode ser uma armadilha." },
  { t: "Nunca Minta",           a: "Freida McFadden",  g: "Mistério", i: "9788501923288", edit: "Record / Galera", ano: 2025, desc: "Suspense doméstico sobre segredos de vizinhança e confiança quebrada. O passado retorna para cobrar um preço alto." },
  { t: "Um de Nós é o Próximo", a: "Karen M. McManus", g: "Mistério", i: "9788501119520", edit: "Galera (Record)", ano: 2021, desc: "Um novo jogo mortal assombra a Bayview High. Mensagens anônimas e desafios perigosos testam amizades e lealdades." },
  { t: "Nada a Declarar",       a: "Karen M. McManus", g: "Mistério", i: "9786559811885", edit: "Galera (Record)", ano: 2022, desc: "Mistério em alto-mar com adolescentes presos num cruzeiro. Conspirações e desaparecimentos alimentam a paranoia do grupo." },

  // ---------- ROMANCE ----------
  { t: "Cem Anos de Solidão",            a: "Gabriel García Márquez", g: "Romance", i: "9788501078896", edit: "Record",             ano: 2014, desc: "A saga dos Buendía ergue Macondo entre mito e memória. Um épico do realismo mágico sobre tempo, destino e solidão." },
  { t: "Crônica de uma Morte Anunciada", a: "Gabriel García Márquez", g: "Romance", i: "9788501019431", edit: "Record",             ano: 2014, desc: "Um assassinato anunciado é reconstituído como um quebra-cabeça. Jornalismo e literatura se unem numa tragicomédia social." },
  { t: "Orgulho e Preconceito",          a: "Jane Austen",            g: "Romance", i: "9788563560155", edit: "Penguin-Companhia",  ano: 2011, desc: "Elizabeth Bennet enfrenta etiqueta, fortuna e primeiras impressões. Um clássico afiado sobre caráter, classe e casamento." },
  { t: "Razão e Sensibilidade",          a: "Jane Austen",            g: "Romance", i: "9788563560490", edit: "Penguin-Companhia",  ano: 2012, desc: "As irmãs Dashwood equilibram coração e prudência. Uma comédia de costumes sobre perdas, escolhas e maturidade." },
  { t: "Crime e Castigo",                a: "Fiódor Dostoiévski",     g: "Romance", i: "9788573266467", edit: "Editora 34",         ano: 2016, desc: "Raskólnikov desafia a moral e mergulha na culpa. Romance psicológico que interroga justiça, pobreza e redenção." },
  { t: "Os Irmãos Karamázov",            a: "Fiódor Dostoiévski",     g: "Romance", i: "9788573265385", edit: "Editora 34",         ano: 2019, desc: "Conflitos familiares como palco para fé, razão e liberdade. Uma obra-prima que tensiona ética, afeto e transcendência." },
];

// ===== Seed principal =====
export function seedLivrosVersora() {
  const dataCadastro = hojeISO();

  // limpa vetor atual
  ClasseLivro.vetorLivros.length = 0;

  // contagem por gênero para posicionamento físico
  const contagemPorGenero = new Map();

  CATALOGO_PTBR.forEach((m, idx) => {
    const tombo = String(idx + 1).padStart(4, "0");

    const seqGenero = contagemPorGenero.get(m.g) || 0;
    const numeroChamada = gerarNumeroChamadaFisica(m.g, seqGenero);

    const livro = new ClasseLivro(
      tombo,               // tombo
      numeroChamada,       // número de chamada (posição física)
      m.i,                 // isbn
      m.t,                 // título
      m.g,                 // gênero
      m.edit,              // editora
      m.ano,               // anoPublicacao
      dataCadastro,        // data_cadastro
      true                 // disponibilidade
      // a classe aceita mais parâmetros, mas setaremos abaixo
    );

    // atributos adicionais não contemplados no construtor
    livro.autor = m.a;
    livro.edicao = m.ed || 1;
    livro.numeroDeAcessos = 0;

    // NOVO: descricaoCurta (mais longa, 2 frases)
    livro.descricaoCurta = m.desc || "";

    // placeholders para próximas iterações
    livro.sinopse = livro.sinopse ?? "";
    livro.capa = livro.capa ?? "";

    ClasseLivro.vetorLivros.push(livro);
    contagemPorGenero.set(m.g, seqGenero + 1);
  });

  localStorage.setItem(ClasseLivro.chaveLS, JSON.stringify(ClasseLivro.vetorLivros));
  ClasseLivro.numeroDeLivros = ClasseLivro.vetorLivros.length;
}

// Exporta o catálogo caso precise usar em outra parte da UI
export { CATALOGO_PTBR };
