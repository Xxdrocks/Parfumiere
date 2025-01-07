const versace = document.getElementById('versace');
const subject = document.getElementById('subject')


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    
   
    versace.style.transform = 'translate(0, -'+value+'px)';
    
});
