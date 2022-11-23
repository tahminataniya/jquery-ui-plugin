//draggable start

$(document).ready(function(){

    $( "#draggable" ).draggable();

})
//dropable start
$(document).ready(function(){
 $( "#dragg").draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

})

//resizable start

$(document).ready(function(){

    $( "#resizable" ).resizable();

})
//sotable start

$(document).ready(function(){

     $( "#sortable" ).sortable();

})
//accordion start
$(document).ready(function(){

     $( "#accordion" ).accordion({
         collapsible: true
    });

})

//autocomplete start
$(document).ready(function(){

     var availableTags = ["Html","Css","Bootstrap","java-script","jquery"];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

})
//datepicker start
$(document).ready(function(){

    $( "#datepicker" ).datepicker();

})
//menu start
$(document).ready(function(){

    $( "#menu" ).menu();

})
//tabs start
$(document).ready(function(){

      $( "#tabs" ).tabs();

})
//checkboxradio start
$(document).ready(function(){

       $( "input" ).checkboxradio();

})






