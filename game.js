const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: { preload, create, update }
};

const game = new Phaser.Game(config);

let player;
let cursors;

function preload() {
  this.load.image('player', 'https://i.imgur.com/6X12UGT.png');
  this.load.image('grass', 'https://i.imgur.com/0Z8FQ9L.png');
}

function create() {
  // mapa
  for(let x=0;x<25;x++){
    for(let y=0;y<19;y++){
      this.add.image(x*32,y*32,'grass').setOrigin(0);
    }
  }

  player = this.physics.add.sprite(100, 100, 'player');
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  let speed = 150;

  player.setVelocity(0);

  if (cursors.left.isDown) player.setVelocityX(-speed);
  if (cursors.right.isDown) player.setVelocityX(speed);
  if (cursors.up.isDown) player.setVelocityY(-speed);
  if (cursors.down.isDown) player.setVelocityY(speed);
}
