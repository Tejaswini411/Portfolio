// var wow = new WOW(
//     {
//       boxClass:     'wow',      // animated element css class (default is wow)
//       animateClass: 'animated', // animation css class (default is animated)
//       offset:       0,          // distance to the element when triggering the animation (default is 0)
//       mobile:       true,       // trigger animations on mobile devices (default is true)
//       live:         true,       // act on asynchronously loaded content (default is true)
//       callback:     function(box) {
//         // the callback is fired every time an animation is started
//         // the argument that is passed in is the DOM node being animated
//       },
//       scrollContainer: null,    // optional scroll container selector, otherwise use window,
//       resetAnimation: true,     // reset animation on end (default is true)
//     }
//   );
//   wow.init();


document.addEventListener('DOMContentLoaded',function(event){

    var dataText = [ "based in Vacouver", "passionate about new ideas and new ways for problem solving", "fascinated by tools for thought and creation", "a dog lover", "a fitness enthusiast", "a fashion freak", "curious about Design"];
    
  
    function typeWriter(text, i, fnCallback) {
  
      if (i < (text.length)) {
       document.querySelector(".typewrite").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      
      else if (typeof fnCallback == 'function') {
       
        setTimeout(fnCallback, 600);
      }
    }
   
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
     
      if (i < dataText[i].length) {
      
       typeWriter(dataText[i], 0, function(){
       
         StartTextAnimation(i + 1);
       });
      }
    }
  
    StartTextAnimation(0);
  });