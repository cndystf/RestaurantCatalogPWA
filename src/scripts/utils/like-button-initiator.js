import FavRestoIdb from '../data/resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/like-button';
import { initSwalError, initSwalSuccess } from './swal-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;
      const restaurant = await FavRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSwalError(err.message);

      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavRestoIdb.putResto(this._restaurant);
      initSwalSuccess('Added to Favorite');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavRestoIdb.deleteResto(this._restaurant.id);
      initSwalSuccess('Remove from Favorite');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
