var images = [
    'im01.jpg',
    'im02.jpg',
    'im03.jpg',
    'im04.jpg',
    'im05.jpg',
]
var cpt = 0

function change() {
    var img = document
        .getElementById('img-slider')
    img.setAttribute('src', 'images/' + images[cpt])
}

setInterval(() => {
    change();
    cpt++;
    if (cpt > 4) cpt = 0;
}, 2000)