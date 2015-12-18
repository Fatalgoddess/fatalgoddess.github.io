
// GALLERY BIT-----------------------------------------------
var currentphoto = 0;
$(document).ready(function(){
var source   = $("#photoshow_template").html();
var photo_template = Handlebars.compile(source);


//Start here
var imghtml  = photo_template(pictures[currentphoto]);
$(".photoshow").html(imghtml);



//click on previous button
$("#last-button").click(function(){
if (currentphoto == 0){
console.log("igotclicked");
	currentphoto = pictures.length-1;
	var imghtml  = photo_template(pictures[currentphoto]);
	$(".photoshow").html(imghtml);
	}else{
	currentphoto= currentphoto-1;
	var imghtml  = photo_template(pictures[currentphoto]);
	$(".photoshow").html(imghtml);
		}
});

//click on next button
$("#next-button").click(function shownextpic(){
if (currentphoto == pictures.length-1){
	currentphoto=0;
	var imghtml  = photo_template(pictures[currentphoto]);
	$(".photoshow").html(imghtml);
} else{ 
	currentphoto= currentphoto+1;
	var imghtml  = photo_template(pictures[currentphoto]);
	$(".photoshow").html(imghtml);
}
});

});
