/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector('#canvas')
const width = document.body.offsetWidth
const height = document.body.offsetHeight
canvas.width = width - 100
canvas.height = height - 200

const ctx = canvas.getContext('2d')


ctx.beginPath();
ctx.arc(75, 85, 10, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(125, 85);
ctx.arc(75, 85, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.strokeStyle = 'red'
ctx.stroke();