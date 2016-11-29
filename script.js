var button = $(".deal-with-it-button")

  button.click (dealWithIt)

function dealWithIt() {
  console.log ("go")
  $("#glasses").animate({width: "10000px"}, 1500)
}