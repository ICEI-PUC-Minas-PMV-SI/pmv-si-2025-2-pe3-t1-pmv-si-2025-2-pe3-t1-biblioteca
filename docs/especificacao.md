# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento

Nesta seção, serão documentados os requisitos funcionais e não funcionais da plataforma proposta, bem como o diagrama de casos de uso e as descrições dos casos de uso relacionados a cada requisito funcional do sistema web da biblioteca Versora.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Versora - um sistema web para uma biblioteca física que facilite a gestão de usuários e as tarefas relacionadas à busca e à reserva de livros. Seus componentes principais são o sistema de busca de livros e autores, o sistema de recomendação de livros e autores, o sistema de reservas e o sistema de avaliações.

### 3.2.2 Missão do produto
Tornar a busca por títulos agradável e intuitiva, cirar um ambiente interativo e atraente para leitores de todas as faixas etárias, conferir acessibilidade à biblioteca e incentivar o hábito da leitura. O sistema web implementará as melhores práticas observadas em sites para bibliotecas e irá além, apresentando funcionalidades inéditas no contexto desse tipo de plataforma.

### 3.2.3 Limites do produto
O sistema web Versora, no atual ciclo iterativo, funcionará com banco de dados simulado em armazenamento local, para fins de testagem de todas as suas funcionalidades, bem como de implementação de seu layout.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Fluxo de navegação intuitivo | Essencial | 
|4	| Agradabilidade estética	| Essencial | 
|5 | Alto nível de interatividade entre leitores e sistema| Essencial |

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição                                                                                                                   |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| RF001  | Gerenciar livros                     | Permitir inclusão, consulta, alteração e exclusão de livros                                                                 |
| RF002  | Gerenciar autores                    | Permitir inclusão, consulta, alteração e exclusão de autores                                                                |
| RF003  | Gerenciar leitores                   | Permitir inclusão, consulta, alteração e exclusão de leitores                                                               |
| RF004  | Gerenciar bibliotecários             | Permitir inclusão, consulta, alteração e exclusão de bibliotecários                                                         |
| RF005  | Gerenciar reserva de livros          | Permitir inclusão, consulta e exclusão de reservas de livros                                                 |
| RF006  | Realizar login do usuário            | Permitir a entrada de leitores e bibliotecários no sistema                                                                  |
| RF007  | Realizar logout do usuário           | Permitir a saida de leitores e bibliotecários do sistema                                                                    |
| RF008  | Buscar livros                        | Permitir busca de títulos específicos, filtro por gênero, autor e ano de publicação                                         |
| RF009  | Gerenciar lista de favoritos         | Permitir favoritar livros, consultar lista de favoritos e remover livros da lista                                           |
| RF010  | Gerenciar livros selecionados        | Permitir adicionar livros a uma sacola, consultar lista de selecionados e remover livros da lista                           |
| RF011  | Gerenciar avaliações                 | Permitir atribuição de nota de 1 a 5 a livros reservados e consultar a média das notas por livro. Consultar o histórico de comentários, incluir e deletar comentários   |
| RF012  | Gerenciar empréstimos                | Permitir inclusão, consulta, finalização e prolongamento de empréstimos |
| RF013  | Gerenciar recomendações              | Recomendar livros, gêneros e autores |

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
| Bibliotecário |	Usuário responsável pelo gerenciamento dos livros do averso e dos empréstimos efetivados. Possui acesso geral ao sistema e terá como atribuição adicional a gestão do fluxo informacional referente aos autores cadastrados no site. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

Como observado no diagrama de casos de uso da Figura 1, os leitores possuem alto grau de autonomia no gerenciamento de seus perfis e na interação com o sistema, realizando suas próprias reservas e criando listas de favoritos e uma cesta de livros selecionados para serem reservados. A figura do bibliotecário será responsável por cadastrar livros e autores, bem como acompanhar as reservas e registrar os empréstimos. O sistema web apresentará um sistema automático de recomendações baseado tanto no perfil do leitor quanto na popularidade de gêneros, títulos e autores entre os usuários do site.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="713" height="1290" alt="image" src="https://github.com/user-attachments/assets/0fbaad34-0be4-4c03-9ae1-685d1ed3962f" />


### 3.4.2 Descrições de Casos de Uso

#### Gerenciar livros (CSU01)

Súmario: O bibliotecário do sistema realiza a gestão (inclusão, remoção, alteração e consulta) dos dados de um livro.

Ator Primário: Bibliotecário.

Ator Secundário: Não possui.

