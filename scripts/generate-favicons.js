const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  favicon16: 16,
  favicon32: 32,
  favicon192: 192,
  favicon512: 512,
  appleTouchIcon: 180
};

async function generateFavicons() {
  const inputSvg = path.join(process.cwd(), 'public', 'shoe-icon.svg');
  const publicDir = path.join(process.cwd(), 'public');

  try {
    const svgBuffer = await fs.readFile(inputSvg);

    // Generate PNG favicons
    await Promise.all([
      sharp(svgBuffer)
        .resize(sizes.favicon16, sizes.favicon16)
        .png()
        .toFile(path.join(publicDir, 'favicon-16x16.png')),
      sharp(svgBuffer)
        .resize(sizes.favicon32, sizes.favicon32)
        .png()
        .toFile(path.join(publicDir, 'favicon-32x32.png')),
      sharp(svgBuffer)
        .resize(sizes.favicon192, sizes.favicon192)
        .png()
        .toFile(path.join(publicDir, 'favicon-192x192.png')),
      sharp(svgBuffer)
        .resize(sizes.favicon512, sizes.favicon512)
        .png()
        .toFile(path.join(publicDir, 'favicon-512x512.png')),
      sharp(svgBuffer)
        .resize(sizes.appleTouchIcon, sizes.appleTouchIcon)
        .png()
        .toFile(path.join(publicDir, 'apple-touch-icon.png')),
    ]);

    // Generate ICO file (contains 16x16 and 32x32)
    const ico16 = await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    const ico32 = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();

    // Use the first PNG as favicon.ico (since we don't have direct ICO support)
    await fs.writeFile(path.join(publicDir, 'favicon.ico'), ico16);

    console.log('Successfully generated all favicon files!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    throw error;
  }
}

generateFavicons().catch(console.error); 