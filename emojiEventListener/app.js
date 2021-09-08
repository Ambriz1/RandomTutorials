const lion = document.querySelector('.closed');
const wolf = document.querySelector('.open');




lion.addEventListener('click', () => {
if(wolf.classList.contains('open')){
    wolf.classList.add('active');
    lion.classList.remove('active');    
}
});
wolf.addEventListener('click', () => {
    if(lion.classList.contains('closed')){
        lion.classList.add('active');
        wolf.classList.remove('active');    
    }
    });

