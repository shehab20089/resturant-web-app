import burgerImage from "../../../assets/images/g-1.jpg";
import CheeseBurger from "../../../assets/images/p-1.jpg";
import VeggiePizza from "../../../assets/images/s-img-2.jpg";
import FriedChicken from "../../../assets/images/g-6.jpg";
import IceCream from "../../../assets/images/s-img-3.jpg";

export const menuTemplate = /*html*/ `
 <div class="menu-wrapper">

  <div class='menu-item'> 
  <img src=${burgerImage}>
  <div class="hover-container">
  <p>Beef Burger</p>
  <p>50$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${CheeseBurger}>
  <div class="hover-container">
  <p>Cheese Burger</p>
  <p>60$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${VeggiePizza}>
  <div class="hover-container">
  <p>Veggie Pizza</p>
  <p>120$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${FriedChicken}>
  <div class="hover-container">
  <p>Fried Chicken</p>
  <p>50$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${IceCream}>
  <div class="hover-container">
  <p>Ice Cream</p>
  <p>40$</p>
  </div>
  </div>

 </div>
 
 `;
