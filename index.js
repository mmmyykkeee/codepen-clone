const navbarColor = document.querySelector(".navbar");
const logoColor = document.querySelector(".logo");
document.querySelector('.pen').style.display = 'none'
document.querySelector('.vue-pen').style.display = 'none'
document.querySelector('.flutter-pen').style.display = 'none'
document.querySelector(".main-pen1").style.display = 'none'
document.querySelector(".template1").style.display = 'none'
document.querySelector(".description").style.display = 'none'

logoColor.style.color = "#fff";
navbarColor.style.backgroundColor = "#1E1F26";


function displayPens(){
document.querySelector('.pen').style.display = 'block'
document.querySelector('.vue-pen').style.display = 'block'
document.querySelector('.flutter-pen').style.display = 'block'
document.querySelector(".main-pen1").style.display = 'block'
document.querySelector(".main-pen").style.display = 'none'
document.querySelector(".pen").style.transitionDuration = '20s'

}

function displayPens1(){
document.querySelector('.pen').style.display = 'none'
document.querySelector('.vue-pen').style.display = 'none'
document.querySelector('.flutter-pen').style.display = 'none'
document.querySelector(".main-pen1").style.display = 'none'
document.querySelector(".main-pen").style.display = 'block'
}

function displayTemplate(){
    document.querySelector(".template").style.display= 'none';
    document.querySelector(".template1").style.display= 'block';
    document.querySelector(".description").style.display = 'block'

}
function displayTemplate1(){
    document.querySelector(".template").style.display= 'block';
    document.querySelector(".template1").style.display= 'none';
document.querySelector(".description").style.display = 'none'


}