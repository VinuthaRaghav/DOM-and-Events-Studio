// Write your JavaScript code here.
// Remembertakeoff to pay attention to page loading!

const buttonTakeOff =document.getElementById("takeoff") 
const flightStatus = document.getElementById("flightStatus")
const shuttleBackground = document.getElementById("shuttleBackground")
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
const abbortMission = document.getElementById("missionAbort")
const landButton = document.getElementById("landing")

landButton.addEventListener("click",fnLanding)
buttonTakeOff.addEventListener("click",fnTakeOff)
abbortMission.addEventListener("click",fnMissionAbort)

function fnMissionAbort(){
    const isAbortMission = window.confirm("Confirm that you want to abort the mission.")
    if(isAbortMission){
        flightStatus.innerHTML= "Mission aborted."
        shuttleBackground.style.backgroundColor = "green"
        spaceShuttleHeight.innerHTML = 0
    }
}

function fnLanding(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    //if(islanding){
        flightStatus.innerHTML= "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"
        spaceShuttleHeight.innerHTML = 0
    //}
    
}

function fnTakeOff(){
  const isTakeOff =  window.confirm("Confirm that the shuttle is ready for takeoff")
  //window.alert(isTakeOff)
 // console.log(isTakeOff)
  if(isTakeOff){
      flightStatus.innerHTML = "Shuttle in flight."
      shuttleBackground.style.backgroundColor = "blue"
      currentHeight = Number(spaceShuttleHeight.innerHTML)
      spaceShuttleHeight.innerHTML = currentHeight + 10000
  }
}