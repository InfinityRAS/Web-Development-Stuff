let btn = document.getElementById('toggle-hide');
let contnr = document.querySelector('.container');
let totop = document.getElementById('totop');

btn.addEventListener('click', ()=>{
    if (contnr.style.display !='none') {
        contnr.style.display = 'none';
        totop.style.display = 'none';
        btn.style.top = '160px';
        btn.style.right = '197px';
    }
    
    else{
        btn.style.right = '197px';
        btn.style.top = '137px';
        contnr.style.display = 'block';
        totop.style.display = 'block';
    }
})