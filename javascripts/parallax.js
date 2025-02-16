const versace = document.getElementById('versace');
const subject = document.getElementById('subject');
const layer2 = document.getElementById('layer2');
const layer1 = document.getElementById('layer1');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    
   
    versace.style.transform = 'translate(0, -'+value+'px)';

    layer1.style.transform = 'translate(0, -'+ (value * 0.8) +'px)';

    layer2.style.transform = 'translate(0, -'+ (value * 1.1) +'px)';
});
