
const numOfImages = 10;

const images = Array.from( {length:numOfImages}, ( src, i ) => `./content/gallery/${i + 1}.jpg` )

console.log( images );

const gallery = document.querySelector(".gallery__pictures")
images.forEach( ( src ) => {

    const pic = document.createElement('img');
    pic.src = src;
    pic.style.width = "50%"
    pic.style.height = "115px"
    gallery.appendChild( pic );

} )

console.log(gallery);