var button = $(".deal-with-it-button")

  button.click (dealWithIt)

function dealWithIt() {
  console.log ("go")
  $("#glasses").animate({width: "100px"}, 1500)
}