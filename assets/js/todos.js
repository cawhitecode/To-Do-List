// Check off Specific To-Dos by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
  });
  
  // click to delete and fades out
  $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });
  
  $("input[type='text']").keypress(function(event){
    if(event.which === 13){
      // grab input
      var toDoText = $(this).val();
      $(this).val("");
      // make input new li and ToDo
      $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + " " + toDoText + "</li>")
    }
  });
  
  $(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
  });