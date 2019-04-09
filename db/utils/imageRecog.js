const getPixels = require("get-pixels");
const sizeOf = require('image-size');

// const img = "https://upload.wikimedia.org/wikipedia/commons/8/8a/LGBT_Rainbow_Flag.png"

exports.analyzeImg = async (imgLink) => {
  return getPixels(imgLink, await function (err, pixels) {
    if (err) {
      console.log("Bad image path")
      return
    }
    const copyPixelArr = [...pixels.data]
    const gridArray = {
      row1: [[], [], []],
      row2: [[], [], []],
      row3: [[], [], []]
    }

    // const dimensions = sizeOf('./ringworm2.png');
    // console.log(dimensions.width, dimensions.height)
    // const pixelArr = [];

    // for (let i = 0; i < copyPixelArr.length; i + 4) {
    //   pixelArr.push(copyPixelArr.slice(i, i + 4))
    // }
    // console.log(pixelArr);

    const rgbExtraction = (grid) => {
      const allRed = [];
      const allGreen = [];
      const allBlue = [];
      const allWhite = [];

      for (let i = 0; i < grid.length; i += 4) {
        allRed.push(grid[i])
      }
      for (let i = 1; i < grid.length; i += 4) {
        allGreen.push(grid[i])
      }
      for (let i = 2; i < grid.length; i += 4) {
        allBlue.push(grid[i])
      }
      for (let i = 3; i < grid.length; i += 4) {
        allWhite.push(grid[i])
      }

      const avgRed = allRed.reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0) / allRed.length;
      const avgGreen = allGreen.reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0) / allGreen.length;
      const avgBlue = allBlue.reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0) / allBlue.length;
      const avgWhite = allWhite.reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0) / allWhite.length;

      return {
        r: avgRed, g: avgGreen, b: avgBlue, w: avgWhite
      }
    }
    const data = await rgbExtraction(copyPixelArr);
    return data;
  })
  // console.log(getPixels(imgLink))
}