$(document).ready(function(){   
    $("a").on('click', function(event) {
        //Smooth Scrolling for Links
        // Start if
      if (this.Link !== "") {
        event.preventDefault();
        var Link = this.Link;
        $('html, body').animate({
          scrollTop: $(Link).offset().top
        }, 2000, function(){
          window.location.Link = Link;
        });
      } // End if
    });
  });
  
  // Open and Closing Forms 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
  }
  