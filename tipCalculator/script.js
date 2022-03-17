var percentage = 0;
var totalBill = 0;
var NoOfPeople = 1;

//getting percentage value from the buttons
$(".tip").click(function() {
    if (!$(this).hasClass('custom')) {
        percentage = $(this).val();
    }
    $(".tip").removeClass("active");
    $(this).addClass("active");
    calculate();
});

// getting values all the values from the input
$('input[type="number"]').on('keyup mouseup', function() {
    if (this.id == 'total') {
        totalBill = $(this).val();
        if (totalBill == '') {
            totalBill = 0;
        }

        // for error messages of bill
        if (totalBill < 0) {
            $("#total").addClass("error");
            $("#billError").show();
        } else {
            $("#total").removeClass("error");
            $("#billError").hide();
        }
    }
    if (this.id == 'people') {
        NoOfPeople = $(this).val();
        if (NoOfPeople == '') {
            NoOfPeople = 1;
        }

        // for error messages of people
        if (NoOfPeople == 0) {
            $("#people").addClass("error");
            $("#peopleError").hide();
            $("#peopleZeroError").show();
        } else if (NoOfPeople < 0) {
            $("#people").addClass("error");
            $("#peopleZeroError").hide();
            $("#peopleError").show();
        } else {
            $("#people").removeClass("error");
            $("#peopleError").hide();
            $("#peopleZeroError").hide();
        }
    }
    if ($(this).hasClass('custom')) {
        percentage = $(this).val();
        $(".tip").removeClass("active");
        $(this).addClass("active");
        if (percentage == '') {
            percentage = 0;
        }
    }
    calculate();
});

// calclation of tip amount / person and total amount / person
function calculate() {
    var totalAmount = totalBill / NoOfPeople;
    var tipAmount = totalAmount * (percentage / 100);
    totalAmount = (tipAmount + totalAmount);

    tipAmount = tipAmount.toFixed(2);
    totalAmount = totalAmount.toFixed(2);

    $("#tipAmount").text(tipAmount);
    $("#totalAmount").text(totalAmount);
}

//reset button click  
$('button[type="reset"]').click(function() {

    // resetting buttons
    $(".tip").removeClass("active");
    $(".custom").val('');

    // resetting bill amount
    $("#total").val('');

    //resetting no. of people
    $("#people").val('');

    //resetting tip amount and total amount to pay / person
    percentage = 0;
    totalBill = 0;
    NoOfPeople = 1;
    calculate();
});