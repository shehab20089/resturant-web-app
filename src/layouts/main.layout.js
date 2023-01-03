import burgerIcon from "../../assets/images/s-1.png";
export const mainLayout = (children, childrenscripts) => /*html*/ `
  <nav>
  <h1><img src="${burgerIcon}"/>Food</h1>
  <ul>
  <li>
  <a  href="#/home">Home</a>
  </li>
  <li>
  <a href="#/menu">Menu</a>
  </li>
  <li>
  <a href="#/contact">Contact</a>
  </li>
  </ul>
  </nav>
    <div class="main-content">${children}</div>
 `;
