let B1 = document.getElementById("b1")
let B2 = document.getElementById("b2")
let B3 = document.getElementById("b3")
let B4 = document.getElementById("b4")
let B5 = document.getElementById("b5")
let B6 = document.getElementById("b6")
let B7 = document.getElementById("b7")
let B8 = document.getElementById("b8")
let OP

function area(){
    let A1 = document.getElementById("A1").value
    A1 = parseInt(A1)
    OP = A1*A1
    alert(OP)
}
function perimetro(){
    let P1 = document.getElementById("P1").value
    P1 = parseInt(P1)
    OP = P1*4
    alert(OP)
}
function area2(){
    let ar = document.getElementById("ar").value
    ar = parseInt(ar)
    let ar2 = document.getElementById("ar2").value
    ar2 = parseInt(ar2)
    OP = (ar*ar2)/2
    alert(OP)
}
function perimetro2(){
    let pr = document.getElementById("pr").value
    pr = parseInt(pr)
    let pr2 = document.getElementById("pr2").value
    pr2 = parseInt(pr2)
    let pr3 = document.getElementById("pr3").value
    pr3 = parseInt(pr3)
    OP = pr+pr2+pr3
    alert(OP)
}
function area3(){
    let AE = document.getElementById("ae").value
    AE = parseInt(AE)
    let AE2 = document.getElementById("ae2").value
    AE2 = parseInt(AE2)
    OP = AE*AE2
    alert(OP)
}
function perimetro3(){
    let PM = document.getElementById("PM").value
    PM = parseInt(PM)
    let PM2 = document.getElementById("PM2").value
    PM2 = parseInt(PM2)
    OP = (PM*2)+(PM2*2)
    alert(OP)
}
function area4(){
    let Aa = document.getElementById("Aa").value
    Aa = parseInt(Aa)
    OP = (Aa*Aa)*3.14
    alert(OP)
}
function perimetro4(){
    let PI = document.getElementById("PI").value
    PI = parseInt(PI)
    OP = 2*3.14*PI
    alert(OP)
}
B2.addEventListener('click',area)
B1.addEventListener('click',perimetro)
B4.addEventListener('click',area2)
B3.addEventListener('click',perimetro2)
B6.addEventListener('click',area3)
B5.addEventListener('click',perimetro3)
B8.addEventListener('click',area4)
B7.addEventListener('click',perimetro4)

