

moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

for (let i = 1; i <= 9; i++) {
    $("#t" + i).val(localStorage.getItem(i))
}

$(".saveBtn").on("click", function(){
    console.log($("#t" +this.id).val())
    
    
    localStorage.setItem(this.id, $("#t" +this.id).val() )
  });

  
 var currentTime = moment().hour() -8;
  for (let i = 1; i <= 9; i++) {
 


    if (i === currentTime) {
       $("#t" + i).attr("class", "textarea present")
    }
    else if (i < currentTime) {
        $("#t" + i).attr("class", "textarea past")
    }
    else if (i > currentTime) {
        $("#t" + i).attr("class", "textarea future")
    }
    
  }