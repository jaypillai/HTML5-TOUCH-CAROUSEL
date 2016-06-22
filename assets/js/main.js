(function(){
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;                                                        

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                rotate("right"); 
            } else {
                rotate("left");
            }                       
        }

        xDown = null;
        yDown = null;                                             
    };


    var carousel = document.getElementById("carousel"),
        currdeg  = 0;

   

    function rotate(direction){
      if(direction=="right"){
        currdeg = currdeg - 90;
      }
      if(direction=="left"){
        currdeg = currdeg + 90;
      }
      

        carousel.style.webkitTransform = "rotateY("+currdeg+"deg)";
        carousel.style.MozTransform = "rotateY("+currdeg+"deg)";
        carousel.style.msTransform = "rotateY("+currdeg+"deg)";
        carousel.style.OTransform = "rotateY("+currdeg+"deg)";
        carousel.style.transform = "rotateY("+currdeg+"deg)";
    }
})();