Pré-condições: O bibliotecário deve estar previamente cadastrado no sistema.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: inclusão de um novo livro, consulta dos dados de um livro, alteração dos dados de um livro e exclusão de um livro.
2) O bibliotecário seleciona a opção desejada: inclusão, consulta, exclusão ou opta por encerrar o caso de uso.
3) Se o bibliotecário deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O bibliotecário requisita a inclusão de um livro no sistema.
b) O sistema apresenta a página de cadastro de um livro.
c) O bibliotecário preenche os campos solicitados.
d) O sistema verifica se há erros no formato e tipo dos dados inseridos. Em caso afirmativo, o sistema reporta o fato e solicita a verificação dos dados. Em caso negativo, o sistema prossegue para o próximo passo.
e) O sistema inclui o novo livro e atualiza o banco de dados.

Fluxo Alternativo (2): Consulta

a) O bibliotecário solicita a consulta de dados de um livro no sistema.
b) O sistema apresenta a página de informações do livro.
c) O bibliotecário consulta os dados do livro.

Fluxo Alternativo (2): Alteração

a) O bibliotecário requisita a edição dos dados de um livro no sistema.
b) O sistema apresenta o formulário de edição de dados.
c) O bibliotecário altera os dados que julgar necessário e requisita sua atualização.
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a)	O bibliotecário solicita a exclusão do livro ao sistema.
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de aceite, exclui o livro selecionado do banco de dados.

### Gerenciar autores (CSU02)

Súmario: O bibliotecário do sistema realiza a gestão (inclusão, remoção, alteração e consulta) dos dados de um autor.

Ator Primário: bibliotecário.

Ator Secundário: Não possui.

Pré-condições: O bibliotecário deve estar previamente cadastrado no sistema.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: inclusão de um novo autor, consulta dos dados de um autor, alteração dos dados de um autor e exclusão de um autor.
2) O bibliotecário seleciona a opção desejada: inclusão, consulta, exclusão ou opta por encerrar o caso de uso.
3) Se o bibliotecário deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O bibliotecário requisita a inclusão de um autor no sistema.
b) O sistema apresenta a página de cadastro de um autor.
c) O bibliotecário preenche os campos solicitados.
d) O sistema verifica se o autor já existe no sistema. Em caso afirmativo, o sistema reporta o fato e solicita a verificação dos dados. Em caso negativo, o sistema prossegue para o próximo passo.
e) O sistema inclui o novo autor e atualiza o banco de dados.

Fluxo Alternativo (2): Consulta

a) O bibliotecário solicita a consulta de dados de um autor no sistema.
b) O sistema apresenta a página de informações do autor.
c) O bibliotecário consulta os dados do autor.

Fluxo Alternativo (2): Alteração

a) O bibliotecário requisita a edição dos dados de um autor no sistema.
b) O sistema apresenta o formulário de edição de dados.
c) O bibliotecário altera os dados que julgar necessário e requisita sua atualização.
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a)	O bibliotecário solicita a exclusão do autor ao sistema.
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de aceite, exclui o autor selecionado do banco de dados.

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
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de aceite, exclui a conta do usuário do banco de dados.
 
Pós-condições: um leitor foi cadastrado no sistema, seus dados foram exibidos ou alterados ou sua conta foi excluída do sistema.

#### Gerenciar bibliotecários (CSU04)

Sumário: O bibliotecário realiza a gestão (consulta, alteração ou exclusão) dos seus próprios dados.

Ator Primário: Bibliotecário.

Ator Secundário: Não possui.

Pré-condições: O bibliotecário deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: consulta dos dados de um bibliotecário, alteração dos dados de um bibliotecário e exclusão de um bibliotecário.
2) O bibliotecário seleciona a operação desejada: consulta, alteração, exclusão ou opta por encerrar o caso de uso.
3) Se o bibliotecário deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Consulta

a) O bibliotecário requisita a consulta de seus dados no sistema. 
b) O sistema apresenta a página de perfil. 
c) O bibliotecário confere os dados solicitados.

Fluxo Alternativo (2): Alteração

a) O bibliotecário requisita a edição de seus dados no sistema. 
b) O sistema apresenta o formulário de edição de dados. 
c) O bibliotecário altera os dados que julgar necessário e requisita sua atualização. 
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a) O bibliotecário solicita a exclusão de sua conta de usuário. 
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de aceite, exclui a conta do usuário do banco de dados.

Pós-condições: os dados do bibliotecário foram exibidos ou alterados ou sua conta foi excluída do sistema.

