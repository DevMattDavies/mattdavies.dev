export const scrollProjectIntoView = () => {
  const element = document.getElementById("backBtn");
  setTimeout(() => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, 3000);
};
