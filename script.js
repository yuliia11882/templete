let count = 0;

function updateView() {
    $("#counter").text(count);
}

function increaseOccured() {
    count++;
    updateView();
}

function decreaseOccured() {
    count--;
    updateView();
}


$("#increaseButton").click(increaseOccured);

$("#decreaseButton").click(decreaseOccured);

$("#alertButton").click(function() {
    alert("you hit the alert Button!")

})

updateView();