#### Gerenciar reservas de livros (CSU05)

Sumário: O leitor realiza a gestão (inclusão, consulta e exclusão) de reservas de livros.

Ator Primário: Leitor.

Ator Secundário: Não possui.

Pré-condições: O leitor deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: inclusão de uma reserva, consulta dos dados de uma reserva, exclusão de uma reserva.
2) O leitor seleciona a operação desejada: inclusão, consulta ou exclusão de uma reserva, ou opta por encerrar o caso de uso.
3) Se o leitor deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O leitor requisita a inclusão de uma reserva no sistema. 
b) O sistema registra a reserva no banco de dados e exibe a posição do leitor na fila de reservas da obra desejada. 

Fluxo Alternativo (2): Consulta

a) O leitor requisita a consulta de suas lista de reservas. 
b) O sistema apresenta a página com todas as reservas do leitor. 
c) O leitor confere os dados solicitados.

Fluxo Alternativo (2): Exclusão

a) O leitor solicita a exclusão de uma reserva. 
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de confirmação, exclui o leitor da fila de reservas daquele título específico, atualizando a fila no banco de dados.

Pós-condições: a reserva de um livro foi incluída, consultada ou excluída do sistema.

#### Realizar login do usuário (CSU06)

Sumário: Permitir a entrada de leitores e bibliotecários no sistema, validando suas credenciais de acesso.

Ator Primário: Leitor ou Bibliotecário.

Ator Secundário: Não possui.

Pré-condições: O usuário (leitor ou bibliotecário) deve estar previamente cadastrado no sistema.

Fluxo Principal:

1)O sistema apresenta a seção de login com as opções de entrar no sistema ou redefinir senha.
2)O usuário seleciona a opção desejada: entrar no sistema ou redefinir sua senha.
3)Caso o usuário deseje realizar outra operação, retorna ao passo 2. Caso contrário, o caso de uso termina.


Fluxo Alternativo (2): entrar no sistema
a) O usuário escolhe a opção de entrar no sistema 
b) O sistema solicita a inserção dos dados de entrada nos campos correspondentes
c) O usuário preenche os campos solicitados
d) O sistema valida os dados inseridos e, em caso afirmativo, a entrada no sistema é confirmada. Caso contrário, o sistema reporta o erro e solicita a verificação dos dados.

Fluxo Alternativo (2): Esqueci minha senha

a) O usuário aciona a opção “Esqueci minha senha”.
b) O sistema apresenta o procedimento de recuperação de senha (por intermédio de um código de verificação enviado para o e-mail do usuário).
c) O usuário segue o procedimento para redefinir sua senha.
d) O sistema valida os dados inseridos e, em caso afirmativo, a senha é alterada, encerrando o caso de uso. Caso contrário, o sistema reporta o erro e solicita a verificação dos dados.

Pós-condições: O usuário foi autenticado no sistema e obteve acesso às funcionalidades de acordo com seu perfil ou ocorreu a alteração da senha do usuário no banco de dados.

#### Realizar logout do usuário (CSU07)

Sumário: Permitir a saída de leitores e bibliotecários do sistema, encerrando a sessão do usuário de forma segura.

Ator Primário: Leitor ou Bibliotecário.

Ator Secundário: Não possui.

Pré-condições: O usuário (leitor ou bibliotecário) deve estar autenticado no sistema.

Fluxo Principal:

1)O sistema apresenta a opção “Sair” ao usuário autenticado.
2)O usuário seleciona a opção “Sair”.
3)O sistema exibe uma janela de confirmação de saída e, em caso de aceite, realiza o logout do usuário.

Pós-condições: A sessão do usuário é encerrada e ele não tem mais acesso às funcionalidades restritas até efetuar um novo login.

#### Buscar livros (CSU08)

Sumário: O leitor realiza a busca por livros no sistema, podendo aplicar filtros como título, gênero, autor e ano de publicação.

Ator Primário: Leitor.

Pré-condições: Não possui.

