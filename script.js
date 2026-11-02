// ===== Room 2047 =====

// Variables that remember what the player has done
let itemsFound = 0;
let foundSketchbook = false;
let foundCamera = false;
let foundBook = false;
let foundMusicbox = false;

// Show one scene and hide all the others
function goTo(sceneName) {
  document.getElementById("hallway").style.display = "none";
  document.getElementById("classroom").style.display = "none";
  document.getElementById("box").style.display = "none";
  document.getElementById("whiteboard").style.display = "none";
  document.getElementById("office").style.display = "none";
  document.getElementById("ending").style.display = "none";

  document.getElementById(sceneName).style.display = "block";
  window.scrollTo(0, 0);
}

// Hallway: read the notice
function readNotice() {
  document.getElementById("noticeText").textContent =
    "NOTICE: Unclaimed items in Room 2047 will be thrown out tomorrow at 8 AM.";
}

// Box: look at an item
function lookAt(item) {
  let text = "";

  if (item === "sketchbook") {
    text = "Mira's sketchbook, claim #1. She drew the study group every week.";
    if (foundSketchbook === false) {
      foundSketchbook = true;
      itemsFound = itemsFound + 1;
    }
  } else if (item === "camera") {
    text = "Daniel's film camera, claim #3. The last photo is dated March 12, 2020.";
    if (foundCamera === false) {
      foundCamera = true;
      itemsFound = itemsFound + 1;
    }
  } else if (item === "book") {
    text = "Sofia's library book, claim #7. A note says: see you after the break.";
    if (foundBook === false) {
      foundBook = true;
      itemsFound = itemsFound + 1;
    }
  } else if (item === "musicbox") {
    text = "Theo's music box, claim #9. Inside the lid it says: for Thursdays.";
    if (foundMusicbox === false) {
      foundMusicbox = true;
      itemsFound = itemsFound + 1;
    }
  }

  document.getElementById("itemText").textContent = text;
  document.getElementById("itemCount").textContent = itemsFound;

  // When all 4 items are found, show the next button
  if (itemsFound === 4) {
    document.getElementById("boxNext").classList.remove("hidden");
  }
}

// Office: check the code
function checkCode() {
  let code = document.getElementById("codeInput").value;

  if (code === "7319") {
    document.getElementById("codeText").textContent = "Click. The door opens.";
    document.getElementById("officeInside").classList.remove("hidden");
  } else {
    document.getElementById("codeText").textContent =
      "Wrong code. Put the claim numbers in the order they sat.";
  }
}

// Office: the one choice changes a line in the ending
function choose(answer) {
  if (answer === "yes") {
    document.getElementById("choiceText").textContent =
      "You carry the box home and start looking up four names.";
  } else {
    document.getElementById("choiceText").textContent =
      "You leave the box where it is, with a new note on top: 'Someone came back.'";
  }
  goTo("ending");
}

// Start on the hallway
goTo("hallway");
