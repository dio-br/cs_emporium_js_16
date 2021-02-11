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

let header = document.querySelector("#myHeader");
let emporium2 = document.querySelector('#emporium2');
let monTitre = document.querySelector('.myTitle');

console.log(header);
console.log(emporium2);
console.log(monTitre);

// renvoie la distance entre l'élément courant et le haut du nœud offsetParent.
let sticky = header.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    emporium2.style.display = "flex"
    monTitre.style.display = "none"
    } else {
    header.classList.remove("sticky");
    emporium2.style.display = "none"
    monTitre.style.display = "block"
    }
}
// exécute la fonction quand on scroll
window.onscroll = function() {myFunction()};

// ---------------------- MODE DARK AND WHITE -------------------------

let listNavbar = document.querySelectorAll('.nav-link');
let white = document.querySelector('#white');
let black = document.querySelector('#black');
let titreCarte = document.querySelector('#titreCarte');
let cartes = document.querySelectorAll('.card-title')
let titreFashion = document.querySelector('#fashion');


// DARK MODE
black.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    monTitre.style.color = "white";
    listNavbar.forEach(element => {
        element.style.color = "white"
    });
    titreCarte.style.color = "white";
    cartes.forEach(element => {
        element.style.color = "white"
    });
    titreFashion.style.color = "white"
})

// WHITE MODE 
white.addEventListener('click', () => {
    document.body.style.backgroundColor = "white";
    monTitre.style.color = "black";
    listNavbar.forEach(element => {
        element.style.color = "black"
    });
    titreCarte.style.color = "black";
    cartes.forEach(element => {
        element.style.color = "black"
    });
    titreFashion.style.color = "black"
})


// --------------------- MODAL -------------------------------