Fluxo Principal:
	1)	O sistema apresenta a seção de busca de livros.
	2)	O leitor seleciona o critério de busca (título, gênero, autor ou ano de publicação) ou realiza uma busca sem selecionar filtros.

 Fluxo alternativo (2): Busca por título

 a)O leitor insere o título do livro desejado no campo de busca.
 b)O sistema realiza a busca e, caso encontre correspondências, apresenta todos os livros cujos títulos contêm as palavras buscadas. Caso contrário, reporta a inexistência de títulos correspondentes.

 Fluxo alternativo (2): Busca por gênero

 a)O leitor insere o gênero desejado no campo de busca.
 b)O sistema realiza a busca e, caso encontre correspondências, apresenta os livros correspondentes ao gênero buscado. Caso contrário, reporta a inexistência de títulos com referência ao gênero buscado.

 Fluxo alternativo (2): Busca por autor

 a)O leitor insere o autor desejado no campo de busca.
 b)O sistema realiza a busca e, caso encontre correspondências, apresenta os livros escritos pelo autor buscado. Caso contrário, reporta a inexistência de títulos escritos pelo autor buscado.
 
Fluxo alternativo (2): Busca por ano de publicação

 a)O leitor insere o ano de publicação desejado no campo de busca.
 b)O sistema realiza a busca e, caso encontre correspondências, apresenta os livros publicados no ano requisitado. Caso contrário, reporta a inexistência de títulos publicados naquele ano.

 Fluxo alternativo (2): Busca sem filtros

 a)O leitor insere as palavras desejadas no campo de busca
 b)O sistema realiza a busca e, caso encontre correspondências, apresenta os livros que contenham referência à palavra informada em seu título, nome do autor ou gênero. Caso contrário, reporta a inexistência de livros com alguma referência às palavras buscadas.
 
Pós-condições: O catálogo de livros correspondentes à busca é exibido, permitindo ao leitor consultar informações de cada obra.

#### Gerenciar lista de favoritos (CSU09)

Sumário: O leitor realiza a gestão (inclusão, consulta e exclusão) da lista de favoritos.

Ator Primário: Leitor.

Ator Secundário: Não possui.

Pré-condições: O leitor deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: inclusão de um novo livro à lista, consulta da lista de favoritos, exclusão de um livro da lista.
2) O leitor seleciona a operação desejada: inclusão, consulta ou exclusão de um favorito, ou opta por encerrar o caso de uso.
3) Se o leitor deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O leitor requisita a inclusão de um livro à lista. 
b) O sistema registra o livro na lista de favoitos e o exibe junto aos outros, caso já haja algum. 

Fluxo Alternativo (2): Consulta

a) O leitor requisita a consulta de sua lista de favoritos. 
b) O sistema apresenta a página com todos os livros inclusos na lista de favoritos do leitor. 
c) O leitor confere os dados solicitados.

Fluxo Alternativo (2): Exclusão

a) O leitor solicita a exclusão de um livro da lista. 
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de confirmação, exclui o livro selecionado da lista, atualizando a mesma.

Pós-condições: um livro foi incluído, consultado ou excluído da lista de favoritos do leitor.

#### Gerenciar livros selecionados (CSU10)

Sumário: O leitor realiza a gestão (inclusão, consulta e exclusão) da sacola de livros.

Ator Primário: Leitor.

Ator Secundário: Não possui.

Pré-condições: O leitor deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1) O sistema apresenta as operações que podem ser realizadas: inclusão de um novo livro à sacola, consultar lista de selecionados, exclusão de um livro da sacola.
2) O leitor seleciona a operação desejada: inclusão, consulta ou exclusão de um livro da sacola, ou opta por encerrar o caso de uso.
3) Se o leitor deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O leitor requisita a inclusão de um livro à sacola. 
b) O sistema registra o livro na sacola de livros selecionados e o exibe junto aos outros, caso já haja algum. 

Fluxo Alternativo (2): Consulta

a) O leitor requisita a consulta de sua sacola de livros selecionados. 
b) O sistema apresenta a página com todos os títulos inclusos na sacola de livros selecionados do leitor. 
c) O leitor confere os dados solicitados.

Fluxo Alternativo (2): Exclusão

a) O leitor solicita a exclusão de um livro da sacola. 
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de confirmação, exclui o livro selecionado da sacola, atualizando a mesma.

Pós-condições: um livro foi incluído, consultado ou excluído da sacola do leitor.

#### Gerenciar avaliações (CSU11)

Sumário: O leitor realiza a gestão (inclusão, remoção, alteração e consulta) das suas avaliações.

Ator Primário: Leitor.

Ator Secundário: Não possui.

