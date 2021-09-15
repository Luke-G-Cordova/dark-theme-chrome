

let div = document.createElement('div');
div.style.width = '100vw';
div.style.height = '100vh';
div.style.backgroundColor = 'black';
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.style.zIndex = '100000';
div = document.childNodes[1].appendChild(div);
console.log(div);

window.addEventListener('load', () => {
    let elems = document.querySelectorAll('*');

    let brgb, crgb;
    let badd = 250, cadd = 100;
    elems.forEach(elem => {
        brgb = window.getComputedStyle(elem).backgroundColor;
        brgb = brgb.split(/[()]/)[1].split(', ');
        brgb[0] = parseInt(brgb[0]);
        brgb[1] = parseInt(brgb[1]);
        brgb[2] = parseInt(brgb[2]);
        if((brgb[0]>160 || brgb[1]>160 || brgb[2]>160)){
            elem.style.backgroundColor = 
            `rgb(${brgb[0]-badd>=0?brgb[0]-badd:0},${brgb[1]-badd>=0?brgb[1]-badd:0},${brgb[2]-badd>=0?brgb[2]-badd:0})`;
            
        }
        crgb = window.getComputedStyle(elem).color;
        crgb = crgb.split(/[()]/)[1].split(', ');
        crgb[0] = parseInt(crgb[0]);
        crgb[1] = parseInt(crgb[1]);
        crgb[2] = parseInt(crgb[2]);
        if((crgb[0]<80 || crgb[1]<80 || crgb[2]<80)){
            elem.style.color = 
            `rgb(${crgb[0]+cadd<=255?crgb[0]+cadd:255},${crgb[1]+cadd<=255?crgb[1]+cadd:255},${crgb[2]+cadd<=255?crgb[2]+cadd:255})`;
            
        }
    
    });

    document.childNodes[1].childNodes[0].remove();
});





