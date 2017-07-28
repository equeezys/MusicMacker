var q=1,
	qq=0,
_sor=document.getElementById("musicList"),
_player = document.getElementById("player"),
countUpdate=0,
countUpdate2=0,
countUpdate3=0,
countUpdate4=0,
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
                  "src/level3/set3.wav",
                  "src/level4/set44.wav"
                  
                  
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
	if(pageid == "level4") {
		if (parseInt(index)<5)
		pageindex=(parseInt(index)+1)*4-1;
		else 
			pageindex=12;
	}
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
    document.getElementById("musicList4").addEventListener('click', function(e) {
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
	 document.getElementById("playAll4").addEventListener('click', function(e) {
		 var sortedIDs = $( "#sortablePlaylist4" ).sortable( "toArray" );
	    	if(q==0){
		    	if(sortedIDs[iMus]=="i4em"+iMus){
		        	iMus++;
		        	q=1;
	    		document.getElementById("playerAll40").play();
	    		document.getElementById("playerAll41").play();
	    		document.getElementById("playerAll42").play();
		    	}
		    	else{
		    		alert("WROOONG!!! "+iMus);
		    		iMus=0;
		    	}
	    	}
	 });
	 //level1 start
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
	 //level1 end
	 //level2 start
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
	    		alert("WROOONG!!! lololo"+iMus);
	    		//document.getElementById("playerAll1").stop();
	    		//document.getElementById("playerAll2").stop();
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
	 //level2 end
	 //level3 start
	 document.getElementById("playerAll31").addEventListener("ended", function(e) {
	    	var sortedIDs = $( "#sortablePlaylist3" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i3em"+iMus){
	    		iMus++;
	    		
	    	}
	    	else{
	    		var playerAll22 = document.getElementById("playerAll32");
	    		playerAll22.pause();
	    		playerAll22.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll30").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
	    	var sortedIDs = $( "#sortablePlaylist3" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i3em"+iMus){
	        	iMus++;
	    	}
	    	else{
	    		var playerAll21 = document.getElementById("playerAll31");
	    		var playerAll22 = document.getElementById("playerAll32");
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
	 //level3 end
	 
	 document.getElementById("playerAll40").addEventListener("ended", function(e) {
	    	var sortedIDs = $( "#sortablePlaylist4" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i4em"+iMus){
	        	iMus++;
	    	}
	    	else{
	    		var playerAll21 = document.getElementById("playerAll41");
	    		var playerAll22 = document.getElementById("playerAll42");
	    		playerAll21.pause();
	    		playerAll21.currentTime = 0;
	    		playerAll22.pause();
	    		playerAll22.currentTime = 0;
	    		alert("WROOONG!!! "+iMus);
	    		iMus=0;
	    		q=0;
	    	}
	    });
	 document.getElementById("playerAll41").addEventListener("ended", function(e) {
	    	var sortedIDs = $( "#sortablePlaylist4" ).sortable( "toArray" );
	    	if(sortedIDs[iMus]=="i4em"+iMus){
	    		iMus++;
	    		
	    	}
	    	else{
	    		var playerAll22 = document.getElementById("playerAll42");
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
		 		alert("Congrats you win!Your score : "+countUpdate2+" .");
				iMus=0;
				countUpdate2=0;
				q=0;
	    });
	 document.getElementById("playerAll32").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
		 		alert("Congrats you win!Your score : "+countUpdate3+" .");
				iMus=0;
				countUpdate3=0;
				q=0;
	    });
	 document.getElementById("playerAll42").addEventListener("ended", function(e) {
	    	//alert("Event Listener "+iMus);
		 		alert("Congrats you win!Your score : "+countUpdate4+" .");
				iMus=0;
				countUpdate4=0;
				q=0;
	    });
	 
    document.getElementById("player").addEventListener("ended", function(e) {
    	//alert("Event Listener "+iMus);
    	playNext();
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
    			   countUpdate2++;
    			   $("#count2").html(countUpdate2);
    		   }
    		   else $(this).sortable( "cancel" );
    	   }
    	 });
       $( "#sortablePlaylist3" ).sortable({
    	   change: function( event, ui ) {
    		   if (q==0){
    			   	countUpdate3++;
    		   		$("#count3").html(countUpdate3);
    		   }
    		   else 
    			   $(this).sortable( "cancel" );
    		   
    	}
    	 });
       $( "#sortablePlaylist4" ).sortable({
    	   change: function( event, ui ) {
    		   if (q==0){
    			   	countUpdate4++;
    		   		$("#count3").html(countUpdate4);
    		   }
    		   else 
    			   $(this).sortable( "cancel" );
    		   
    	}
    	 });
};
function playlistItemClick(clickedElement) {
	var _playlist=document.getElementById("musicList");
    var selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");
    play(clickedElement.id[1]);
}
function playNext(){
	q=0;
}
