window.onload = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const height = window.innerHeight > 0 ? window.innerHeight : screen.height;

  const canvas = document.querySelector("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // TODO - Add full-screen button toggle
  /** document.addEventListener(
  "keydown",
  e => {
    if (e.key === "Enter") {
      document.documentElement.requestFullscreen();
    }
  },
  false
); **/
}

