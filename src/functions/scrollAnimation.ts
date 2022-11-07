export const scrollAnimation = (hiddenClass:string,visibleClass:string,reavealPoint:number) => {
    var hiddenElements = document.querySelectorAll(`.${hiddenClass}`);

    window.addEventListener("scroll", () => {
        for (let index = 0; index < hiddenElements.length; index++) {
          var windowHeight = window.innerHeight;
          var revealTop = hiddenElements[index].getBoundingClientRect().top;
  
          if (revealTop < windowHeight - reavealPoint) {
            hiddenElements[index].className = visibleClass;
          } else {
            hiddenElements[index].className = hiddenClass;
          }
        }
      });
}