const Jimp = require('jimp');
const { readFileSync } = require("fs");
const projects = JSON.parse(readFileSync('data/projects.json'));

function wrapText(context, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = Jimp.measureText(context, currentLine + " " + word);
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

async function generateOGImages() {
    const titleFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    const descriptionFont = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);

    for (const project of projects) {
        const template = await Jimp.read('public/others/template_og.png');
        const projectImage = await Jimp.read('public/' + project.image);

        projectImage.resize(350, 350);
        template.composite(projectImage, 790, 60);

        template.print(titleFont, 60, 60, project.name);

        const maxWidth = 720; // Largeur maximale pour la description
        const lines = wrapText(descriptionFont, project.description.slice(0, 400), maxWidth);

        if (lines.length > 0) {
            lines[lines.length - 1] += "...";
        }

        let yOffset = 115;
        lines.forEach(line => {
            template.print(descriptionFont, 60, yOffset, line, maxWidth);
            yOffset += Jimp.measureTextHeight(descriptionFont, line, maxWidth) + 5;
        });

        template.print(titleFont, 60, 500, "https://mondon.pro/"+project.slug, maxWidth);


        await template.writeAsync(`public/ogs/${project.image}`);
    }
}

generateOGImages().then(() => console.log('Images OG générées !'));
