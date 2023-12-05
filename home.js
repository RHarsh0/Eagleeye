var img = document.getElementById("bg_image");
var image = ['assets/bgs/home_bg1.jpg','assets/bgs/R.png','assets/bgs/bitumen-production.png'];

var i = 0;
function changeImage(i){
        console.log("image is here");
        img.src = image[i];
        i++;
        if(i==image.length) i=0;
        
        
        setTimeout(changeImage,3000,i);
        // img.src = image[0];
    }
changeImage(i);
console.log("image is here");