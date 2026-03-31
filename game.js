const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: { preload, create }
};

const game = new Phaser.Game(config);

let playerHP = 100;
let enemyHP = 100;

function preload() {
  this.load.image('player', 'https://i.imgur.com/6X12UGT.png');
  this.load.image('enemy', 'https://i.imgur.com/8QfQ6Qp.png');
}

function create() {

  // Player
  this.add.image(200, 300, 'player');

  // Enemy
  this.add.image(600, 300, 'enemy');

  // Texto HP
  const playerText = this.add.text(100, 50, 'Player HP: 100', { fontSize: '20px', fill: '#fff' });
  const enemyText = this.add.text(500, 50, 'Enemy HP: 100', { fontSize: '20px', fill: '#fff' });

  // Botão atacar
  const attackBtn = this.add.text(350, 500, 'ATACAR', {
    fontSize: '30px',
    backgroundColor: '#000',
    padding: 10
  })
  .setInteractive()
  .on('pointerdown', () => {

    // Player ataca
    let playerDamage = Phaser.Math.Between(10, 25);
    enemyHP -= playerDamage;

    // Enemy ataca
    let enemyDamage = Phaser.Math.Between(5, 20);
    playerHP -= enemyDamage;

    // Atualiza texto
    playerText.setText('Player HP: ' + playerHP);
    enemyText.setText('Enemy HP: ' + enemyHP);

    // Verifica fim
    if (enemyHP <= 0) {
      enemyText.setText('INIMIGO DERROTADO!');
      attackBtn.disableInteractive();
    }

    if (playerHP <= 0) {
      playerText.setText('VOCÊ PERDEU!');
      attackBtn.disableInteractive();
    }

  });

}
