//////////////////////////
//  Team Stats Project  //
//   from Codecademy    //
//  written by Zim Agu  //
//////////////////////////





const team = {




    _players: [
        // Player #1
        {
            first_Name: `Lebron`,
            last_Name: `James`,
            age: 36,
        },


        // Player #2
        {
            first_Name: `Kevin`,
            last_Name: `Durant`,
            age: 32,
        },


        // Player #3
        {
            first_Name: `Joel`,
            last_Name: `Embiid`,
            age: 26,
        },


    ], // End of players property





    _games: [
        // Game #1
        {
            opponent: `Rockets`,
            team_Points: 117,
            opponent_Points: 100,
        },


        // Game #2
        {
            opponent: `Nuggest`,
            team_Points: 122,
            opponent_Points: 116,
        },


         // Game #3
         {
            opponent: `Heat`,
            team_Points: 137,
            opponent_Points: 134,
        },

    ], // End of games property









    // Getter methods for the _games and _playes property

    get get_Players () {

        return this._players;
    },


    get get_Games () {
        return this._games;
    },







    // Method to add a player to the _player array
    addPlayer (first_Name, last_Name, age) {

        let new_Player = {
            first_Name: first_Name,
            last_Name: last_Name,
            age: age,
        };

        this.get_Players.push(new_Player);

    },



    addGame (opponent_Name, team_Points, opponent_Points) {

        let new_Game = {
            opponent_Name: opponent_Name,
            team_Points: team_Points,
            opponent_Points: opponent_Points,
        };

        this.get_Games.push(new_Game);

    },

};












//Adds three players to the _player property
team.addPlayer(`Steph`, `Curry`, 32);
team.addPlayer(`Lisa`, `Leslie`, 48);
team.addPlayer(`Bugs`, `Bunny`, 80);



//Adds three gamrs to the _game property
team.addGame(`Bulls`, 128, 124);
team.addGame(`Raptors`, 123, 115);
team.addGame(`Pistons`, 130, 115);



console.log(`Players:`);
console.log(team.get_Players);


console.log(``);


console.log(`Games:`);
console.log(team.get_Games);

