const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define directories to scan for images
const targetDirs = [
    __dirname, 
    path.join(__dirname, 'public')
];

async function optimizeImages() {
    console.log('Starting image optimization...');
    
    for (const dir of targetDirs) {
        if (!fs.existsSync(dir)) {
            continue;
        }

        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            
            // Filter only for .jpg, .jpeg, .png files
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                const inputPath = path.join(dir, file);
                const basename = path.basename(file, ext);
                const outputPath = path.join(dir, `${basename}.webp`);

                try {
                    // Convert to WebP with 80% quality (high compression, minimal loss)
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);
                    console.log(`[Success] Converted: ${file} -> ${basename}.webp`);
                } catch (err) {
                    console.error(`[Error] Processing ${file}:`, err.message);
                }
            }
        }
    }
    console.log('Image optimization complete.');
}

optimizeImages();
