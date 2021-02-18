// CAROUSEL
let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let carou = document.querySelector('.carou')

item1.addEventListener('click', () => {
    carou.style.transform = "translateX(0%)"
    carou.style.transition = "2s"
})

item2.addEventListener('click', () => {
    carou.style.transform = "translateX(-300px)"
    carou.style.transition = "2s"
})

item3.addEventListener('click', () => {
    carou.style.transform = "translateX(-600px)"
    carou.style.transition = "2s"
})

item4.addEventListener('click', () => {
    carou.style.transform = "translateX(-900px)"
    carou.style.transition = "2s"
})



// navbar scroll 



let header = document.getElementById('header')
let emporium2 = document.querySelector('#emporium2')
let myNav = document.querySelector('nav')
console.log(myNav);

let sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset>sticky) {
        header.classList.add("sticky")
        emporium2.style.display = "flex"
        emporium.style.display = "none"
        popUp.style = "z-index: 1000"
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

// CONNEXION / SUBSCRIPTION

    // CONNEXION

    
btnConnexion.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})   
btnSign.addEventListener('click', () => {
    popUp.style.display = "block"
    // btnSign.style.zIndex = "1"
    document.body.style.overflow='hidden'
    div1.style= "width: 100%; height: 100%;  background-color: rgba(0,0,0,.5); z-index: 999; position: fixed;"
    myNav.style.display = "none"
})
btnClose.addEventListener('click', () => {
    popUp.style.display = "none"
    document.body.style.overflow= null
    div1.style= " display:none "
    myNav.style.display = "flex"
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
