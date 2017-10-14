window.onload = function(){
console.log("Sayfa Hazır")


var dataurl;

var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            //canvas.width = img.width;
            //canvas.height = img.height;
			var size = document.getElementById("sizeselect").value;
			canvas.width = size;
            canvas.height = size;
            ctx.drawImage(img,0,0,size,size);
			$("#geturlbutton").slideDown(1000);
        }
        img.src = event.target.result;
		
    }
    reader.readAsDataURL(e.target.files[0]);     
}


}


function countsms(){
	
	var a = 1;
	for(var i = 0; i < dataurl.length;){
		i = i + 150;
		document.getElementById("countsms").innerHTML = a
		a++
		}
}