var button = $()

$(function() {
  button.click(dealWithIt)
  console.log ("button")
})

function dealWithIt() {
  $("#glasses").animate({height: "100px"}, 1500)
}