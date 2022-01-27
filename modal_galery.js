function prepareModal()
{
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg0");
var img2 = document.getElementById("myImg1");
var img3 = document.getElementById("myImg2");
var img4 = document.getElementById("myImg3");
var img5 = document.getElementById("myImg4");
var img6 = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
    }
img3.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        //captionText.innerHTML = this.alt;
        }

img4.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            //captionText.innerHTML = this.alt;
            }
img5.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                //captionText.innerHTML = this.alt;
                }
img6.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    //captionText.innerHTML = this.alt;
                    }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
