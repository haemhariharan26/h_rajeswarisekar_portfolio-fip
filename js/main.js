
function openIndex() {

        var url = 'index.html';

        setTimeout(function () {
                window.location.href = url;
        }, 200);
}

function openContact() {

        var url = 'contact-us.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);
}
function openGrapics() {
        var url = 'gallery.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);
}
function openVideos() {
        var url = 'videos.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork1() {
        var url = 'Bayengage.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork2() {
        var url = 'Dr.Nut Beer.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork3() {
        var url = 'Kavorca.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork4() {
        var url = 'Earbud.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork5() {
        var url = 'project5.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork6() {
        var url = 'project6.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork7() {
        var url = 'project7.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork8() {
        var url = 'project8.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork9() {
        var url = 'project9.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork10() {
        var url = 'project10.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}

function toggleMenu() {
        var navigation = document.getElementById('navigation');
        navigation.classList.toggle('show-menu');
}


window.onload = function () {


        gsap.registerPlugin(ScrollTrigger);
        gsap.from('#herosection', {
                opacity: 0,
                y: 100,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                        trigger: '#herosection',
                        start: 'top 100%',
                        end: 'bottom 80%',
                        scrub: true
                }
        });


        gsap.from('#logo img', {
                opacity: 0,
                duration: 1.5,
                y: -50,
                ease: 'power2.out',
                delay: 0.5
        });


};

 
var heroHeading = new SplitType("#heroHeading", { type: "chars" });
var heroSubHeading = new SplitType("#heroSubHeading", { type: "chars" });
var animationHeading = new SplitType("#animationHeading", { type: "chars" });

var chars = heroHeading.chars;  
var chars1 = heroSubHeading.chars;  
var chars2=animationHeading.chars

gsap.from(chars, {
    duration: .5,
    opacity: 0,
    y: 100,
    stagger: 0.05,
    ease: "power4.out",
    color: "#00FF00" // Green color
});
gsap.from(chars1, {
        duration: 1,
        opacity: 0,
        y: -100, //  
        stagger: 0.05,
        ease: "elastic.out(1, 0.3)",  
        color: "#FFC0CB" 
    });

gsap.from(chars2, {
        duration: 1,
        opacity: 1,
        y: 100,
        stagger: 0.150,
        ease: "power7.out",
        color: "#FFC0CB" // pink color
    });

    var animation3 = new SplitType("#animation3", { type: "chars" });

    var chars3 = animation3.chars;  

    gsap.from(chars3, {
        duration: 1,
        opacity: 0,
        scale: 0, 
        stagger: 0.09,
        ease: "back.out(10)", 
        color: "#FFC0CB" 
    });
    var animation4 = new SplitType("#animation4", { type: "chars" });

    var chars4 = animation4.chars;  


    gsap.from(chars4, {
        duration: 1,
        opacity: 0,
        y: -100,  
        stagger: 0.1,  
        ease: "power5.out",  
        color: "#000FFF",  
        textDecoration: "none",  
        fontWeight: "bold"  
    });
    
    gsap.to(".face-image", {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    gsap.to(".landing-image", {
        y: 50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
    
    gsap.to(".grid-con", {
        y: 50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
 
