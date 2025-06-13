Você solicitou um jogo simples de colheita usando p5.js, onde o jogador poderia mover um personagem para coletar frutas espalhadas pela tela. O jogo deveria ter:

Um jogador controlado pelas setas do teclado

Frutas posicionadas aleatoriamente no cenário

Sistema de pontuação para cada fruta coletada

Limite de tempo para a partida

Mensagem de fim de jogo com possibilidade de reiniciar

Versão Final Atendida
Estrutura e funcionalidades implementadas:

Player: Um círculo com emoji 🌾 que pode ser movido com as setas do teclado. Movimento limitado para não sair da tela.

Fruits: Pequenas frutas 🍎 aparecem em posições aleatórias. Ao serem coletadas pelo jogador (colisão detectada), somem, aumentam a pontuação e uma nova fruta surge.

Tempo: A partida dura 30 segundos, exibindo um contador regressivo.

Pontuação: Mostrada na tela, incrementada a cada fruta coletada.

Game Over: Após o tempo acabar, uma mensagem "Fim de jogo!" é exibida junto com a pontuação final e instrução para pressionar "R" para reiniciar.

Reinício: Com o botão "R", o jogo reseta pontos, tempo, frutas e posição do jogador.

