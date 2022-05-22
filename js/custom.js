// all profile images set in arrays
let images1 = ['./images/adam/adam-2.jpg', './images/adam/adam-3.jpg', './images/adam/adam-1.jpg'];
let images2 = ['./images/ciara/ciara-2.jpg', './images/ciara/ciara-3.jpg', './images/ciara/ciara-1.jpg'];
let images3 = ['./images/raivis/raivis-2.jpg', './images/raivis/raivis-3.jpg', './images/raivis/raivis-1.jpg'];
let images4 = ['./images/sawyer/sawyer-2.jpg', './images/sawyer/sawyer-3.jpg', './images/sawyer/sawyer-1.jpg'];
let images5 = ['./images/nazia/nazia-2.jpg', './images/nazia/nazia-3.jpg', './images/nazia/nazia-1.jpg'];

// images container
let index = 0;
const imgElement1 = document.querySelector('.mainPhoto1');
const imgElement2 = document.querySelector('.mainPhoto2');
const imgElement3 = document.querySelector('.mainPhoto3');
const imgElement4 = document.querySelector('.mainPhoto4');
const imgElement5 = document.querySelector('.mainPhoto5');

// function to change images url
function change1() {
    imgElement1.src = images1[index];
    index > 1 ? index = 0 : index++;
}
function change2() {
    imgElement2.src = images2[index];
    index > 1 ? index = 0 : index++;
}
function change3() {
    imgElement3.src = images3[index];
    index > 1 ? index = 0 : index++;
}
function change4() {
    imgElement4.src = images4[index];
    index > 1 ? index = 0 : index++;
}
function change5() {
    imgElement5.src = images5[index];
    index > 1 ? index = 0 : index++;
}

// onload change the images after every 3 seconds
window.onload = function () {
    setInterval(change1, 3000);
    setInterval(change2, 3200);
    setInterval(change3, 2900);
    setInterval(change4, 2800);
    setInterval(change5, 2600);
};