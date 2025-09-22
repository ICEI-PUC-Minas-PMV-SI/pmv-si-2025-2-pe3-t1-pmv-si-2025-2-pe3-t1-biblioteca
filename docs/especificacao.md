# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da Coordenação do Curso de Sistemas de Informação da PUC Minas que devem ser atendidas pelo projeto SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento. Ele terá somente um componente (módulo) com os devidos elementos necessários à gestão de cursos.

### 3.2.2 Missão do produto
Gerenciar informações sobre a oferta de cursos de aperfeiçoamento, gerenciar a composição das turmas, alunos, professores e matrículas. 

### 3.2.3 Limites do produto
O SCCA não fornece nenhuma forma de avaliação de alunos, pagamento de parcelas do curso, pagamento a professore e agendamentos. O SCCA não contempla o atendimento a vários cursos de Sistemas de Informação de outras unidades da PUC Minas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4	| Melhoria na comunicação com os alunos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição                                                                                                                   |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| RF001  | Gerenciar livros                     | Permitir inclusão, consulta, alteração e exclusão de livros                                                                 |
| RF002  | Gerenciar autores                    | Permitir inclusão, consulta, alteração e exclusão de autores                                                                |
| RF003  | Gerenciar leitores                   | Permitir inclusão, consulta, alteração e exclusão de leitores                                                               |
| RF004  | Gerenciar bibliotecários             | Permitir inclusão, consulta, alteração e exclusão de bibliotecários                                                         |
| RF005  | Gerenciar reserva de livros          | Permitir inclusão, consulta, exclusão e prolongamento de reservas de livros                                                 |
| RF006  | Realizar login do usuário            | Permitir a entrada de leitores e bibliotecários no sistema                                                                  |
| RF007  | Realizar logout do usuário           | Permitir a saida de leitores e bibliotecários do sistema                                                                    |
| RF008  | Buscar livros                        | Permitir busca de títulos específicos, filtro por gênero, autor e ano de publicação                                         |
| RF009  | Buscar autores                       | Permitir busca de autores específicos e filtro por especialidade                                                            |
| RF010  | Gerenciar lista de favoritos         | Permitir favoritar livros, consultar lista de favoritos e remover livros da lista                                           |
| RF011  | Gerenciar livros selecionados        | Permitir adicionar livros a uma sacola, consultar lista de selecionados e remover livros da lista                           |
| RF012  | Gerenciar avaliações                 | Permitir atribuição de nota de 1 a 5 a livros reservados e exibir a média das notas por livro. Exibir histórico de comentários, incluir e deletar comentários   |
| RF013  | Gerenciar empréstimos                | Permitir inclusão, finalização e prolongamento de empréstimos |
| RF014  | Gerenciar recomendações              | Recomendar livros, gêneros e autores |


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição)                                                                                                                                                     |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF001 | **Responsividade** — O sistema web deverá ser responsivo e apresentar layouts desktop, tablet e celular                                                                                    |
| RNF002 | **Implementação** — O sistema deverá ser desenvolvido utilizando as linguagens HTML, CSS e JavaScript                                                                                   |
| RNF003 | **Armazenamento** — O armazenamento de dados deverá ser realizado no próprio navegador do usuário (localStorage)                                                                        |
| RNF004 | **Design** — A interface deverá ser moderna e atrativa, seguindo as melhores práticas de design                                                                             |
| RNF005 | **Facilidade de uso** — O fluxo de atividades do sistema deverá ser fácil e intuitivo, atendendo a públicos diversos, incluindo pessoas da terceira idade                        |
| RNF006 | **Acessibilidade** — O sistema web deverá atender a requisitos mínimos de acessibilidade, tais como tabulação lógica, descrição em áudio de elementos visuais e descrição em texto para elementos auditivos |


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Leitor |	Usuário que deseja buscar livros para empréstimo. É responsável por seu próprio perfil e pelas solicitações de empréstimo de livros. O leitor pode interagir com o sistema favoritando livros, adicionando títulos à sua cesta, avaliando obras específicas e deixando comentários. Possui um acesso restrito ao sistema.|
| Bibliotecário |	Usuário responsável pelo gerenciamento de livros. Possui acesso geral ao sistema. |
| ... |	... |	... |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="713" height="1290" alt="image" src="https://github.com/user-attachments/assets/0fbaad34-0be4-4c03-9ae1-685d1ed3962f" />


