$('.photo-gallery__images').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

$(function() {
	$('.am-container').montage({
    liquid: false, 
    fillLastRow	: true,
    alternateHeight	: true,
    alternateHeightRange : {
      min	: 280,
      max	: 280
    },
    margin : 10
	});
});	