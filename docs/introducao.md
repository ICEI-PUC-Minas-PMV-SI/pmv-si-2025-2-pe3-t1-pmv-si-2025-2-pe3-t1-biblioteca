# 1. INTRODUÇÃO

No mercado de cinemas, os sistemas de informação são determinantes para garantir eficiência operacional e oferecer uma experiência diferenciada ao público. Plataformas como as utilizadas pelo Cinemark e pela Ingresso.com, por exemplo, permitem ao cliente escolher assentos em tempo real, realizar pagamentos digitais de forma segura e receber ingressos eletrônicos, eliminando filas e aumentando a conveniência. Além disso, esses sistemas coletam e analisam dados sobre o comportamento dos espectadores, possibilitando campanhas de marketing direcionadas, como descontos em horários de menor movimento ou programas de fidelidade personalizados. Do ponto de vista empresarial, a automação do processo de venda reduz custos com bilheteria, otimiza o fluxo de público e amplia as oportunidades de receita por meio de parcerias estratégicas e promoções. Assim, investir em sistemas modernos de venda de ingressos não apenas melhora a experiência do usuário, mas constitui uma vantagem competitiva concreta, permitindo que os cinemas se destaquem em um mercado altamente competitivo e cada vez mais digital. É natural questionar se os sistemas atualmente utilizados para esse fim não poderiam ser aprimorados.

## 1.1. Problema

Apesar da ampla digitalização do setor, a experiência de compra de ingressos de cinema ainda apresenta desafios significativos. Um dos principais pontos de atrito é a cobrança de taxas adicionais, como a taxa de conveniência ou de processamento, que têm gerado notificações de órgãos de defesa do consumidor e decisões judiciais sobre a necessidade de maior transparência na apresentação desses valores (CBN, 2025; STJ, 2024). Além disso, os meios de pagamento constituem um fator diferenciador entre plataformas: a Ingresso.com passou a oferecer o Pix, que rapidamente se tornou relevante entre os usuários, enquanto em canais proprietários de redes como a Cinemark ainda há predominância de pagamentos com cartão, criando experiências fragmentadas conforme o ponto de acesso (INGRESSO.COM, 2024; CINEMARK, s.d.). Esses fatores ganham relevância em um contexto de expansão do público de cinema e maior presença digital da população idosa, que já alcança dois terços de uso de internet na faixa acima de 60 anos (IBGE, 2024; ANCINE, 2025).

A experiência de compra de ingressos de cinema apresenta também uma oportunidade de precificação dinâmica por sessão — baseada sobretudo em lotação (assentos remanescentes) e proximidade do horário — para aumentar ocupação e receita sem sacrificar a confiança do usuário. A literatura indica ganhos relevantes em outros setores quando preços são reotimizados com base em inventário e tempo (XU; FADER; VEERARAGHAVAN, 2018), e mostra que modelos que combinam fatores de evento, tempo e estoque superam políticas estáticas (ŞAHIN, 2019).

## 1.2. Objetivos do trabalho

### Objetivo Geral
Desenvolver um sistema web para venda de ingressos de cinema que seja simples, intuitivo e eficiente, oferecendo uma experiência de compra ágil e transparente para os usuários, ao mesmo tempo em que contribua para a otimização da gestão operacional e estratégica das empresas exibidoras. Estabelecer um sistema de precificação dinâmico e transparente dentro deste contexto.

### Objetivos Específicos
- Analisar as limitações e problemas das plataformas atuais de venda de ingressos de cinema.
- Projetar uma interface amigável, responsiva e de fácil navegação, acessível em diferentes dispositivos.
- Implementar funcionalidades de escolha de assentos em tempo real e integração com meios de pagamento digitais populares.
- Garantir transparência nos preços e taxas, reduzindo etapas até a finalização da compra.
- Desenvolver um sistema de notificações e lembretes para promoções, estreias e horários escolhidos.
- Estruturar mecanismos que facilitem cancelamentos e remarcações de ingressos.
- Incorporar ferramentas de coleta e análise de dados para apoiar estratégias de fidelização e marketing das empresas parceiras.
- Realizar testes de usabilidade e segurança para assegurar uma experiência confiável e satisfatória ao usuário.

## 1.3. Justificativa

O desenvolvimento de aplicações web voltadas à comercialização de ingressos tem se consolidado de forma crescente no mercado nos últimos anos. Observa-se um avanço significativo na adoção de plataformas digitais que substituem ou complementam os modelos tradicionais de bilheteria, impulsionado pela popularização dos dispositivos móveis, pela expansão das redes 4G e pelo aumento da demanda por soluções rápidas, seguras e de fácil utilização (SILVEIRA, 2019). Além disso, o mercado de cinema brasileiro segue crescendo fortemente: em 2024, o país somou 125,3 milhões de ingressos de cinema (+9,8% vs. 2023) e R$ 2,5 bilhões de renda (+6,2% deflacionado), com 3.510 salas — recorde histórico (ANCINE, 2025).

## 1.4. Público alvo

O público-alvo da aplicação é composto por diferentes perfis de usuários que frequentam cinemas, mas que variam em termos de familiaridade com a tecnologia e necessidades. Entre eles, jovens e adultos digitalmente ativos, que possuem grande afinidade com dispositivos móveis, aplicativos e carteiras digitais, e que valorizam soluções rápidas, práticas e integradas a outros serviços tecnológicos. Também estão presentes famílias e grupos de amigos, que costumam realizar compras múltiplas e buscam funcionalidades que facilitem a escolha conjunta de assentos e horários, necessitando de interfaces claras e fluxos simplificados de compra. Ainda, há usuários ocasionais ou com menor experiência no uso de plataformas digitais, muitas vezes pertencentes a faixas etárias mais altas, para os quais a aplicação deve prezar por acessibilidade, linguagem intuitiva e instruções objetivas. Por fim, mesmo que de forma indireta, gestores e equipes administrativas dos cinemas também fazem parte desse público, já que se beneficiam dos dados e relatórios gerados pelo sistema, utilizando essas informações para planejar estratégias de marketing, otimizar fluxos de público e melhorar a gestão operacional.
