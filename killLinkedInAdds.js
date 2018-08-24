function killAdd(){
	var itm = document.getElementsByClassName("feed-shared-update-v2 feed-shared-update mh0 Elevation-2dp relative full-height ember-view");

	for(i=0; i<itm.length; i++){
		var poster = itm[i].innerText;
		var regXspam = /Promoted/.test(poster);
		if(regXspam === true){
			itm[i].parentElement.removeChild(itm[i]);
		}
	}
}
window.addEventListener("scroll", killAdd);
