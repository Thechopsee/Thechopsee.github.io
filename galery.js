function prepareModal()
{
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var pole_obrazku = document.getElementsByClassName("myImg");
for(var i=0;i<pole_obrazku.length;i++)
{
    pole_obrazku[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }
}
