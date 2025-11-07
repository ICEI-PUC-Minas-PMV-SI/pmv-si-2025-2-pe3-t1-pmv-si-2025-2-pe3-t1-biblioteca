# 4. PROJETO DO DESIGN DE INTERAÇÃO

## 4.1 Personas

### Persona 01: Luís Cláudio

![P1](https://github.com/user-attachments/assets/9dd2e1fb-df53-4188-bf7f-df75a9df1b37)

### Persona 02: Mariana Torres

![P2](https://github.com/user-attachments/assets/0dc060ed-a04c-43c6-8f66-45de0024326b)

### Persona 03: Gabriel Almeida

![P3](https://github.com/user-attachments/assets/131f5c01-53ed-4081-9b67-a5494b18ea76)

### Persona 04: Neuza de Fátima

![P4](https://github.com/user-attachments/assets/ece6957d-0ebf-4648-9168-d93ade0d5197)

### Persona 05: Helena Duarte

![P5](https://github.com/user-attachments/assets/3357d0ed-9be3-4db6-97f1-752ea92428c8)

### Persona 06: Jonas Martins

![P6](https://github.com/user-attachments/assets/69f0344d-7918-420f-bee5-fef4549233e9)

## 4.2 Mapas de Empatia

### Mapa de empatia 01: Luís Cláudio

![ME1](https://github.com/user-attachments/assets/15738379-50e1-4eb2-8254-ad51347e5522)

### Mapa de empatia 02: Mariana Torres

![mapa](https://github.com/user-attachments/assets/e2d49db1-dc9c-44eb-b1df-4787563f692f)

### Mapa de empatia 03: Gabriel Almeida

![ME3](https://github.com/user-attachments/assets/fbefecac-ff83-45d5-afa8-fa3fa3429618)

### Mapa de empatia 04: Neuza de Fátima

![ME4](https://github.com/user-attachments/assets/795262bf-4f51-4a07-b347-a32e4e31c730)

#### Mapa de empatia 05: Helena Duarte

![ME5](https://github.com/user-attachments/assets/e158c1bc-3749-4765-bd84-d67fc90835dc)

### Mapa de empatia 06: Jonas Martins

![Group 48](https://github.com/user-attachments/assets/6ba714bb-368a-4197-9a4a-2a12fbc4c2c1)


## 4.3 Protótipos das Interfaces
Nesta seção, serão apresentados os protótipos de alta fidelidade do sistema web a ser implementado. As principais telas do sistema serão exibidas e serão indicados quais princípios gestálticos, recomendações ergonômicas e regras de ouro orientaram o processo de design da interação usuário-sistema.

### Tela inicial

#### 1 - Objetivo da tela

A página inicial apresenta, no canto superior direito, o botão "Entrar", que abre uma pequena janela com as opções de logar, cadastrar-se ou recuperar senha. Há também um campo para procurar livros. Além disso, são apresentados carrosseis e cards com informações curtas sobre os livros e os autores mais acessados, possibilitando o redirecionamento para as páginas desses livros e autores. 

A página também conta com uma faixa que apresenta os três gêneros mais acessados, possibiliando a busca automática pelos livros correspondentes a esses gêneros. Ao final da tela, há um rodapé com informações de contato e âncoras de navegação.

#### 2 - Boas práticas de design aplicadas 

#### Princípios gestálticos

***Proximidade***: os itens de navegação no cabeçalho dão a impressão de um grupo coeso. O card com informações dos livros e dos autores também estão próximos aos seus respectivos carrosseis.

***Princípio da figura-fundo***: os elementos de destaque apresentam contraste adequado em relação ao fundo no qual estão inseridos.

#### Regras de ouro

***Consistência***: os botões presentes na tela sempre sugerem ações se utilizando de verbos no infinitivo.

***Fornecer atalhos***: há atalhos de navegação tanto no cabeçalho quanto no rodapé da página. A seção "Em alta" apresenta a possibilidade de busca rápida por livros dos gêneros mais acessados. Há também a possibilidade de redirecionamento rápido para as páginas dos livros a partir das capas presentes nos carrosseis.

***Feedback informativo***: no fluxo da entrada no sistema há avisos que indicam quando o nome de usuário inserido não consta na base de dados. Na ocasião de a senha estar incorreta, também é exibida uma mensagem para o usuário.

![2 - HOME - ENTRAR](https://github.com/user-attachments/assets/62352f31-8242-4bd4-baef-a76d93137511)

![Group 239182](https://github.com/user-attachments/assets/cbc76d58-603a-455f-ac28-da78d849db53)

![Group 239183](https://github.com/user-attachments/assets/4a1a4943-fd60-46c1-bec8-ebafa7c9f5c8)

### Tela de cadastro e tela de consulta e edição do perfil do usuário

#### 1 - Objetivo das telas

A tela de cadastro tem como finalidade registrar as informações básicas sobre o usuário, como nome, CPF, telefone e endereço. Há também um quadro em que o usuário marca seus gêneros favoritos, com o intuito de elaboração de recomendações personalizadas para o leitor. Ao final do formulário, o usuário digita duas vezes a senha escolhida para a entrada no sistema.

A tela de perfil do usuário tem como finalidade a consulta aos dados do leitor, como nome, e-mail, endereço e gêneros favoritos. A página oferece a possibilidade de edição desses campos, bem como de modificação da senha de entrada no sistema. 

#### 2 - Boas práticas de design aplicadas

#### Princípios gestálticos

***Proximidade***: campos de dados relacionados são exibidos em regiões contíguas, dando a impressão de grupo.

***Região comum***: além de estarem próximos, grupos de dados relacionados estão reparados visualmente por traços, dando a impressão de conjunto.

***Simetria***: as colunas foram organizadas de maneira simétrica, facilitando a assimilação do conteúdo do formulário.

#### Regras de ouro

***Prevenção a erros e maneiras de corrigí-los***: o sistema avisa quando o CPF ou o CEP foram inseridos em formato inválido ou com quantidade insuficiente de caracteres.

***Controle de iniciativa***: o botão de cancelar fornece a sensação de controle para o usuário, que pode abandonar o fluxo de cadastro caso julgue conveniente.

***Marcação do final dos diálogos***: o sistema avisa quando o fluxo de cadastro foi completado com sucesso.

#### Recomendações ergonômicas

***Evitar linguagem alarmante***: os alertas de erro não se utilizam de termos que possam causar a sensação de alarme, urgência ou perigo.

***Evitar o uso de caixa alta***: os alertas não apresentam palavras com letras exclusivamente maiúsculas, evitando a sensação de alarme, urgência ou rispidez.

***Distinção clara entre campos***: os rótulos e os campos de inserção de dados apresentam fácil distinção entre si, facilitando o fluxo da atividade.

***Listas ordenadas alfabeticamente***: no campo de escolha do estado em que o leitor reside, a lista está ordenada alfabeticamente, facilitando a localização do estado correto.

![3 - CADASTRO](https://github.com/user-attachments/assets/1d9d4d96-5bb9-4213-b14f-6202b685c72c)

![image 9](https://github.com/user-attachments/assets/9e7af8ea-fc5b-4d0d-a09f-97a987f69fbf)

![image 10](https://github.com/user-attachments/assets/f875f9df-1cb3-43e6-8e5a-33327e8234b4)

![image 12](https://github.com/user-attachments/assets/f34f8447-ac09-4675-b3a7-21e2e3c75765)

![13 - MEU PERFIL](https://github.com/user-attachments/assets/b5ca124f-71af-4cce-a727-f2f4bd02e0e6)


### Página do acervo

#### 1 - Objetivo da tela

A página do acervo apresenta todos os livros cadastrados no sistema, agrupados por gênero. São 48 livros, de 24 autores diferentes. O campo de busca filtra os livros por título, autor, gênero ou editora. Também é possível fazer uma busca generalizada, sem filtrar por atributos específicos.

#### 2 - Boas práticas de design aplicadas

#### Princípios gestálticos

***Proximidade***: capas de livros de um mesmo gêneros são exibidas em uma mesma linha, dando a impressão de grupo.

***Simetria***: as linhas e colunas de livros foram organizadas de maneira simétrica, facilitando a assimilação do conteúdo do acervo.

#### Regras de ouro

***Controle de iniciativa***: o botão de voltar fornece a sensação de controle para o usuário, que pode se redirecionar para a página inicial caso deseje.

***Feedback informativo***: caso a busca realizada não encontre correspondências no acervo, uma mensagem é exibida na página.

#### Recomendações ergonômicas

***Convite à interação***: o campo de busca convida o leitor a filtrar o acervo de acordo com seus interesses.

![5 - ACERVO](https://github.com/user-attachments/assets/bb51b172-fe74-46c2-a91c-fc032e2b30a1)

<img width="1881" height="838" alt="image" src="https://github.com/user-attachments/assets/516d12da-8b32-43be-9b90-d7cd8d195575" />

<img width="1874" height="672" alt="image" src="https://github.com/user-attachments/assets/8ee900e3-4041-456f-be15-195d2df35544" />

### Páginas dos livros e dos autores

#### 1 - Objetivo das telas

As páginas dos livros e dos autores têm como finalidade apresentar detalhes que não estavam presentes nos cards da página inicial. Nessa tela, é apresentada uma sinopse do livro e uma breve descrição biográfica do autor. Visando convidar o usuário à interação com o sistema, são oferecidas as possibilidades de curtir o livro ou o autor, bem como de registrar uma avaliação no sistema.

#### 2 - Boas práticas de design aplicadas

#### Regras de ouro

***Consistência***: os botões presentes na tela sempre sugerem ações se utilizando de verbos no infinitivo.

***Permitir a reversão de ações***: É possível desfazer a "curtida" de um livro ou de um autor com um clique.

***Controle de iniciativa***: o botão de cancelar fornece a sensação de controle para o usuário, que pode abandonar o fluxo de cadastro caso julgue conveniente.

***Marcação do final dos diálogos***: o sistema avisa quando o fluxo de registrar uma reserva foi completado com sucesso.

#### Recomendações ergonômicas

***Adequação de fontes***: textos curtos utilizam fontes sem serifa e textos longos utilizam fontes com serifa, facilitando a leitura.

***Convite à interação***: o botão de curtir - em formato de coração - e o botão de adicionar avaliação fazem um convite ao leitor, o induzindo a interagir com o sistema.

![6 - PAGINA DO LIVRO](https://github.com/user-attachments/assets/c4451eb0-9e16-461b-937d-39c463092eca)

<img width="937" height="843" alt="image" src="https://github.com/user-attachments/assets/5b19f8b5-baf3-44e3-9906-fdb9147163eb" />

<img width="1329" height="605" alt="image" src="https://github.com/user-attachments/assets/ced1af9a-19e8-4086-9ee2-558574c3f4e8" />

![12 - PAGINA DO AUTOR](https://github.com/user-attachments/assets/b381a1ca-2967-4a1c-aab8-24027acff72e)

### Páginas 'Minhas reservas', 'Minha seleção' e 'Favoritos'

#### 1 - Objetivo das telas

Essas telas têm como finalidade exibir o histórico de escolhas que o leitor realizou em relação aos livros e aos autores apresentados pelo sistema. Na página "Minhas reservas" são exibidas as reservas realizadas pelo leitor logado, tanto aquelas ainda válidas quanto as recentemente expiradas. Na página "Minha seleção" são exibidos títulos que o usuário selecionou para lembrar mais tarde, uma funcionalidade análoga ao "carrinhos" em sistemas de compras. Já nas páginas de livros e autores favoritos o usuário registra títulos e autores de que tenha gostado, para futuramente ter acesso mais rápido a esses elementos.

#### 2 - Boas práticas de design aplicadas

#### Regras de ouro

***Controle de iniciativa***: o botão de cancelar reserva fornece a sensação de controle para o usuário, que pode excluir uma reserva da qual tenha desistido.

***Feedback informativo***: a data limite para retirar o livro reservado é exibida junto às informações do livro.

#### Recomendações ergonômicas

***Apoio à tomada de decisão***: o botão de cancelar reservas fica automatiamente desabilitado caso a reserva já tenha expirado, evitando confusões e ações incorretas.

***Reconhecimento no lugar de recordação***: como as reservas, seleções e favoritos ficam armazenados no sistema, a carga cognitiva é reduzida devido à não necessidade de recordar cada elemento escolhido pelo leitor.

***Região comum***: além de estarem próximos, informações referentes a uma reserva ou a uma seleção estão separados de outros elementos por um quadro, dando a impressão de conjunto.

![8 - MINHAS RESERVAS](https://github.com/user-attachments/assets/43106b0b-a80f-44fa-b360-e68f07099fe7)

![9 - MINHA SELECAO](https://github.com/user-attachments/assets/9dacd109-ddb1-423b-ba5a-f4cf50062ac0)

![Frame 71](https://github.com/user-attachments/assets/0c1f81ec-1d71-435d-8293-f7175dc4d8e7)

![Frame 72](https://github.com/user-attachments/assets/0621d75d-9b65-4a75-97d3-21aac2e3bd31)


### Páginas do fluxo de redefinição de senha

#### 1 - Objetivo das telas

Caso o usuário tente entrar no sistema mas perceba que esqueceu sua senha, é oferecida a possibilidade de redefiní-la. Para isso, basta inserir o e-mail cadastrado no sistema e clicar no botão "Enviar código". Na etapa seguinte, o usuário digita um código de 6 dígitos para validação e, na última etapa, é redefinida a senha de entrada.

#### 2 - Boas práticas de design aplicadas

#### Princípios gestálticos

***Princípio da figura-fundo***: os elementos de destaque apresentam contraste adequado em relação ao fundo no qual estão inseridos.

#### Regras de ouro

***Consistência***: os botões presentes nas telas sempre sugerem ações se utilizando de verbos no infinitivo.

***Prevenção a erros e maneiras de corrigí-los*** : o sistema avisa quando o e-mail inserido não tem correspondência na base de dados, orientando o usuário a conferir o endereço digitado. O sistema avisa quando o código inserido não está correto, orientando o usuário a conferir o código e inserí-lo novamente.

***Controle de iniciativa***: o botão de cancelar fornece a sensação de controle para o usuário, que pode abandonar o fluxo de redefinição da senha caso julgue conveniente.

***Feedback informativo***: à medida que o usuário avança no fluxo de redefinição de senha, as telas exibem informações que confirmam o sucesso da etapa anterior e orientam as ações da nova etapa do processo.

***Marcação do final dos diálogos***: o sistema avisa quando o fluxo de redefinir a senha foi completado com sucesso.

#### Recomendações ergonômicas

***Evitar linguagem alarmante***: os alertas de erro não se utilizam de termos que possam causar a sensação de alarme, urgência ou perigo.

***Evitar o uso de caixa alta***: os alertas não apresentam palavras com letras exclusivamente maiúsculas, evitando a sensação de alarme, urgência ou rispidez.

***Distinção clara entre campos***: os rótulos e os campos de inserção de dados apresentam fácil distinção entre si, facilitando o fluxo da atividade.

![14 - REDEFINIR SENHA - FLUXO 1](https://github.com/user-attachments/assets/7d47c44d-9a75-404f-9449-1ea0a7db59aa)

![Frame 68](https://github.com/user-attachments/assets/ba86b57a-3270-4794-85b5-fcded5ebec3f)

![Frame 69](https://github.com/user-attachments/assets/45eeafd7-b124-40c0-9818-964f8a551a00)

![15 - REDEFINIR SENHA - FLUXO 2](https://github.com/user-attachments/assets/dcd49f52-9291-4029-9ab3-0cc140cbcd78)

![16 - REDEFINIR SENHA - FLUXO 3](https://github.com/user-attachments/assets/3c3d6766-36c7-459c-b997-b022d937e3d8)

![Frame 70](https://github.com/user-attachments/assets/8301a116-bcb6-49fc-bfde-9f3f87ba1e7a)


## 4.4 Testes com Protótipos

Nesta seção serão apresentados os resultados de testes de protótipos de alta fidelidade realizados com 6 candidatos a usuários do sistema. Primeiramente, será apresentada a metodologia utilizada pelo grupo no decorrer dos testes. Após isso, os comentários e observações fornecidos pelos candidatos a usuários serão sintetizados de maneira a contribuir com os próximos ciclos de desenvolvimento.

### Metodologia 

#### Perguntas

Foram escolhidas 8 perguntas para serem direcionadas aos usuários, com o intuito de captar e analisar suas impressões sobre o sistema:

1. *Ao analisar a página inicial, você conseguiu entender rapidamente qual é o propósito ou objetivo principal do site?* 

2. *O menu e os botões estavam posicionados corretamente?* 

3. *As etapas apresentadas para realizar as tarefas estavam claras e seguiam uma lógica compreensível?*

4. *Os elementos visuais (cores, ícones e disposição dos botões) facilitaram a identificação do que era clicável e do que era apenas informativo?*
 
5. *Há elementos que chamam atenção indevidamente ou confundem?*

6. *Você sentiu que conseguiria utilizar os recursos do site sem a necessidade de ajuda externa?* 

7. *Classifique sua experiência com uma nota entre 1 e 5.*

8. *Comente os fatores que o levaram a essa nota.*

#### Passo a passo

De posse dessas perguntas, foi definido um conjunto de 5 passos para a realização do teste, a fim de tornar o processo menos cansativo e mais proveitoso, desdobrando a sequência de telas em 4 grupos distintos. Assim, foi possível aumentar a probabibilidade de que os usuários não confundissem ou esquecessem as telas, já que eram, no total, 16 páginas. Ao adotar essa abordagem, foi reduzido o esforço cognitivo do usuário, possibilitando uma redução da carga de sua memória de trabalho. Dessa maneira, foi assegurada uma maior qualidade na coleta dos dados.

Os 5 passos efetuados foram:

- **Passo 1:** foram mostradas as imagens 1 e 2, que consistem nos protótipos da tela inicial do sistema. Após a visualização dessas imagens, foi solicitado aos usuários que respondessem à pergunta 1.

- **Passo 2:** foram mostradas as imagens numeradas de 3 a 7, que consistem nos protótipos da página de cadastro, da tela inicial após entrada no sistema, do acervo de títulos, da página do livro e da janela de solicitação de reserva. Após a visualização dessas imagens, foi solicitado aos usuários que respondessem às perguntas numeradas de 2 a 5. 

- **Passo 3:** foram mostradas as imagens numeradas de 8 a 12, que consistem nos protótipos das páginas 'Minhas reservas', 'Minha seleção', 'Meus favoritos' - sendo apresentadas nessa tela as abas 'Livros favoritos' e 'Autores favoritos' - e da página do autor. Após a visualização dessas imagens, foi solicitado aos usuários que respondessem novamente às perguntas numeradas de 2 a 5. 

- **Passo 4:** foram mostradas as imagens numeradas de 13 a 16, que consistem nos protótipos da página 'Meu perfil' e das páginas correspondentes ao fluxo de redefinição de senha. Após a visualização dessas imagens, foi solicitado aos usuários que respondessem, mais uma vez, às perguntas numeradas de 2 a 5.

- **Passo 5:** tendo em vista que foram apresentadas todas as telas selecionadas para o teste, foi solicitado aos usuários que respondessem às perguntas numeradas de 6 a 8, que consistem nas conclusões em relação ao sistema como um todo.

### Síntese dos resultados

#### Pontos positivos

Houve uma convergência entre os usuários em relação a alguns pontos positivos do sistema:

- Os diversos elementos das telas, como botões, campos de inserção de dados, textos informativos e capas de livros estavam bem posicionados.
  
- As informações foram estruturadas de maneira satisfatória e de fácil compreensão.
  
- O fluxo de tarefas foi considerado claro e intutivo. Houve comentários alegando que o sistema seguia boas práticas de design já consolidadas por referências em sistemas web.

- O agrupamento final de telas, que consistia na página 'Meu perfil' e no fluxo de redefinição de senha, não recebeu observações negativas.

- Todos os usuários expressaram a capacidade de utilização do sistema por conta própria, sem a necessidade de ajuda externa.

- A média das avaliações foi de 4,6 em 5.


#### Pontos de atenção


