var body = document.getElementsByTagName('body')[0];
body.addEventListener('click', function(e){
    let point = document.createElement('div');
    point.classList.add('point');
    point.style.top = `${e.y}px`;
    point.style.left = `${e.x}px`;
    body.appendChild(point);
});