var pictures = [
img1 = { 
	src: "images/img_1.PNG",
	id: "img_1"},
img2 = {
	src: "images/img_2.PNG",
	id: "img_2" },
img3 = {
	src: "images/img_3.PNG",
	id: "img_3" }]

var picture1 = img1 = { 
	src: "images/img_1.PNG",
	id: "img_1"};

function shownextpic(){
var source   = $("#photoshow_template").html();
var template = Handlebars.compile(source);

var imghtml  =photoshow_template(picture1);


$(".photoshow").html(imagehtml);

}

shownextpic();