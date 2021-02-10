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
        // if (l==2) {i.style.left = '-1480px';
        // }
        // if (l==3) {i.style.left = '-2220px';
        // }
        // if (l==4) {i.style.left = '-2960px';
        // }
        if (l>1) {l=1}
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
        // if (l==2) {i.style.left = '-1480px';
        // }
        // if (l==3) {i.style.left = '-2220px';
        // }
        // if (l==4) {i.style.left = '-2960px';
        // }
        if (l<0) {l=0}
    }
}
span[0].addEventListener('click',maCaro);
span2[0].addEventListener('click',maCarou);

