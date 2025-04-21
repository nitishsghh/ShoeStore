const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  favicon16: 16,
  favicon32: 32,
  apple180: 180,
  android192: 192,
  android512: 512
};

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/shoe-icon.svg');
  const publicDir = path.join(__dirname, '../public');

  // Read the SVG file
  const svgBuffer = fs.readFileSync(inputSvg);

  // Generate different sizes
  for (const [name, size] of Object.entries(sizes)) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `${name}.png`));
  }

  // Create ICO file (16x16 and 32x32)
  const favicon16 = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();

  const favicon32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  // Write the buffers to files
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), favicon16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), favicon32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), 
    await sharp(svgBuffer).resize(180, 180).png().toBuffer()
  );
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'),
    await sharp(svgBuffer).resize(192, 192).png().toBuffer()
  );
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'),
    await sharp(svgBuffer).resize(512, 512).png().toBuffer()
  );
}

generateFavicons().catch(console.error); 