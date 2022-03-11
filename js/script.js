/*  
    Filtro Blanco y Negro
    Lic. en computación Héctor García
    Conceptos: Matrices - Arreglos unidimensionales - Condicionales
    Construcción de colores
*/

let img;
let threshold;

function preload() {
    img = loadImage("../img/calamardo.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    let imgX = width / 2 - img.width / 2;
    let imgY = height / 2 - img.height / 2;
    //Centro la imagen en el canvas
    image(img, imgX, imgY);
    threshold = 60;
    //Cargo los pixeles de la imagen en el array pixels
    loadPixels();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height * 4; y++) {
            //Determino la posición inicial del pixel a trabajar -Componente Red-
            let i = (x + y * width) * 4;
            //Construyo el color del pixel en cuestión -RGB-
            let color = (pixels[i], pixels[i + 1], pixels[i + 2]);
            if (brightness(color) < threshold) {
                pixels[i] = 0;
                pixels[i + 1] = 0;
                pixels[i + 2] = 0;
            } else {
                pixels[i] = 255;
                pixels[i + 1] = 255;
                pixels[i + 2] = 255;
            }
        }
    }
    //Actualizo los pixeles de la imagen cargada
    updatePixels();
}
