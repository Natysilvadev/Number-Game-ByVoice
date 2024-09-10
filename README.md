# Jogo do Número Secreto com Reconhecimento de Voz

Este é um jogo simples onde o jogador tenta adivinhar um número secreto escolhido aleatoriamente pelo computador. O diferencial deste jogo é que ele utiliza uma API de reconhecimento de voz para capturar os palpites do jogador.

## Como funciona

O computador gera aleatoriamente um número secreto dentro de um intervalo específico, e o jogador tenta adivinhar qual é o número. Em vez de digitar os palpites, o jogador utiliza sua voz, que é interpretada pela API de reconhecimento de voz.

### Regras do Jogo

1. O computador escolhe um número aleatório dentro de um intervalo (por padrão, entre 1 e 100).
2. O jogador faz um palpite falando o número em voz alta.
3. O jogo compara o palpite do jogador com o número secreto:
   - Se o palpite for menor que o número secreto, o jogo responde "O número é maior".
   - Se o palpite for maior, o jogo responde "O número é menor".
   - Se o palpite estiver correto, o jogo avisa que o jogador acertou.
4. O jogo continua até o jogador acertar o número.

## Tecnologias Utilizadas

- **HTML/CSS/JavaScript**: para a interface do jogo e lógica de funcionamento.
- **API de Reconhecimento de Voz**: usada para capturar e interpretar os comandos de voz do jogador. Pode ser usada a [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) para navegadores que suportam essa funcionalidade.
- **Gerador de Números Aleatórios**: utilizado para criar o número secreto no início de cada jogo.
