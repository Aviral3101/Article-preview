var share = document.querySelector("#share");
var link= document.querySelector("#share-link");

share.addEventListener("click",function(event){
  if(link.style.visibility=='hidden' || link.style.visibility==''){
    link.style.visibility='visible';
  }else if (link.style.visibility=='visible') {
    link.style.visibility='hidden';
  }
});
