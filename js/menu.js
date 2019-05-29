// jQuery.fn.extend( {
// 	show: function() {
// 		return showHide( this, true );
// 	},
// 	hide: function() {
// 		return showHide( this );
// 	},
// 	toggle: function( state ) {
// 		if ( typeof state === "boolean" ) {
// 			return state ? this.show() : this.hide();
// 		}

// 		return this.each( function() {
// 			if ( isHiddenWithinTree( this ) ) {
// 				jQuery( this ).show();
// 			} else {
// 				jQuery( this ).hide();
// 			}
// 		} );
// 	}
// } );
$("#toggle").click(function() {
    console.log("toggle clic");
    $("#overlay").show();
});