import fs from "fs";
import path from "path";

const clientName = process.argv[2];

if (!clientName) {
  console.log("Usage: node build.js client-a");
  process.exit(1);
}

const configPath = `./clients/${clientName}.json`;

if (!fs.existsSync(configPath)) {
  console.log("Client config not found");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath));

fs.writeFileSync(
  "../web-panel/.env.production",
  `
NEXT_PUBLIC_BRAND_COLOR=${config.brandColor}
NEXT_PUBLIC_SECONDARY_COLOR=${config.secondaryColor}
NEXT_PUBLIC_CLIENT_NAME="${config.name}"
`
);

console.log(`White-label build prepared for ${config.name}`);
