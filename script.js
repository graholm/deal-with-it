var button = $()

  button.click (dealWithIt)

function dealWithIt() {
  console.log ("go")
  $("#glasses").animate({height: "100px"}, 1500)
}