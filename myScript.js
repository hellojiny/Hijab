const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");


const section = document.querySelector("section");
const end =section.querySelector("h1");

const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
    duration : 16000,
    triggerElement : intro,
    triggerHook : 0
})

.setPin(intro)
.addTo(controller);

//title ani
const textAnim = TweenMax.fromTo(text,3,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration : 2500,
    triggerElement:intro,
    triggerHook:0
})
.setTween(textAnim)
.addTo(controller);





//videoAni
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e =>{
    scrollpos= e.scrollPos / 1000;
});

setInterval(()=> {
    delay += (scrollpos - delay)* accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
} ,33.3);


sound
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}







