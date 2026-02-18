import { createCanvas, loadImage } from "canvas";

export async function generateWelcomeImage(member) {
  const canvas = createCanvas(1024, 450);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0F172A";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#F97316";
  ctx.font = "bold 60px Sans";
  ctx.fillText("WELCOME", 350, 150);

  ctx.font = "40px Sans";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(member.user.username, 350, 230);

  const avatar = await loadImage(
    member.user.displayAvatarURL({ extension: "png" })
  );

  ctx.beginPath();
  ctx.arc(200, 225, 120, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 80, 105, 240, 240);

  return canvas.toBuffer();
}
