  //Write a function to get computer choice


  let options = ["rock", "paper", "scissors"];

  function getComputerChoice(){
      const computerChoice = options[Math.floor(Math.random() * options.length)];
      console.log(computerChoice)
      return computerChoice
      
  }

//Write a function to play a round

  function winner(playerChoice, computerChoice){
      if(playerChoice == computerChoice){
          return "tie";
      }
      else if(
              (playerChoice == "rock" && computerChoice == "scissors") ||
              (playerChoice == "scissors" && computerChoice == "paper") ||
              (playerChoice == "paper" && computerChoice == "rock")  
      ){
          return "player"
      }
      else{
          return "computer"
      }
     
  }

  function playRound(playerChoice, computerChoice){
          const result = winner(playerChoice, computerChoice);
          if(result == "tie"){
              return "It's a tie!"
          }else if(result == "player"){
              return "You win!"
          }else{
              return "You lose!"
          }
  }

  //Get player choice

  function getPlayerChoice(){
      let validatedInput = false;
      while(validatedInput == false){
          const choice = prompt("Rock, paper, or scissors?");
          if(choice == null){
              continue;
          }
          const choiceInLower = choice.toLowerCase();
          if(options.includes(choiceInLower)){
              validatedInput = true;
              return choiceInLower;
          }
      }
  }
  
  //Play 5 rounds 

  function playGame(){
  
      let scorePlayer = 0;
      let scoreComputer = 0;
      console.log("Welcome!")
      for (let i = 0; i < 5; i++){
          const playerChoice = getPlayerChoice();
          const computerChoice = getComputerChoice();
          console.log(playRound(playerChoice, computerChoice));
          if (winner(playerChoice, computerChoice) == "player"){
              scorePlayer++;
          } else if (winner(playerChoice, computerChoice) == "computer"){
              scoreComputer++;
          }
      }

      console.log("Game Over")
      if(scorePlayer > scoreComputer){
          console.log("You are the winner!")
      }else if (scorePlayer < scoreComputer){
          console.log("Computer is the winner!")
      }else{
          console.log("It's a tie!");
      }
  }

  playGame()