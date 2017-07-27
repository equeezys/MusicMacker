var q=1,
	qq=0,
_sor=document.getElementById("musicList"),
_player = document.getElementById("player"),
countUpdate=0,
iMus=0,
loaded=0,pageindex=0

audioFiles = [[
                  "src/level1/get0.wav",
                  "src/level1/get1.wav",
                  "src/level1/get12.wav",
                  "src/level1/setall.wav",
                  "src/level2/set0.wav",
                  "src/level2/set1.wav",
                  "src/level2/set2.wav",
                  "src/level2/set3.wav",
                  "src/level3/set0.wav",
                  "src/level3/set1.wav",
                  "src/level3/set2.wav",
                  "src/level3/set3.wav"
                  
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
    var page = document.getElementsByClassName('ui-page-active')[0],
    pageid;
pageid = page ? page.id : "";
	pageindex=parseInt(index);
	if(pageid == "level2") pageindex=4+parseInt(index);
	if(pageid == "level3") pageindex=8+parseInt(index);
    player.src = audioFiles[0][pageindex];
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
    document.getElementById("musicList2").addEventListener('click', function(e) {
    	if(q==0){
    		q++;
    		playlistItemClick(e.target);
    	}
    });
    document.getElementById("musicList3").addEventListener('click', function(e) {
    	if(q==0){
    		q++;
    		playlistItemClick(e.target);
    	}
    });
	 document.getElementById("playAll").addEventListener('click', function(e) {
		 var sortedIDs = $( "#sortablePlaylist" ).sortable( "toArray" );
	    	if(q==0){
		    	if(sortedIDs[iMus]=="item"+iMus){
		        	iMus++;
		        	q=1;
	    		document.getElementById("playerAll0").play();
	    		document.getElementById("playerAll1").play();
	    		document.getElementById("playerAll2").play();
		    	}
		    	else{
		    		alert("WROOONG!!! "+iMus);
		    		iMus=0;
		    	}
	    	}
	 });
	 document.getElementById("playAll2").addEventListener('click', function(e) {
		 var sortedIDs = $( "#sortablePlaylist2" ).sortable( "toArray" );
	    	if(q==0){
		    	if(sortedIDs[iMus]=="i2em"+iMus){
		        	iMus++;
		        	q=1;
	    		document.getElementById("playerAll20").play();
	    		document.getElementById("playerAll21").play();
	    		document.getElementById("playerAll22").play();
		    	}
		    	else{
		    		alert("WROOONG!!! "+iMus);
		    		iMus=0;
		    	}
	    	}
	 });
	 document.getElementById("playAll3").addEventListener('click', function(e) {
		 var sortedIDs = $( "#sortablePlaylist3" ).sortable( "toArray" );
	    	if(q==0){
		    	if(sortedIDs[iMus]=="i3em"+iMus){
		        	iMus++;
		        	q=1;
	    		document.getElementById("playerAll30").play();
	    		document.getElementById("playerAll31").play();
	    		document.getElementById("playerAll32").play();
		    	}
		    	else{
		    		alert("WROOONG!!! "+iMus);
		    		iMus=0;
		    	}
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
	 document.getElementById("playerAll0").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
	    	var sortedIDs = $( "#sortablePlaylist" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="item"+iMus){
	        	iMus++;
	    	}
	    	else{
	    		var playerAll1 = document.getElementById("playerAll1");
	    		var playerAll2 = document.getElementById("playerAll2");
	    		playerAll1.pause();
	    		playerAll1.currentTime = 0;
	    		playerAll2.pause();
	    		playerAll2.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		//document.getElementById("playerAll1").stop();
	    		//document.getElementById("playerAll2").stop();
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll1").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
	    	var sortedIDs = $( "#sortablePlaylist" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="item"+iMus){
	    		iMus++;
	    	}
	    	else{
	    		var playerAll2 = document.getElementById("playerAll2");
	    		playerAll2.pause();
	    		playerAll2.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);

	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll20").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
	    	var sortedIDs = $( "#sortablePlaylist2" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i2em"+iMus){
	        	iMus++;
	    	}
	    	else{
	    		var playerAll21 = document.getElementById("playerAll21");
	    		var playerAll22 = document.getElementById("playerAll22");
	    		playerAll21.pause();
	    		playerAll21.currentTime = 0;
	    		playerAll22.pause();
	    		playerAll22.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		//document.getElementById("playerAll1").stop();
	    		//document.getElementById("playerAll2").stop();
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll30").addEventListener("ended", function(e) {
	    	var sortedIDs = $( "#sortablePlaylist3" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i3em"+iMus){
	        	iMus++;
	    	}
	    	else{
	    		var playerAll21 = document.getElementById("playerAll21");
	    		var playerAll22 = document.getElementById("playerAll22");
	    		playerAll21.pause();
	    		playerAll21.currentTime = 0;
	    		playerAll22.pause();
	    		playerAll22.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll21").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
	    	var sortedIDs = $( "#sortablePlaylist2" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i2em"+iMus){
	    		iMus++;
	    		
	    	}
	    	else{
	    		var playerAll22 = document.getElementById("playerAll22");
	    		playerAll22.pause();
	    		playerAll22.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll31").addEventListener("ended", function(e) {
	    	var sortedIDs = $( "#sortablePlaylist3" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i3em"+iMus){
	    		iMus++;
	    		
	    	}
	    	else{
	    		var playerAll22 = document.getElementById("playerAll22");
	    		playerAll22.pause();
	    		playerAll22.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll2").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
		 		alert("Congrats you win!Your score : "+countUpdate+" .");
				iMus=0;
				countUpdate=0;
				q=0;
	    });
	 document.getElementById("playerAll22").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
		 		alert("Congrats you win!Your score : "+countUpdate+" .");
				iMus=0;
				countUpdate=0;
				q=0;
	    });
	 document.getElementById("playerAll32").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
		 		alert("Congrats you win!Your score : "+countUpdate+" .");
				iMus=0;
				countUpdate=0;
				q=0;
	    });
	 
    document.getElementById("player").addEventListener("ended", function(e) {
    	//alert("Event Listener "+iMus);
        if (iMus>0) {
        	playNext();
            if(iMus < 3) playlistItemClick(e.target);
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
    		   if (q==0){
    			   countUpdate++;
    			   $("#count").html(countUpdate);
    		   }
    		   else $(this).sortable( "cancel" );
    	   }
    	 });
       $( "#sortablePlaylist2" ).sortable({
    	   change: function( event, ui ) {
    		   if (q==0){
    			   countUpdate++;
    			   $("#count2").html(countUpdate);
    		   }
    		   else $(this).sortable( "cancel" );
    	   }
    	 });
       $( "#sortablePlaylist3" ).sortable({
    	   change: function( event, ui ) {
    		   if (q==0){
    			   	countUpdate++;
    		   		$("#count3").html(countUpdate);
    		   }
    		   else 
    			   $(this).sortable( "cancel" );
    		   
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
    play(clickedElement.id[1]);
    	//_player2.src = clickedElement.getAttribute("src");
    	//_player2.play();
}
/*aud.onloadeddata = function(){
    var audDuration = aud.duration;
    console.log("aud.duration = " + audDuration);
    }*/
function playNext(){
	q=0;
}
