export const setBodyBackgroundColorOnLoad = (pathname: string) => {
  const body = document.querySelector("body");
  if (body) {
    switch (pathname) {
      case "/":
        body.style.backgroundColor = "#eeeeee";
        break;
      case "/about":
        body.style.backgroundColor = "#87b38d";
        break;
      case "/work":
        body.style.backgroundColor = "#e63946";
        break;
      case "/contact":
        body.style.backgroundColor = "#457b9d";
        break;
      default:
        body.style.backgroundColor = "#eeeeee";
        break;
    }
  }
};
