/**
 * Created by trupi on 30/09/15.
 */


$(document).ready(function() {
    $("#ask").click(function() {

        $('.row.question-row').fadeOut().delay(8000).fadeIn();
        $('.row.answer-row').fadeIn().delay(8000).fadeOut();

        //$.ajax({
        //    type: "POST",
        //    url: "example.php",
        //    data: $(this).serialize(),
        //    success: function() {
        //        $('.row.question-row').fadeOut().delay(5000).fadeIn();
        //        $('.row.answer-row').fadeIn().delay(5000).fadeOut();
        //
        //    },
        //    error: function() {
        //        $('.row.question-row').fadeOut().delay(5000).fadeIn();
        //        $('.row.answer-row').fadeIn().delay(5000).fadeOut();
        //    },
        //    fail: function() {
        //        $('.row.question-row').fadeOut().delay(5000).fadeIn();
        //        $('.row.answer-row').fadeIn().delay(5000).fadeOut();
        //    }
        //})
    })
})


