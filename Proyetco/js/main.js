// Evento para cambiar los colores de todos los frames al mismo tiempo  ------------------------------------
const All_Frames_Colors = document.getElementById('All-Frames-Colors');
const image_Frame = document.getElementsByClassName('image-Frame');
const Frame1 = document.getElementById('Frame1');
const Frame2 = document.getElementById('Frame2');
const Frame3 = document.getElementById('Frame3');
const Frame4 = document.getElementById('Frame4');
const Frame5 = document.getElementById('Frame5');
const Frame6 = document.getElementById('Frame6');
const span = document.getElementsByClassName('span');

All_Frames_Colors.addEventListener('change', function(e){
    RemoveColorsAll();
    AddColorsAll(All_Frames_Colors.value);
});
const frameN = document.getElementsByClassName('frameN');
function RemoveColorsAll() {
    let colors = 6;
    // Eliminando el color a todos los selects (All_Frames_Colors, frameN)-----------------------------------------------------------------
    All_Frames_Colors.classList.remove('colors0', 'colors1', 'colors2', 'colors3', 'colors4', 'colors5');
    for (let x = 0; x < frameN.length; x++) {
        for (let y = 0; y < colors; y++) {
            frameN[x].classList.remove('colors' + y);
            // Eliminando el color a todos los frames ------------------------------------------------------------------
            image_Frame[x].classList.remove('colors' + y);
        }
    }
    for (let y = 0; y < colors; y++) {
        span[0].classList.remove('colors' + y + 'Aux');
        span[1].classList.remove('colors' + y + 'Aux');
        span[2].classList.remove('colors' + y + 'Btn');
        span[3].classList.remove('colors' + y + 'Btn');
        span[4].classList.remove('colors' + y + 'Btn');
        span[5].classList.remove('colors' + y + 'Aux');
    }
}
function AddColorsAll(color) {
    // Añadiendo los colores a todos los selects -----------
    All_Frames_Colors.classList.add('colors' + color);
    All_Frames_Colors.value = color;
    for (let x = 0; x < frameN.length; x++) {
        frameN[x].classList.add('colors' + color);
        // Actualizando los valores de cada select -------------
        frameN[x].value = color;
        // Añadiento los colores a cada frame -------------------
        image_Frame[x].classList.add('colors' + color);
    }
    span[0].classList.add('colors' + color + 'Aux');
    span[1].classList.add('colors' + color + 'Aux');
    span[2].classList.add('colors' + color + 'Btn');
    span[3].classList.add('colors' + color + 'Btn');
    span[4].classList.add('colors' + color + 'Btn');
    span[5].classList.add('colors' + color + 'Aux');
}

//Evento para cambiar el color del frame especifico -----------------------------
// const frameN = document.getElementsByClassName('frameN');
for (let x = 0; x < frameN.length; x++) {
    frameN[x].addEventListener('change', function(e){
        let frameColorN = "FrameN_" + frameN[x].id.slice(5);
        let FrameCN = document.getElementById(frameColorN);

        frameN[x].classList.remove('colors0', 'colors1', 'colors2', 'colors3', 'colors4', 'colors5');
        frameN[x].classList.add('colors'+ frameN[x].value);

        FrameCN.classList.remove('colors0', 'colors1', 'colors2', 'colors3', 'colors4', 'colors5');
        FrameCN.classList.add('colors'+ frameN[x].value);

        if (x === 0 || x === 1 || x === 5) {
            span[x].classList.remove('colors0Aux', 'colors1Aux', 'colors2Aux', 'colors3Aux', 'colors4Aux', 'colors5Aux');
            span[x].classList.add('colors' + frameN[x].value + 'Aux');
        } else {
            span[x].classList.remove('colors0Btn', 'colors1Btn', 'colors2Btn', 'colors3Btn', 'colors4Btn', 'colors5Btn');
            span[x].classList.add('colors' + frameN[x].value + 'Btn');
        }
        
    });
}