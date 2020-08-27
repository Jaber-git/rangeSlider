

(function($){
    "use strict";

 // RESPONSIVE MAIN MENU JS
 $(document).ready(function () {
    $('.menu').meanmenu();
    });

//   END RESPONSIVE MAIN MENU JS

      // data-background
        $("[data-background]").each(function(){
            $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
        });

       
    
})(jQuery);