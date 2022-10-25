var compNumer = Math.floor(Math.random() * 3) + 1

switch (compNumber) {
  case 1:
    var compRock = 'rock'
    break
  case 2:
    var compPaper = 'paper'
    break
  case 3:
    var compScissor = 'scissor'
    break
  default:
    console.log('ERROR')
}

function UserInput () {
  while (true) {
    try {
      var input = prompt(
        'Its your choice: Click 1 for rock, click 2 for paper, click 3 for scissor:'
      )
      if (isNaN(input) || input < 1 || input > 3)
        throw 'Your input is not valid'
      return parseInt(input)
    } catch (error) {
      console.log(error)
    }
  }
}

switch (UserInput()) {
  case 1:
    var useRock = 'rock'
    break
  case 2:
    var userPaper = 'paper'
    break
  case 3:
    var userScissor = 'scissor'
    break
  default:
    console.log('ERROR')
}

if (condition) {
}
