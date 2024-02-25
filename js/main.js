
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
function opencasestudy() {
        var url = 'casestudy.html';

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
        var url = 'Anti-Smoking Advertising Campaign.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork6() {
        var url = 'Reebok EasyTone Shoe Advertising Campaign.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork7() {
        var url = 'Ginga Fleets ( Logistics Company ).html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork8() {
        var url = 'Bayengage E-store website design.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork9() {
        var url = 'PSR silks.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMyWork10() {
        var url = 'Cybernexa.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}

function openMycasestudy1() {
        var url = 'casestudy1.html';

        document.body.classList.add('fadeOut');

        setTimeout(function () {
                window.location.href = url;
        }, 200);

}
function openMycasestudy2() {
        var url = 'casestudy2.html';

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
var chars2 = animationHeading.chars

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

gsap.to(".col-span-ful", {
        y: 50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
});

function showTooltip(event) {
        var imgSrc = event.target.src;
        var tooltip = document.querySelector('#tooltip');
        var tooltipImage = document.querySelector('#tooltipImage');
    
        // Set the source of the tooltip image
        tooltipImage.src = imgSrc;
    
        // Position the tooltip next to the hovered image
        var boundingRect = event.target.getBoundingClientRect();
        tooltip.style.top = boundingRect.top + 'px';
        tooltip.style.left = (boundingRect.right + 10) + 'px'; // Adjust the distance from the image as needed
    
        // Display the tooltip
        tooltip.style.display = 'block';
    }
    
    function hideTooltip() {
        document.querySelector('#tooltip').style.display = 'none';
    }
    function showPreview(imgId) {
        var previewId = "preview" + imgId.slice(-1);
        var preview = document.getElementById(previewId);
        preview.style.display = 'block';
    }
    
    function hidePreview(imgId) {
        var previewId = "preview" + imgId.slice(-1);
        var preview = document.getElementById(previewId);
        preview.style.display = 'none';
    }
    
    
