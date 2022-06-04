var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("birthdayimage.png" , function(Img) {
          block_image_object = Img;

        .scaleToWidth(700);
        .scaleToHeight(510);
        player_object.set({
            top: 0 ,
            left: 0
        });
        canvas.add(block_image_obeject);
    });
}	


function playSound(){
	document.getElementById(myAudio).play()
}
