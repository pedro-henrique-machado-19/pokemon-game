const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: { create }
};

const game = new Phaser.Game(config);

function create() {
  this.add.text(200, 300, 'AGORA VAI!', {
    fontSize: '40px',
    fill: '#ffffff'
  });
}
