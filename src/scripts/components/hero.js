class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div tabindex="0" class="hero__text">
            <h1 class="hero__title">Hello</h1>

            <p class="hero__subtitle">
                Discover some places to increase your appetite :)
            </p>

            <a href="#main-content" class="hero-btn">Let's Start!</a>
        </div>
        `;
  }
}

customElements.define('hero-content', Hero);
