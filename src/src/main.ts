import "sanitize.css";
import "./style.css";

window.addEventListener("load", () => {
  let width: number;
  let heigth: number;

  const init = () => {
    width = window.innerWidth;
    heigth = window.innerHeight;

    const windowResize = () => {
      width = window.innerWidth;
      heigth = window.innerHeight;
      console.log(width, heigth);
    };

    window.addEventListener("resize", windowResize, true);

    const fullScreen = (event: KeyboardEvent) => {
      if (event.key === "f" || event.key === "F") {
        const element = document.body;
        element.requestFullscreen();
      }
    };
    // 全画面表示イベント
    window.addEventListener("keydown", fullScreen, true);
  };

  const main = () => {
    console.log("Hello World");
  };

  init();
  main();
});
