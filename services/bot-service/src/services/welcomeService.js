const { createCanvas, loadImage } = require('canvas');

async function generateWelcomeImage(member) {
  const canvas = createCanvas(800, 250);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#1e3a8a'; // Blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f97316'; // Orange
  ctx.font = '40px Sans';
  ctx.fillText(`Welcome ${member.user.username}`, 250, 130);

  return canvas.toBuffer();
}

module.exports = { generateWelcomeImage };
