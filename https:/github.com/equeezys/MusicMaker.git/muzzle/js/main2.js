var q=1,
	qq=0,
_sor=document.getElementById("musicList"),
_player = document.getElementById("player"),
countUpdate=0,
iMus=0,
loaded=0,
audioFiles = [[
                  "src/level1/set0.wav",
                  "src/level1/set1.wav",
                  "src/level1/set2.wav",
                  "src/level1/set3.wav",
                  "src/level1/setall.wav"
              ],[3.75542,
                 2.27,
                 2.269977,
                 2.071247,
                 10.366644
                 ]];
function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.onloadeddata = function(){
        var audDuration = audio.duration;
        console.log("aud.duration url= " + audDuration);
        }
    audio.src = url;
}
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFiles[0].length){
    		q=0;
    }
}
function play(index) {
    player.src = audioFiles[0][index];
    count.backgroundColor = 'red';
    player.play();
}

window.onload = function() {
	
	for (var i in audioFiles[0]) {
	    preloadAudio(audioFiles[0][i]);
	}
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
    document.getElementById("musicList").addEventListener('click', function(e) {
    	if(q==0){
    		q++;
    		playlistItemClick(e.target);
    	}
    });
       /*document.getElementById("reSortList").addEventListener('click', function(e) {
    	   alert(q);
    	   if(q==0){
    		   $( "#sortablePlaylist" ).sortable("destroy");
    	       $( "#sortablePlaylist" ).sortable({
    	    	   change: function( event, ui ) {
    	    		   countUpdate++;
    	    		   $("#count").html(countUpdate);
    	    	   }
    	    	 });
    		   $("#count").html(0);
    		   countUpdate=0;
    		   iMus=0;
    	   }
    	//alert(1);
    });*/
    document.getElementById("player").addEventListener("ended", function(e) {
    	//alert("Event Listener "+iMus);
        if (iMus>0) {
        	playNext();
            if(iMus < 4) playlistItemClick(e.target);
            	else {
            		alert("Congrats you win!Your score : "+countUpdate+" .");
            		iMus=0;
            		countUpdate=0;
            }
          }
        else     	playNext();
    	//alert(1);
    });
    
       $( "#sortablePlaylist" ).sortable({
    	   change: function( event, ui ) {
    		   countUpdate++;
    		   $("#count").html(countUpdate);
    	   }
    	 });
};

function playlistItemClick(clickedElement) {
	var _playlist=document.getElementById("musicList");
	//var _player2 = document.getElementById("player");
    var selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");
    //alert("ItemClick"+iMus);
    if(iMus>0 || clickedElement.id=="playSortList"){
    	var sortedIDs = $( "#sortablePlaylist" ).sortable( "toArray" );
    	if(sortedIDs[iMus]=="item"+iMus){
        	//_player2.src = document.getElementById(sortedIDs[iMus]).getAttribute("src");
        	play(iMus);
        	//setTimeout(play(iMus), 1000);
        	iMus++;
        	//_player2.play();
    	}
    	else{
    		alert("WROOONG!!! "+iMus);
    		iMus=0;
    		playNext();
    	}
    	
    }
    else{
    	switch(clickedElement.id){
    	default: play(clickedElement.id[1]);
    	}
    	//_player2.src = clickedElement.getAttribute("src");
    	//_player2.play();
    }
}
/*aud.onloadeddata = function(){
    var audDuration = aud.duration;
    console.log("aud.duration = " + audDuration);
    }*/
function playNext(){
	q=0;
}
