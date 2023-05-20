let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
let comodin
let state={
  totalSlots:0,
  availableSlots: 0,
  occupiedSlots: 0
};
function getParkingLotState(parking){
  for (i=0;i<parking.length;i++){
    for (j=0;j<parking[i].length;j++){
      parking[i][j] == 2 ? (state.availableSlots++, state.totalSlots++) : comodin = 1 ;
      parking[i][j] == 1 ? (state.occupiedSlots++, state.totalSlots++) : comodin = 1 ;
    }
  }
  return state
}



console.log(getParkingLotState(parking_state))