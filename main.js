window.onload = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const height = window.innerHeight > 0 ? window.innerHeight : screen.height;

  const canvas = document.querySelector("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  const controls = document.getElementById("controls");
  const joystick = document.getElementById("joystick");
  const stick = document.querySelector("#joystick > button");

  joystick.onpointermove = (e) => {
    const joystickInfo = joystick.getBoundingClientRect();
    const xOffset = Math.abs(joystickInfo.x + joystickInfo.width / 2 - e.clientX);
    const yOffset = Math.abs(joystickInfo.y + joystickInfo.height / 2 - e.clientY);

    if (e.target.tagName === "DIV") {
      stick.style.position = "absolute";
      stick.style.top = "50%";
      stick.style.left = "50%";
      return;
    }

    if (xOffset <= 30) {
      stick.style.left = e.clientX + "px";
    }

    if (yOffset <= 30) {
      stick.style.top = e.clientY + "px";
    }

    stick.style.position = "fixed";
  };

  joystick.onpointerup = (e) => {
    stick.style.position = "absolute";
    stick.style.top = "50%";
    stick.style.left = "50%";
  }

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

