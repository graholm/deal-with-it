var button = $()

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
  $("#glasses").animate({height: "300px"}, 1500)
}