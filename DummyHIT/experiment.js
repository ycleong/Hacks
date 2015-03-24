var elig_code = "1001502703"

/* showSlide(id); Displays each slide */
function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

/*
Show the instructions slide — this is what we want subjects to see first.
*/
showSlide("instructions");

var experiment = {
  code: "",

// Goes to description slide
end: function() {

  experiment.code =  $("input[name = 'code']").val();

  if (turk.previewMode) {
    alert ( "Please accept the HIT before continuing." );

  } else if (experiment.code == elig_code) {
        showSlide("success");
        setTimeout(function() {turk.submit(experiment);}, 1500);
  } else {
    alert ( "Wrong code!" );
  }
},
};