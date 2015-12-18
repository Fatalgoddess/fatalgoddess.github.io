
// MEMBERS BIT-----------------------------------------------
var personthumbnail, photo_template;

$(document).ready(function(){
	var source   = $("#personthumbnail").html();
	personthumbnail = Handlebars.compile(source);

	source   = $("#photo_template").html();
	photo_template = Handlebars.compile(source);

	var html    = personthumbnail({profile_pictures});
	$("#familypictures").html(html);



	$(".thumbnail").click(function (){
// get the index (position in the array)
// of the photo we clicked on
// "this" is the element that was clicked on
// data("id") gets the attribute data-id
// (which we set to the index of the photo in
// the array - @index)
	console.log("here");
	var index = $(this).data("id");
	console.log(index);
// set the current photo to this photo
var current_photo = profile_pictures[index];
console.log(current_photo);
var html =photo_template(current_photo);
console.log(html);
$("#image-gallery").html(html);
// displays the single photo template
$("#image-gallery").modal("show");
});



//Search function keypress event
  $('#searchbox').keypress(function (e) {

      // check if the key that was pressed
      // is the return key (it has id 13)
      // and only do the search if it is
      if (e.which == 13) {

        // get the search text which is the 
        // contents of the search box
        var searchText = $('#searchbox').val();

        // print the search box 
        // (this is an example of using
        // console.log for debugging)
        console.log(searchText);
 var filteredData = {

          // use the filter function which returns
          // a new array that contains only the 
          // elements of data.images for which 
          // the function returns true
          profile_pictures: profile_pictures.filter(function(d){
            
            // return true if the title contains 
            // the search text
            if (d.description.search(searchText) > -1){
              return true;
            }

            // if we reach here it means we haven't 
            // found a match so return false
            return false;
          })
        };
        
        // pass the newly filtered data into
        // the template to generate new html
        var html    = personthumbnail(filteredData);
        $('#familypictures').html(html);
    }
   });





});


