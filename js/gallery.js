
// Preload Images
function preloadMyImages() 
{
    var imageList = [
        "images/event.jpg",
        "images/firefighter.jpg",
        "images/silhouette.jpg",
		"images/work.jpg"
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
}
// enlarge the picture onmouseover event
function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "400px";
}
// return the picture to normal view on onmouseout event
function normalImg(x) {
    x.style.height = "auto";
    x.style.width = "100%";
}