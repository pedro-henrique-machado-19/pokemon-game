(() => {
  const WIDTH = 800;
  const HEIGHT = 600;
  const rootElement = document.getElementById('game-root');

  if (!rootElement) {
    return;
  }

  if (typeof Phaser === 'undefined') {
    rootElement.innerHTML = '<p class="error">Não foi possível carregar o Phaser.</p>';
    return;
  }

  const config = {
    type: Phaser.AUTO,
    parent: 'game-root',
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#1f2937',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: {
      preload,
      create,
      update,
    },
  };

  new Phaser.Game(config);

  function preload() {
    // Reservado para assets do jogo.
  }

  function create() {
    const title = this.add.text(WIDTH / 2, HEIGHT / 2, 'AGORA VAI!', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '48px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      align: 'center',
    });

    title.setOrigin(0.5);
  }

  function update() {
    // Loop principal do jogo.
  }
})();
