const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('active'); 
    } 
});
