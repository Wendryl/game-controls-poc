const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
const height = window.innerHeight > 0 ? window.innerHeight : screen.height;

const canvas = document.querySelector("canvas");
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");
ctx.fillStyle = '#0022ff';
ctx.fillRect(0, 0, width, height);

const controls = document.getElementById("controls");
controls
