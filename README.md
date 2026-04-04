Para um repositório que você vai expor no LinkedIn, o **README** precisa ser o seu "vendedor silencioso". Ele deve explicar não apenas o que o projeto faz, mas **como** você o construiu tecnicamente.

Aqui está um modelo profissional, estruturado e visualmente atraente:

---

# Daily Planner Pro

Um gerenciador de tarefas diário segmentado por períodos (Manhã, Tarde e Noite), construído com foco em **Arquitetura de Objetos** e **Persistência de Dados**.


---

## Sobre o Projeto

Este projeto foi desenvolvido para aplicar conceitos avançados de JavaScript puro (Vanilla JS), saindo de scripts procedurais para uma abordagem mais organizada e profissional. O diferencial está na segmentação de tarefas por período do dia e na garantia de que os dados não sejam perdidos ao fechar o navegador.

---

## Tecnologias Utilizadas

* **HTML5:** Estrutura semântica com layout em colunas (estilo Kanban).
* **CSS3:** Design responsivo, animações de entrada e Modais customizados para uma melhor UX.
* **JavaScript (ES6+):** Programação Orientada a Objetos (POO) e manipulação do DOM.
* **LocalStorage:** Persistência de dados para armazenamento local no navegador.

---

## Conceitos Técnicos Aplicados

O coração da aplicação reside em um objeto literal `meuApp`, que gerencia todo o ciclo de vida dos dados:

1.  **Encapsulamento:** Toda a lógica (Adição, Remoção e Renderização) está contida dentro do objeto, evitando poluição do escopo global.
2.  **Fluxo de Dados Unidirecional:** O array `tarefas` é a única "fonte da verdade". Qualquer alteração no dado dispara automaticamente o método `renderizar()`, que sincroniza a interface e o banco de dados.
3.  **Renderização Condicional:** O sistema distribui as tarefas dinamicamente entre as colunas (Manhã, Tarde ou Noite) com base nas propriedades do objeto de cada tarefa.
4.  **Tratamento de Erros:** Implementação de um Modal customizado para feedback visual caso o usuário tente inserir dados inválidos.

---

## Demonstração

> **[DICA: Coloque aqui um GIF do seu projeto funcionando ou um link para o vídeo do LinkedIn]**

---

## Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/nome-do-repo.git
    ```
2.  Abra o arquivo `index.html` em seu navegador.
3.  *Opcional:* Utilize a extensão **Live Server** no VS Code para uma melhor experiência de desenvolvimento.

---

## Licença

Este projeto foi desenvolvido para fins de estudo e portfólio. Sinta-se à vontade para clonar e adaptar para seus próprios aprendizados!

---

**Conecte-se comigo no LinkedIn:** Joao Dorini (https://www.linkedin.com/in/joaodorini/)

---