Pré-condições: O leitor deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1)  O sistema apresenta as operações que podem ser realizadas: inclusão de uma nova avaliação, consulta dos dados de uma avaliação, alteração dos dados de uma avaliação e exclusão de uma avaliação.
2) 	O leitor seleciona a operação desejada: inclusão, consulta, alteração, exclusão ou opta por encerrar o caso de uso.
3)  Se o leitor deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O leitor requisita a inclusão de sua avaliação no sistema.
b) O sistema apresenta a página de cadastro de uma avaliação.
c) O leitor preenche os campos solicitados.
d) O sistema verifica se o livro já foi avaliado por este leitor. Em caso afirmativo, o sistema reporta o fato e solicita a verificação dos dados da avaliação. Em caso negativo, o sistema prossegue para o próximo passo.
e) O sistema inclui uma nova avaliação e atualiza o banco de dados.

Fluxo Alternativo (2): Consulta

a) O leitor requisita a consulta de suas avaliações no sistema.
b) O sistema apresenta a página de avaliações.
c) O leitor confere os dados das avaliações.

Fluxo Alternativo (2): Alteração

a) O leitor requisita a edição de suas avaliações no sistema.
b) O sistema apresenta o formulário de edição de dados.
c) O leitor altera os dados que julgar necessário e requisita sua atualização.
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a)	O leitor solicita a exclusão de sua avaliação.
b) O sistema exibe uma janela de confirmação de exclusão e, em caso de aceite, exclui a avaliação do banco de dados.
 
Pós-condições: uma avaliação foi cadastrada no sistema, essa avaliação teve seus dados exibidos ou alterados ou foi excluída do sistema.

#### Gerenciar  empréstimos (CSU12)

Sumário: O bibliotecário realiza a gestão (inclusão, remoção, alteração e consulta) dos empréstimos da biblioteca.

Ator Primário: Bibliotecário.

Ator Secundário: Não possui.

Pré-condições: O bibliotecário deve estar cadastrado e deve ser validado pelo Sistema.

Fluxo Principal:

1)  O sistema apresenta as operações que podem ser realizadas: inclusão de um novo empréstimo, consulta dos dados de um empréstimo, alteração dos dados de um empréstimo e exclusão de um empréstimo.
2) 	O bibliotecário seleciona a operação desejada: inclusão, consulta, alteração, exclusão ou opta por encerrar o caso de uso.
3)  Se o bibliotecário deseja realizar outra operação, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (2): Inclusão

a) O bibliotecário requisita a inclusão de um empréstimo no sistema.
b) O sistema apresenta a página de cadastro de empréstimos.
c) O bibliotecário preenche os campos solicitados.
d) O sistema verifica se o empréstimo já foi realizado por este bibliotecário. Em caso afirmativo, o sistema reporta o fato e solicita a verificação dos dados do empréstimo. Em caso negativo, o sistema prossegue para o próximo passo.
e) O sistema inclui um novo empréstimo e atualiza o banco de dados.

Fluxo Alternativo (2): Consulta

a) O bibliotecário requisita a consulta dos empréstimos realizados no sistema.
b) O sistema apresenta a página de empréstimos.
c) O bibliotecário confere os dados dos empréstimos.

Fluxo Alternativo (2): Alteração

a) O bibliotecário requisita a edição de um empréstimo no sistema.
b) O sistema apresenta o formulário de edição de dados.
c) O bibliotecário altera os dados que julgar necessário e requisita sua atualização.
d) O sistema verifica a validade dos dados e, em caso afirmativo, realiza as alterações no banco de dados. Caso contrário, o erro é reportado.

Fluxo Alternativo (2): Exclusão

a)	O bibliotecário solicita o cancelamento de um empréstimo.
b) O sistema exibe uma janela de confirmação de cancelamento e, em caso de aceite, cancela o empréstimo do banco de dados.
 
Pós-condições: um empréstimo foi cadastrado no sistema, esse empréstimo teve seus dados exibidos ou alterados ou foi excluído do sistema.

#### Gerenciar  recomendações (CSU13)

Sumário: O tempo realiza a recomendação de livros, gêneros e autores para os leitores, com base em suas interações registradas.

Ator Primário: Tempo.

Ator Secundário: Leitor.

Pré-condições: O leitor deve estar cadastrado e validado pelo sistema, além de possuir interações registradas como reservas, avaliações e curtidas.

Fluxo Principal:

1)  O sistema apresenta o acervo ao leitor.
2) 	O sistema verifica se o leitor possui interações (histórico de reservas, avaliações e curtidas). Em caso negativo, o sistema não gera um carrossel de recomendação personalizado. Em caso afirmativo, o sistema prossegue para o próximo passo.
3)  O sistema identifica livros ou autores semelhantes baseados em suas características.
4)  O sistema apresenta um carrossel de recomendações personalizadas ao leitor.


Pós-condições: um carrossel de recomendações foi exibido ao leitor.
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
