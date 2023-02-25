class FooterPart extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
            <ul>
                <li>Copyright © 2022 - EatBetter PWA</li>
            </ul>
        </footer>
    `;
  }
}

customElements.define('footer-part', FooterPart);
