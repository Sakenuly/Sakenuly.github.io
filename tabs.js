const BUTTONS = document.querySelector('.buttons');
const screens = document.querySelectorAll('.left-content__top');

function asd(targetId, screenId, screen) {
   if (targetId === screenId) {
       screen.hidden = false
   }
}
function showScreen(e) {
    screens.forEach(screen => {
        screen.hidden = true
        asd(e.target.id, screen.id, screen)
    });
}
BUTTONS.addEventListener("click", showScreen);
export {showScreen, BUTTONS}