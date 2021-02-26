let balls = document.getElementsByClassName('ball');
document.onmousemove = () => {
    let x = event.clientX * 100 / window.innerWidth + '%';
    let y = event.clientY * 100 / window.innerHeight + '%';
    //event.clientX => получить горизонтальные координаты мышки
    //window.innerWidth => получить ширину браузера и высоту

    for(let i = 0; i<2;i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = 'translate(-'+x+',-'+y+')';
        
    }
}