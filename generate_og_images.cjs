const { Jimp, loadFont, measureText, measureTextHeight } = require("jimp");
const { SANS_16_BLACK, SANS_32_BLACK } = require("jimp/fonts");
const { readFileSync, mkdirSync, existsSync } = require("fs");
const { execFileSync } = require("child_process");
const { tmpdir } = require("os");
const path = require("path");

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

function ogRelativePath(imagePath) {
  return imagePath.replace(/\.webp$/i, ".png");
}

async function readImageForJimp(publicRelativePath) {
  const absolute = path.join("public", publicRelativePath);
  if (!/\.webp$/i.test(publicRelativePath)) {
    return Jimp.read(absolute);
  }

  const tempPng = path.join(
    tmpdir(),
    `og-src-${path.basename(publicRelativePath, path.extname(publicRelativePath))}-${Date.now()}.png`
  );
  execFileSync("sips", ["-s", "format", "png", absolute, "--out", tempPng]);
  const image = await Jimp.read(tempPng);
  try {
    require("fs").unlinkSync(tempPng);
  } catch {
    // ignore cleanup errors
  }
  return image;
}

async function generateOGImages() {
  const titleFont = await loadFont(SANS_32_BLACK);
  const descriptionFont = await loadFont(SANS_16_BLACK);

  for (const project of projects) {
    const template = await Jimp.read("public/others/template_og.png");
    const projectImage = await readImageForJimp(project.image);

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

    const outputRel = ogRelativePath(project.image);
    const outputAbs = path.join("public/ogs", outputRel);
    mkdirSync(path.dirname(outputAbs), { recursive: true });
    await template.write(outputAbs);
  }
}

async function generateBlogOGImages() {
  const titleFont = await loadFont(SANS_32_BLACK);
  const descriptionFont = await loadFont(SANS_16_BLACK);

  for (const article of articles) {
    const template = await Jimp.read("public/others/template_og.png");
    const articleImage = await readImageForJimp(article.cover_image);

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

    const outputRel = ogRelativePath(article.cover_image);
    const outputAbs = path.join("public/ogs", outputRel);
    mkdirSync(path.dirname(outputAbs), { recursive: true });
    await template.write(outputAbs);
  }
}

async function generateAllOGImages() {
  await generateOGImages();
  await generateBlogOGImages();
}

generateAllOGImages().then(() =>
  console.log("Images OG générées pour projets et articles de blog !")
);
