let span = document.getElementsByClassName('left');
let span2 = document.getElementsByClassName('right');
let div = document.getElementsByClassName('oui');
var l = 0;


let maCarou = () => {
    l++;
    for(var i of div)
    {
        if (l==0) {i.style.left = '0px';
        }
        if (l==1) {i.style.left = '-800px';
        }
        if (l==2) {i.style.left = '-1600px';
        }
        if (l==3) {i.style.left = '0px';
        }
        // if (l==4) {i.style.left = '-2960px';
        // }
        if (l>3) {l=0}
    }
}


let maCaro = () => {
    l--;
    for(var i of div)
    {
        if (l==0) {i.style.left = '0px';
        }
        if (l==1) {i.style.left = '-800px';
        }
        if (l==2) {i.style.left = '-1600px';
        }
        if (l==3) {i.style.left = '-2220px';
        }
        // if (l==4) {i.style.left = '-2960px';
        // }
        if (l<0) {l=0}
    }
}
span[0].addEventListener('click',maCaro);
span2[0].addEventListener('click',maCarou);



// navbar scroll 



let header = document.getElementById('header')
let emporium2 = document.querySelector('#emporium2')

let sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset>sticky) {
        header.classList.add("sticky")
        emporium2.style.display = "flex"
        emporium.style.display = "none"
    } else {
        header.classList.remove("sticky")
        emporium2.style.display = "none"
        emporium.style.display = "block"
    }
}

window.onscroll = function(){myFunction()}

// ---------------------- MODE DARK AND WHITE -------------------------

let dark = document.querySelector(".black")
let light = document.querySelector(".blanc")
let emporium = document.querySelector(".empo")
let navbar = document.querySelectorAll("#monA")
let recents = document.getElementById("titreCarte")
let pararecents = document.querySelectorAll("#fashion")
let discover = document.querySelector(".Check")
console.log(dark);
console.log(light)

     // DARK MODE
    dark.addEventListener('click', () => {
        document.body.style.backgroundColor = "black";
        emporium.style.color = "white";
        navbar.forEach(element => {
            element.style.color = "white"
        });
        recents.style.color = "white";
        pararecents.forEach(element => {
            element.style.color = "white"
        });
        discover.style.color = "white"
        // pararecents.style.color = "white";
        // header.style.color = "black"
        header.style.backgroundColor = "black"
        emporium2.style.color ='white'
    })
    
            // LIGHT MODE
    light.addEventListener('click', () => {
        document.body.style.backgroundColor = "white"
        emporium.style.color = "black"
        navbar.forEach(element => {
            element.style.color = "black"
        });
        recents.style.color = "black";
        pararecents.forEach(element => {
            element.style.color = "black"
        });
        discover.style.color = "black"
        header.style.backgroundColor = "white"
        emporium2.style.color ='black'
    })

    console.log(emporium2);
// --------------------- MODAL -------------------------------

// CONNEXION / SUBSCRIPTION

let connexion = document.querySelector('#modale1')
let inscription = document.querySelector('#modale2')
let btnConnexion = document.querySelector('.connexion')
let btnSubs = document.querySelector('.inscription')
let btnSign = document.querySelector('.sign')
let popUp = document.querySelector('#connexion')
let btnClose = document.querySelector('.fermer')

    // CONNEXION

btnConnexion.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})   
btnSign.addEventListener('click', () => {
    popUp.style.display = "block"
})
btnClose.addEventListener('click', () => {
    popUp.style.display = "none"
})
btnSign.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})

btnSubs.addEventListener('click', () => {
    if (inscription.classList.contains('d-none')) {
        inscription.classList.remove('d-none')
    }
    connexion.classList.add('d-none')
})