### 3.4.2 Descrições de Casos de Uso

### Gerenciar livros (CSU01)

Súmario: O administrador do sistema realiza a gestão (inclusão, remoção, alteração e consulta) dos dados de um livro.

Ator Primário: Livro.

Ator Secundário: Administrador.

Pré-condições: O administrador deve ter permissão para realizar o gerenciamento de livros.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: inclusão de um novo livro, consulta dos dados de um livro, alteração dos dados de um livro e exclusão de um livro.
2) O administrador seleciona a opção desejada: inclusão, consulta, exclusão ou opta por encerrar o caso de uso.
3) Se o administrador deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O administrador requisita a inclusão de um livro no sistema.
b) O sistema apresenta a página de cadastro de um livro.
c) O administrador preenche os campos solicitados.
d) O sistema verifica se o livro já existe no sistema pelo ISBN. Em caso afirmativo, o sistema reporta o fato e solicita a verificação dos dados. Em caso negativo, o sistema prossegue para o próximo passo.
e) O sistema inclui o novo livro e atualiza o banco de dados.

Fluxo Alternativo (2): Consulta

a) O administrador solicita a consulta de dados de um livro no sistema.
b) O sistema apresenta a página de informações do livro.
c) O administrador consulta os dados do livro.

Fluxo Alternativo (2): Alteração

a) O adnunistrador requisita a edição dos dados de um livro no sistema.
b) O sistema apresenta o formulário de edição de dados.
c) O administrador altera os dados que julgar necessário e requisita sua atualização.
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a)	O administrador solicita a exclusão do livro ao sistema.
b) O sistema envia uma janela de confirmação de exclusão e, em caso de aceite, exclui o livro selecionado do banco de dados.

#### Gerenciar  leitores (CSU03)

Sumário: O leitor realiza a gestão (inclusão, remoção, alteração e consulta) dos seus próprios dados.

Ator Primário: Leitor.

Ator Secundário: Não possui.

Pré-condições: O leitor deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1)  O sistema apresenta as operações que podem ser realizadas: inclusão de um novo leitor, consulta dos dados de um leitor, alteração dos dados de um leitor e exclusão de um leitor.
2) 	O leitor seleciona a operação desejada: inclusão, consulta, alteração, exclusão ou opta por encerrar o caso de uso.
3)  Se o leitor deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O leitor requisita sua inclusão no sistema.
b) O sistema apresenta a página de cadastro.
c) O leitor preenche os campos solicitados.
d) O sistema verifica se o leitor já possui cadastro. Em caso afirmativo, o sistema reporta o fato e solicita a verificação dos dados. Em caso negativo, o sistema prossegue para o próximo passo.
e) O sistema inclui o novo leitor e atualiza o banco de dados com o novo cadastro.

Fluxo Alternativo (2): Consulta

a) O leitor requisita a consulta de seus dados no sistema.
b) O sistema apresenta a página de perfil.
c) O leitor confere os dados solicitados.

Fluxo Alternativo (2): Alteração

a) O leitor requisita a edição de seus dados no sistema.
b) O sistema apresenta o formulário de edição de dados.
c) O leitor altera os dados que julgar necessário e requisita sua atualização.
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a)	O leitor solicita a exclusão de sua conta de usuário.
b) O sistema envia uma janela de confirmação de exclusão e, em caso de aceite, exclui a conta do usuário do banco de dados.
 
Pós-condições: um leitor foi cadastrado no sistema, seus dados foram exibidos ou alterados ou sua conta foi excluída do sistema.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
