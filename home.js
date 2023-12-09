var img = document.getElementById("bg_image");
// var image = ['assets/bgs/home_bg1.jpg','assets/bgs/R.png','assets/bgs/bitumen-production.png'];

// var i = 0;
// function changeImage(i){
//         // console.log("image is here");
//         img.src = image[i];
//         i++;
//         if(i==image.length) i=0;
        
        
//         setTimeout(changeImage,3000,i);
//         // img.src = image[0];
//     }
// changeImage(i);
// console.log("image is here");

let currentImageIndex = 0;
const images = document.querySelectorAll('.eagle__home-img img');

function changeImage() {
  const totalImages = images.length;
  const previousIndex = currentImageIndex;
  currentImageIndex = (currentImageIndex + 1) % totalImages;

  images[previousIndex].style.opacity = '0';
  images[currentImageIndex].style.opacity = '1';
}
const interval = setInterval(changeImage, 3000);
