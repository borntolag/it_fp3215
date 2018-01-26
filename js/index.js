
// declare array of pictures for banner cycling
var bannerImages = new Array("images/banner1.jpg","images/banner2.jpg","images/banner3.jpg");
// thisBanner is used as an index to bannerImages for last picture to be displayed
var thisBanner = 0;

// function to cycle through the banners
function rotate() {
	thisBanner++;
	if (thisBanner == bannerImages.length) {
		thisBanner = 0;
	}
	// update image to display
	document.getElementById("banner").src = bannerImages[thisBanner];
	// set timeout to fire again after 3 seconds 
	setTimeout("rotate()", 3 * 1000);
}
//function to preload images into cache
// Preload Images
function preloadMyImages() 
{
    for(var i = 0; i < bannerImages.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = bannerImages[i];
    }
}