import CONFIG from '../../globals/config';

const restoCard = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-tag">
          <div class="img-container">
          <img tabindex="0" class="card-image" alt="${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"/>
          
            <span class="city-card">
                <span>${resto.city}</span>
            </span>
          </div>

          <div tabindex="0" class="card-content">
            <p class="card-content-rating">Rating: ${resto.rating}</p>
            <p class="card-content-title">${resto.name}</p>
            <p class="card-content-description">${resto.description}</p>
          </div>
      </a>
    </div>
  `;

export default restoCard;
