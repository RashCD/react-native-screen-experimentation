const TARGET_HEIGHT = 200;
const BORDER_OFFSET = 5;

function makeSmaller(images, amounts) {
    const image = images;
    let amount = amounts;
  amount = amount || 1;
  const newHeight = image.height - amount;
  image.width *= (newHeight / image.height);
  image.height = newHeight;

  return image;
}

function getCumulativeWidth(images) {
  let width = 0;

  for (let i = 0; i < images.length; i++) {
    width += images[i].width;
  }

  width += (images.length - 1) * BORDER_OFFSET;

  return width;
}

function fitImagesInRow(image, maxWidth) {
    const images = image;
  while (getCumulativeWidth(images) > maxWidth) {
    for (let i = 0; i < images.length; i++) {
      images[i] = makeSmaller(images[i]);
    }
  }

  return images;
}

export function processImages(photos) {
  return photos.map(photo => {
    const photoz = photo;
    const aspectRatio = photoz.width / photoz.height;
    photoz.width = TARGET_HEIGHT * aspectRatio;
    photoz.height = TARGET_HEIGHT;
    return photoz;
  });
}

export function buildRows(processedImages, maxWidth) {
  let currentRow = 0;
  let currentWidth = 0;
  const rows = [];
  processedImages.forEach(image => {
    if (currentWidth >= maxWidth) {
      currentRow++;
      currentWidth = 0;
    }

    if (!rows[currentRow]) {
      rows[currentRow] = [];
    }

    rows[currentRow].push(image);
    currentWidth += image.width;
  });
  return rows;
}

export function normalizeRows(rows, maxWidth) {
    const row = rows;
  for (let i = 0; i < row.length; i++) {
    row[i] = fitImagesInRow(row[i], maxWidth);

    const difference = maxWidth - getCumulativeWidth(row[i]);
    const amountOfImages = row[i].length;

    if (amountOfImages > 1 && difference < 10) {
      const addToEach = difference / amountOfImages;
      for (let n = 0; n < row[i].length; n++) {
        row[i][n].width += addToEach;
      }
      row[i][row[i].length - 1].width +=
        maxWidth - getCumulativeWidth(row[i]);
    }
  }
  return row;
}
