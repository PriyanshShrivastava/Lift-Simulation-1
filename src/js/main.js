let simulateEl = document.getElementById("btn-simulate");

simulateEl.addEventListene("click", () => {
  let floorValue = document.getElementById("#floors").value;
  let liftValue = document.getElementById("#lifts").value;

  if (floorValue == "" || liftValue == "") {
    alert("please enter the value");
  } else if (floorValue >= 8) {
    alert("please enter max 7 floor");
  } else if (floorValue <= 0 && liftValue <= 0) {
    alert("please select valid number of floors and lifts");
  } else if (floorValue <= 0) {
    alert("please select valid number of floors");
  } else if (liftValue <= 0) {
    alert("please select valid number of lifts");
  } else if (window.innerWidth <= 500 && +liftValue > 4) {
    alert("This screen size can't have more than 4 lifts");
  } else if (
    window.innerWidth > 600 &&
    window.innerWidth <= 768 &&
    +liftValue > 5
  ) {
    alert("This screen size can't have more than 5 lifts");
  } else if (
    window.innerWidth > 500 &&
    window.innerWidth <= 1024 &&
    +liftValue > 7
  ) {
    alert("This screen size can't have more than 7 lifts");
  } else if (
    window.innerWidth > 500 &&
    window.innerWidth <= 1440 &&
    +liftValue > 11
  ) {
    alert("This screen size can't have more than 11 lifts");
  } else if (
    window.innerWidth > 500 &&
    window.innerWidth <= 2560 &&
    +liftValue > 20
  ) {
    alert("This screen size can't have more than 20 lifts");
  }
});
