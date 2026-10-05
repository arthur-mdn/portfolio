const { Jimp, loadFont, measureText, measureTextHeight } = require("jimp");
const { SANS_16_BLACK, SANS_32_BLACK } = require("jimp/fonts");
const { readFileSync } = require("fs");

const projects = JSON.parse(readFileSync("data/projects.json"));
const articles = JSON.parse(readFileSync("data/articles.json"));

function wrapText(font, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = measureText(font, currentLine + " " + word);
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
  const titleFont = await loadFont(SANS_32_BLACK);
  const descriptionFont = await loadFont(SANS_16_BLACK);

  for (const project of projects) {
    const template = await Jimp.read("public/others/template_og.png");
    const projectImage = await Jimp.read("public/" + project.image);

    projectImage.resize({ w: 350, h: 350 });
    template.composite(projectImage, 790, 60);

    template.print({ font: titleFont, x: 60, y: 60, text: project.name });

    const maxWidth = 720;
    const lines = wrapText(descriptionFont, project.description.slice(0, 400), maxWidth);

    if (lines.length > 0) {
      lines[lines.length - 1] += "...";
    }

    let yOffset = 115;
    for (const line of lines) {
      template.print({ font: descriptionFont, x: 60, y: yOffset, text: line, maxWidth });
      yOffset += measureTextHeight(descriptionFont, line, maxWidth) + 5;
    }

    template.print({
      font: titleFont,
      x: 60,
      y: 500,
      text: "https://mondon.pro/" + project.slug,
      maxWidth,
    });

    await template.write(`public/ogs/${project.image}`);
  }
}

async function generateBlogOGImages() {
  const titleFont = await loadFont(SANS_32_BLACK);
  const descriptionFont = await loadFont(SANS_16_BLACK);

  for (const article of articles) {
    const template = await Jimp.read("public/others/template_og.png");
    const articleImage = await Jimp.read("public/" + article.cover_image);

    articleImage.resize({ w: 350, h: 350 });
    template.composite(articleImage, 790, 60);

    template.print({ font: titleFont, x: 60, y: 60, text: article.title });

    const maxWidth = 720;
    const lines = wrapText(descriptionFont, article.excerpt.slice(0, 400), maxWidth);

    if (lines.length > 0) {
      lines[lines.length - 1] += "...";
    }

    let yOffset = 115;
    for (const line of lines) {
      template.print({ font: descriptionFont, x: 60, y: yOffset, text: line, maxWidth });
      yOffset += measureTextHeight(descriptionFont, line, maxWidth) + 5;
    }

    template.print({
      font: titleFont,
      x: 60,
      y: 500,
      text: "https://mondon.pro/blog/" + article.slug,
      maxWidth,
    });

    await template.write(`public/ogs/${article.cover_image}`);
  }
}

async function generateAllOGImages() {
  await generateOGImages();
  await generateBlogOGImages();
}

generateAllOGImages().then(() =>
  console.log("Images OG générées pour projets et articles de blog !")
);
