$(document).ready(function() {
    $(".j1").hover(function() {
        $("#m1").toggle();
    });

    $(".j2").hover(function() {
        $("#m2").toggle();
    })

    $(".j3").hover(function() {
        $("#m3").toggle();
    });

    $(".j4").hover(function() {
        $("#m4").toggle();
    });

    $(".j5").hover(function() {
        $("#m5").toggle();
    });

    $(".j6").hover(function() {
        $("#m6").toggle();
    });

    $(".j7").hover(function() {
        $("#m7").toggle();
    });

    $(".j8").hover(function() {
        $("#m8").toggle();
    });
});
function findOrder() {
    
    var name = $("input#name").val();
    var flavor = $("#type").val();
    var crust = $("#lab").val();
    var size = $("#size").val();
    var number = $("#piz").val();
    var toppings = [];
    $.each($('input[name="toppings"]:chrcked'), function() {
        toppings.push($(this).val());
    });
    var priceSize;
    if (flavor === "Margherita Pizza" || flavor === "Pepperoni Pizza" || flavor === "BBQ Chicken Pizza") {
        if (size === "Small") {
            priceSize = 600;
        } else if (size === "Medium") {
            priceSize = 850;
        } else if (size === "Large") {
            priceSize = 1200;
        }
    } else if (flavor === "Hawaiian Pizza" || flavor === "Meat-Lover's Pizza" || flavor === "Chicken Alfredo Pizza") {
        if (size === "small") {
            priceSize = 650;
        } else if (size === "Medium") {
            priceSize = 900;
        } else if (size === "Large") {
            priceSize = 1300;
        }
    }
    var crustPrice;
    if (crust === "Crispy") {
        crustPrice = 200;
    } else if (crust === "Stuffed") {
        crustPrice = 100;
    } else if (crust === "Gluten-free") {
        crustPrice = 200;
    }
}