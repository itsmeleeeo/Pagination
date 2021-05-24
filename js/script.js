// window.addEventListener('load', () => {
//     for(let i = 1; i < 6; i++) {
//         let btn = document.createElement('button');
//         btn.className = 'btnPagination';
//         btn.innerHTML = i;
//         document.querySelector('.pagination').appendChild(btn);
//     }
// });

let contactList = document.querySelectorAll('li');

window.addEventListener('load', () => {
    if(contactList.length > 10) {
        for(let i = 0; i < 10; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 10; j < 54; j++) {
            contactList[j].style.display = "none"
        }
    }
});

function pageOne() {
    if(contactList.length > 10) {
        for(let i = 0; i < 10; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 10; j < 54; j++) {
            contactList[j].style.display = "none"
        }
    }

}

function pageTwo() {
    if(contactList.length > 20) {
        for(let i = 10; i < 20; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 0; j < 10; j++) {
            contactList[j].style.display = "none"
        }

        for(let k = 20; k < 54; k++) {
            contactList[k].style.display = "none"
        }
    }

}

function pageThree() {
    if(contactList.length > 30) {
        for(let i = 20; i < 30; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 0; j < 20; j++) {
            contactList[j].style.display = "none"
        }

        for(let k = 30; k < 54; k++) {
            contactList[k].style.display = "none"
        }
    }

}


function pageFour() {
    if(contactList.length > 40) {
        for(let i = 30; i < 40; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 0; j < 30; j++) {
            contactList[j].style.display = "none"
        }

        for(let k = 40; k < 54; k++) {
            contactList[k].style.display = "none"
        }
    }

}


function pageFive() {
    if(contactList.length > 50) {
        for(let i = 40; i < 50; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 0; j < 40; j++) {
            contactList[j].style.display = "none"
        }

        for(let k = 50; k < 54; k++) {
            contactList[k].style.display = "none"
        }
    }

}


function pageSix() {
    if(contactList.length <= 54) {
        for(let i = 50; i < 54; i++) {
            contactList[i].style.display = "block"
        }

        for(let j = 0; j < 50; j++) {
            contactList[j].style.display = "none"
        }
    }

}



