var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Hansolo",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Chewbacca",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Darth Vader",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

let pilot = personnel.map(function(item){
    return document.write(`
    <br>
    ID : ${item.id}<br>
    Name : ${item.name}<br>
    Piloting Score : ${item.pilotingScore}<br>
    Shooting Score : ${item.shootingScore}<br>
    Is Force User : ${item.isForceUser}<br>
    Total Score : ${item.pilotingScore + item.shootingScore}<br>
    <br>
    `)
})

const forceUser = personnel.filter((pilot) => pilot.isForceUser === true);
const totalScoreForceUser = forceUser.reduce((acc,pilot) => acc + pilot.pilotingScore + pilot.shootingScore,0);

document.write(`Total Score Force User: ${totalScoreForceUser} <br>`)

const notForceUser = personnel.filter((pilot) => pilot.isForceUser === false);
const totalScoreNotForceUser = notForceUser.reduce((acc,pilot) => acc + pilot.pilotingScore + pilot.shootingScore,0);

document.write(`Total Score Not Force User: ${totalScoreNotForceUser}<br>`)
document.write(`Total all Score : ${totalScoreForceUser + totalScoreNotForceUser}`)
