//  var allButtons =document.getElementsByClassName("button");

moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

for (let i = 1; i <= 9; i++) {
    $("#t" + i).val(localStorage.getItem(i))
}

$(".saveBtn").on("click", function(){
    console.log($("#t" +this.id).val())
    
    // $(this).val(testarea)
    localStorage.setItem(this.id, $("#t" +this.id).val() )
  });