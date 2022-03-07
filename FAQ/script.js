$(".arrowIcon, h2").click(function() {
    // toggle answers
    $(this).nextAll("p").slice(0, 1).toggle();

    // select ques 
    var x = $(this).prevAll("h2").slice(0, 1);
    if ($(this).is("h2")) {
        x = $(this);
    }

    // toggle ques bold and not bold style
    if (x.hasClass("notBold")) {
        x.removeClass("notBold");
    } else {
        x.addClass("notBold");
    }

    //toggle icon degree
    var i = x.nextAll(".arrowIcon").slice(0, 1);
    if (i.hasClass("rotate")) {
        i.removeClass("rotate")
    } else {
        i.addClass("rotate")
    }

});