const btn1 = document.querySelector('.b1');
const btn2 = document.querySelector('.b2');
const btn3 = document.querySelector('.b3');

btn1.addEventListener('click', function(){
    document.querySelector(".p1").classList.add("vis");
    document.querySelector(".p2").classList.add("hidden");
    document.querySelector(".p3").classList.add("hidden");

});

btn2.addEventListener('click', function(){
    document.querySelector(".p2").classList.add("vis");
    document.querySelector(".p1").classList.add("hidden");
    document.querySelector(".p3").classList.add("hidden");
});

btn3.addEventListener('click', function(){
    document.querySelector(".p3").classList.add("vis");
    document.querySelector(".p1").classList.add("hidden");
    document.querySelector(".p2").classList.add("hidden");
});
