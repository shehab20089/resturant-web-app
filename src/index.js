import "./styles.css";
import { router } from "./router";
import { mainLayout } from "./layouts";
import { homeTemplate, menuTemplate, contactTemplate } from "./templates";

router.initializeRoute(
  [
    {
      path: "home",
      template: homeTemplate,
      layout: mainLayout,
      isDefault: true,
    },
    {
      path: "menu",
      template: menuTemplate,
      layout: mainLayout,
    },
    {
      path: "contact",
      template: contactTemplate,
      layout: mainLayout,
    },
  ],
  () => {
    // remove active status from old link
    const activeElement = document.querySelector(".active");
    if (activeElement) activeElement.classList.remove("active");

    // add active status to the new link
    const currentAnchorTag = document.querySelector(
      `a[href="${window.location.hash}"]`
    );
    currentAnchorTag.classList.add("active");
  }
);
