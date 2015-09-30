/**
 * Created by trupi on 30/09/15.
 */


function getBledisOpinion(){
    var quotes = ["Po mir kjo, po ato imazhet si do ti rujm ne database ?",
                  "Ah Zoo",
                  "Ec ec ec",
                  "Dole b***qo",
                  "Me e shtrenjte, me e keqe, po ja vlen",
                  "Apple eshte Apple",
                  "Ishalla po na merr Baumani ne pune",
                  "Ec ec ec",
                  "Ah Zoo",
                  "Ec ec ec",];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

$(document).ready(function() {
    $("#ask").click(function() {

        $(".answertext").text(getBledisOpinion());
        $('.row.question-row').fadeOut().delay(6000).fadeIn();
        $('.row.answer-row').fadeIn().delay(6000).fadeOut();

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


