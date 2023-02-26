class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
        <div class="mobile-menu">
          <div class="logo">
            <a href="/">EatBetter </a>
          </div>

          <div class="menu-container">
            <button class="menu" aria-label="dropdown mobile" type="button" style="min-width: 44px; min-height: 44px;">
            <span class="material-icons">reorder</span>
            </button>
          </div>
        </div>

        <ul class="nav-list">
          <li class="nav-item"><a href="#/home">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item"><a href="https://www.instagram.com/cndystf/">About</a></li>
        </ul>
      </nav>
        `;
  }
}

customElements.define('nav-bar', Navbar);
