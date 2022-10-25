switch (Math.floor(Math.random() * 3) + 1) {
  case 1:
    const rock = 'rock'
    break
  case 2:
    const paper = 'paper'
    break
  case 3:
    const scissor = 'scissor'
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
    rock
    break
  case 2:
    paper
    break
  case 3:
    scissor
    break
  default:
    console.log('ERROR')
}
