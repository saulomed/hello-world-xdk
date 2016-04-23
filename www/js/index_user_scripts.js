/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  #btn_back */
    $(document).on("click", "#btn_back", function(evt)
    {
        alert('teste!!!');
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
