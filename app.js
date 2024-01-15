let coachName = "Alex Ferguson";
let coachAge = 78;
let currentClub = "Manchester FC";
let trophiesWon = 27;

function createCoach(coachName, coachAge, currentClub, trophiesWon) {
  var Coach = [coachName, coachAge, currentClub, trophiesWon];
  return Coach;
}

try {
  var coach = createCoach(coachName, coachAge, currentClub, trophiesWon);
} catch (e) {}

var tacticalFormation = [4, 4, 3];

function createTacticalFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return play;
}

try {
  var formationObject = createTacticalFormation(tacticalFormation);
} catch (e) {}

function filterByDebut(year) {
  var data = players.filter(player => player.debut == year);
  return data;
}


function filterByPosition(position) {
  var data = players.filter(player => player.position == position);
  return data;
}


function filterByAward(awardName) {
  let Array = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        Array.push(players[i]);
      }
    }
  }
  return Array;
}

function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0,m=0;
  let j;
  for (let i = 0; i < players.length; i++)
    {
      for (j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
         {
            count++;       
        }
      }
    if (count == noOfTimes)
    {
      arr.push(players[i]);
    }
    count = 0;
  }
  return arr;
}


function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
}

function SortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

function FilterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filteredPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < filteredPlayers.length; i++) {
    for (let j = i + 1; j < filteredPlayers.length; j++) {
      if (filteredPlayers[i].awards.length < filteredPlayers[j].awards.length) {
        let temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}


function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter(player => player.country == country);
  return dataTwo.sort(compare);
}


function SortByNamexOlderThan(age) {
  var data = players.filter(player => player.age > age);
  return data;
}