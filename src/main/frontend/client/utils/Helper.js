export default class Helper {
  static resetStyle = () => {
    const appContainer = document.getElementById("app");
    appContainer.style.cssText = `perspective: none`;
  };
}
