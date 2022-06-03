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

function down_vysledky(a)
{
  link = document.createElement("a"); //create 'a' element
  link.setAttribute("href", "vysledky/"+a.id+".xlsx"); //replace "file" with link to file you want to download
  link.setAttribute("download", "vysledky/"+a.id+".xlsx");// replace "file" here too
  link.click(); //virtually click <a> element to initiate download
  
}