switch(Math.floor(Math.random() * 3) + 1) {
    case 1:
      const rock = 'rock';
      break;
    case 2:
        const paper = 'paper';
      break;
      case 3:
        const scissor = 'scissor';
        break;
    default:
      console.log("ERROR");
  }

  console.log('Its your choise.');
  console.lof('What do you want to choose?');
  console.lof('rock [1], paper [2] or scissor [3]?');

