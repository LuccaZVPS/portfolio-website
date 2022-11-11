export const scrollAnimation = (hiddenClass:string,visibleClass:string,reavealPoint:number) => {
    var hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
    if (window.innerWidth < 1600) {
      reavealPoint = reavealPoint / 1.5
    }
    window.addEventListener("scroll", () => {
        for (let index = 0; index < hiddenElements.length; index++) {
          var windowHeight = window.innerHeight;
          var revealTop = hiddenElements[index].getBoundingClientRect().top;
  
          if (revealTop < windowHeight - reavealPoint) {
            hiddenElements[index].classList.remove(hiddenClass);

            hiddenElements[index].classList.add(visibleClass);
          } else {
            hiddenElements[index].classList.add(hiddenClass) ;
            hiddenElements[index].classList.remove(visibleClass);

          }
        }
      });
}