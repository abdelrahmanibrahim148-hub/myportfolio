
const but = document.querySelector(".yt");
const bf = document.querySelector(".fc");
const bn = document.querySelector(".ln");

const on = document.getElementById("one");
const tw = document.getElementById("two");
const th = document.getElementById("three");
but.onclick = function () {
    window.open("https://youtube.com/@abdelrahmanibrahim-i1c?si=7dq1Xqw2EPHeAo2");
};

bf.onclick = function(){
    window.open ("https://www.facebook.com/abdelrahman.ibrahim.907232");
}
bn.onclick = function(){
    window.open("https://www.linkedin.com/in/abdelrahman-ibrahim-a804003a2/?trk=public-profile-join-page");
}





on.onclick = function(){
    window.open("https://abdelrahmanibrahim148-hub.github.io/To-Do-list2/");
}

tw.onclick = function(){
    window.open("https://abdelrahmanibrahim148-hub.github.io/3dproject3/");
}

th.onclick = function(){
    window.open("https://abdelrahmanibrahim192-cmd.github.io/megabookstore/");
}

function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}








