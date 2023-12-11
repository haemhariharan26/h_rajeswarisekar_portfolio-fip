
function openIndex() {
    	 
    var url = 'index.html';
   
        setTimeout(function() {
            window.location.href = url;
        }, 200);
}

function openContact() {
    	 
  var url = 'contact-us.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);
}
function openGrapics()
{
var url = 'gallery.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);	
}
function openVideos()
{
	var url = 'videos.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);
	
}
function openMyWork1()
{
	var url = 'Bayengage.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);
	
}
function openMyWork2()
{
	var url = 'Dr.Nut Beer.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);
	
}
function openMyWork3()
{
	var url = 'Kavorca.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);
	
}
function openMyWork4()
{
	var url = 'Earbud.html';
   
        document.body.classList.add('fadeOut');

         setTimeout(function() {
            window.location.href = url;
        }, 200);
	
}
 
window.onload = function() {
         
    
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
    