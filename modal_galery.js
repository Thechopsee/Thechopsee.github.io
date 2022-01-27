function prepareModal()
{
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var pole_obrazku = document.getElementsByClassName("myImg");
for(var i=0;i<pole_obrazku.length;i++)
{
    pole_obrazku[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        //captionText.innerHTML = this.alt;
        }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
