let itemsPerPage = 10;

document.addEventListener('DOMContentLoaded', () => {
    let contactList = Array.from(document.querySelectorAll('.contact-item'));
    for(let i = 0; i < contactList.length; i++) {
        (contactList[i] > itemsPerPage) ? (contactList[i].style.display = 'block') : (contactList[i].style.display = 'none');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    for(let i = 1; i < 7; i++) {
        let btn = document.createElement('button');
        btn.className = 'btnPagination';
        btn.innerHTML = i;
        document.querySelector('.pagination').appendChild(btn);
    }
});