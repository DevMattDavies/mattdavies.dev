export const scrollProjectIntoView = () => {
  const element = document.getElementById("backBtn");
  setTimeout(() => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  }, 3000);
};
