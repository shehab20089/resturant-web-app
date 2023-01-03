function navigateTo({ path }) {
  this.currentRoute = this.routes.find((route) => route.path === path);
  this.renderCurrentRoute();
}
function renderCurrentRoute() {
  document.getElementById("content").innerHTML =
    this.currentRoute.layout(this.currentRoute.template) ??
    this.currentRoute.template;
  window.history.replaceState({}, null, "#/" + this.currentRoute.path);
  this.onNavigationFinished();
}

function initializeRoute(routes, handleNavigationChange) {
  this.routes = routes;
  this.onNavigationFinished = handleNavigationChange;
  const currentPath = window.location.hash.substring(2);
  let current;
  if (currentPath) {
    current = this.routes.find((route) => route.path === currentPath);
  } else {
    current = this.routes.find((route) => route.isDefault);
  }
  this.handleEventChange();
  this.currentRoute = current;
  const entryElement = document.createElement("div");
  entryElement.id = "content";
  document.body.appendChild(entryElement);
  this.renderCurrentRoute();
}

function handleEventChange() {
  window.addEventListener("hashchange", () => {
    const currentPath = window.location.hash.substring(2);
    this.navigateTo({ path: currentPath });
  });
}
const router = {
  navigateTo,
  initializeRoute,
  routes: [],
  currentRoute: null,
  renderCurrentRoute,
  handleEventChange,
  onNavigationFinished: () => {},
};
export { router };
