var data = [];

fetch('data.json').then(result => result.json()).then((result) => {
    data = result;
    $("#weekly").click(function() {
        $("#weekly").addClass("active");
        $("#daily").removeClass("active");
        $("#monthly").removeClass("active");

        changeWeekly(data);
    })
    $("#daily").click(function() {
        $("#weekly").removeClass("active");
        $("#daily").addClass("active");
        $("#monthly").removeClass("active");

        changeDaily(data);
    })
    $("#monthly").click(function() {
        $("#weekly").removeClass("active");
        $("#daily").removeClass("active");
        $("#monthly").addClass("active");

        changeMonthly(data);
    })

});

function changeHrs(datac, datap, id, time) {
    $("#" + id + " b span").text(datac);
    $("#" + id + " p span").text(time + " - " + datap);
}

function changeDaily(data) {
    for (let i = 0; i < 6; i++) {
        changeHrs(data[i].timeframes.daily.current, data[i].timeframes.daily.previous, $(".container")[i].id, "Day");
    }
}

function changeWeekly(data) {
    for (let i = 0; i < 6; i++) {
        changeHrs(data[i].timeframes.weekly.current, data[i].timeframes.weekly.previous, $(".container")[i].id, "Week");
    }
}

function changeMonthly(data) {
    for (let i = 0; i < 6; i++) {
        changeHrs(data[i].timeframes.monthly.current, data[i].timeframes.monthly.previous, $(".container")[i].id, "Month");
    }
}