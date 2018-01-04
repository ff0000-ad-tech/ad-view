var FullScreen = new function(){
	var F = this;

	F.isFullScreen = function(){
		return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	}

	F.enter = function( elem ){
		if ( F.isFullScreen() ) return;

		if ( elem.requestFullscreen ) {
			console.log( ' -> requestFullscreen' )
			elem.requestFullscreen();
		} else if ( elem.msRequestFullscreen ) {
			console.log( ' -> msRequestFullscreen' )
			elem.msRequestFullscreen();
		} else if ( elem.mozRequestFullScreen ) {
			console.log( ' -> mozRequestFullScreen' )
			elem.mozRequestFullScreen();
		} else if ( elem.webkitRequestFullscreen ) {
			console.log( ' -> webkitRequestFullscreen' )
			elem.webkitRequestFullscreen();
		}
	}

	F.exit = function(){
		if ( !F.isFullScreen() ) return;
		
		if (document.exitFullscreen) {
			console.log( ' -> exitFullscreen' )
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			console.log( ' -> msExitFullscreen' )
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			console.log( ' -> mozCancelFullScreen' )
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			console.log( ' -> webkitExitFullscreen' )
			document.webkitExitFullscreen();
		}
	}
}

export default FullScreen