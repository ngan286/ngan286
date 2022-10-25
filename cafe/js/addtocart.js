function openGotoCart(){
    document.getElementById("popup").style.display='block';
}

function closeGotoCart(){
    document.getElementById("popup").style.display='none';
}

function GotoCart(){
    window.location.href = "../../cart.html";
}

var addtocart = document.getElementById("popup");

window.onclick = function(event){
    if(event.target == addtocart){
        addtocart.style.display = "none";
    }
}

function openGotoCart(){
    Swal.fire({
      title: "Your item has been added to cart.",
      text: "Do you wanna go to checkout?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#d3a98c",
      cancelButtonColor: "#bbb",
      cancelButtonText: "Back to choosing",
      confirmButtonText: "Go to checkout",
    }).then((result) => {
      if (result.isConfirmed) {
          setTimeout(() => {
            window.location.assign("../../cart.html");
          }, 500)
      }
    });
  };