$(document).ready(function() {

    $(".intro-buttons li a").click(function(e) {
        $("div.card").hide();
        e.preventDefault();
        var filter = $(this).attr("data-filter");
        $.each($("div.card"), function() {
            if ($(this).attr("data-filter").indexOf(filter) > -1) {
                $(this).fadeIn();
                $("#no_ltis").hide();
            }
        });
        $("#all_tools").text($(this).text());
        if(!$("div.card").is(":visible")) {
            // empty set of cards, show empty msg
            if ($("#no_ltis").length == 0) {
                $("#all_tools").parent().append("<p class='text-center' id='no_ltis'>No LTIs available in this category</p>");
            } else {
                $("#no_ltis").fadeIn();
            }
        }
    });

});