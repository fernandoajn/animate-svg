class Cards {
  constructor() {
    this.posicaoSectionDicas = document.getElementById('section-dicas')
    this.cardEsquerda = document.querySelector('.card-esq')
    this.cardDireita = document.querySelector('.card-dir')
  }

  scrollCards() {
    window.requestAnimationFrame(this.calculoScroll.bind(this));
  }

  calculoScroll() {
    const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];

    console.log(posicao);

    if(posicao >= 25) {
      this.cardEsquerda.style.transform = `translate(${((-posicao) + 25)/10}%)`;
      this.cardDireita.style.transform = `translate(${((posicao) - 25)/10}%)`;
    }
  }
}

export { Cards }