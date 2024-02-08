const perguntas = [
    {
      pergunta:
        "Qual é a sintaxe correta para se referir a um elemento HTML com o id 'exemplo' em JavaScript?",
      respostas: [
        "getElementByTagName('exemplo')",
        "document.getElement('exemplo')",
        "document.getElementById('exemplo')",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        'Comparação de valor e tipo',
        'Atribuição',
        'Comparação de valor',
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        'Selecionar um elemento pelo seu nome de classe',
        'Selecionar um elemento pelo seu id',
        'Selecionar o primeiro elemento que corresponde a um seletor CSS especificado',
      ],
      correta: 2,
    },
    {
      pergunta: "O que o método 'push()' faz em um array JavaScript?",
      respostas: [
        'Remove o último elemento do array',
        'Adiciona um novo elemento ao final do array',
        'Inverte a ordem dos elementos no array',
      ],
      correta: 1,
    },
    {
      pergunta: 'O que é uma função de callback em JavaScript?',
      respostas: [
        'Uma função que é chamada antes da execução de outra função',
        'Uma função que é passada como argumento para outra função e é executada após algum evento ou ação',
        'Uma função que é executada automaticamente quando o programa é iniciado',
      ],
      correta: 1,
    },
    {
      pergunta: 'Como se define uma variável em JavaScript?',
      respostas: ['var', 'variable', 'let'],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do método 'slice()' em JavaScript?",
      respostas: [
        'Remover elementos de um array',
        'Copiar parte de um array para um novo array',
        'Adicionar elementos a um array',
      ],
      correta: 1,
    },
    {
      pergunta: 'Qual é o operador usado para atribuição em JavaScript?',
      respostas: ['=', '==', ':='],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
        'Iterar sobre os elementos de um array',
        'Inverter a ordem dos elementos de um array',
        'Remover elementos de um array',
      ],
      correta: 0,
    },
    {
      pergunta:
        'Qual é a saída do seguinte código JavaScript: console.log(typeof(42))?',
      respostas: ['number', 'string', 'undefined'],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  // loop
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute(
        'name',
        'pergunta-' + perguntas.indexOf(item),
      );
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta; //true ou false
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      };
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  