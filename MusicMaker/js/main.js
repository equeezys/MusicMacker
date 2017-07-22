window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
    	
        var page = document.getElementsByClassName('ui-page-active')[0],
        pageid;

    pageid = page ? page.id : "";

    if (pageid === "main-page") {
        try {
            tizen.application.getCurrentApplication().exit();
        } catch (ignore) {}
    } else {
    	 window.history.back();
    }
    });
        $( "#sortable" ).sortable();
        		
        $( "#ui-btn2" ).draggable();
};