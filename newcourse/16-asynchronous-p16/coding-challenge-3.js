'use strict';

//////////////////////////////////
// Coding Challenge #3

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only  the part where the promise is consumed).
Compare the two versions, think about the big differences, and see which one you like more. Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array
5. Add the 'parallel' class to all the images (it has some CSS styles)

TEST Data: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
To test, turn off the 'loadNPause'

*/
// Global Variable
const imagesContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('./img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('./img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};
// loadNPause();

// PART 2
const imgArray = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    // console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(imgArray);
