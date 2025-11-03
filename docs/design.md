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

![ME6](https://github.com/user-attachments/assets/f08f9415-9ce8-4733-b274-2839671241e3)

## 4.3 Protótipos das Interfaces
Nesta seção, serão apresentados os protótipos de alta fidelidade do sistema web a ser implementado. As principais telas do sistema serão exibidas e serão indicados quais princípios gestálticos, recomendações ergonômicas e regras de ouro orientaram o processo de design da interação usuário-sistema.

### Tela inicial - Antes do login

#### 1 - Objetivo da tela

A página inicial apresenta, no canto superior direito, o botão "Entrar", que abre uma pequena janela com as opções de logar, cadastrar-se ou recuperar senha. Há também um campo para procurar livros. Além disso, são apresentados carrosseis e cards com informações curtas sobre os livros e os autores mais acessados, possibilitando o redirecionamento para as páginas desses livros e autores. 

A página também conta com uma faixa que apresenta os três gêneros mais acessados, possibiliando a busca automática pelos livros correspondentes a esses gêneros. Ao final da tela, há um rodapé com informações de contato e âncoras de navegação.

#### 2 - Recomendações aplicadas 

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

### Tela de cadastro

#### 1 - Objetivo da tela

A tela de cadastro tem como finalidade registrar as informações básicas sobre o usuário, como nome, CPF, telefone e endereço. Há também um quadro em que o usuário marca seus gêneros favoritos, com o intuito de elaboração de recomendações personalizadas para o leitor. Ao final do formulário, o usuário digita duas vezes a senha escolhida para a entrada no sistema.

#### 2 - Recomendações aplicadas

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

### Páginas dos livros e dos autores

#### 1 - Objetivo das telas

As páginas dos livros e dos autores têm como finalidade apresentar detalhes que não estavam presentes nos cards da página inicial. Nessa tela, é apresentada uma sinopse do livro e uma breve descrição biográfica do autor. Visando convidar o usuário à interação com o sistema, são oferecidas as possibilidades de curtir o livro ou o autor, bem como de registrar uma avaliação no sistema.

#### 2 - Recomendações aplicadas

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




## 4.4 Testes com Protótipos
Nesta seção você deve apresentar os testes realizados com usuários utilizando os protótipos de alta fidelidade desenvolvidos na seção anterior. O objetivo é avaliar a usabilidade, a clareza das informações e a adequação do design às necessidades das personas definidas no projeto.

Cada integrante do grupo deverá aplicar o teste com um usuário distinto, preferencialmente alinhado ao perfil das personas criadas. Devem ser definidas previamente as tarefas que o usuário deverá executar no protótipo (por exemplo: realizar um cadastro, buscar um produto, concluir uma compra).

Durante a aplicação do teste, registre observações sobre comportamentos, dúvidas, erros e comentários feitos pelo usuário, bem como o tempo necessário para a execução de cada tarefa. Ao final, colete o feedback do participante, destacando pontos positivos e aspectos a serem melhorados.

Os resultados obtidos por todos os integrantes devem ser consolidados, apresentando uma análise geral com os principais problemas encontrados, oportunidades de melhoria e as ações previstas para o projeto final. 
>>>>>>> 508d9f9113bf4aa47c3aba0398b03858467a42ee






