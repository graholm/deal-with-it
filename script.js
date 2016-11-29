var button = $()

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
  $("#glasses").animate({height: "100px"}, 1500)
}