//your JS code here. If required.
function communicateWithAliens() {
  console.log("Aliens have sent a microtask!");

  // Microtask 1
  Promise.resolve().then(() => {
    console.log("Microtask 1 processed");
  });

  // Microtask 2
  Promise.resolve().then(() => {
    console.log("Microtask 2 processed");
  });

  // Macrotask (setTimeout)
  setTimeout(() => {
    console.log("Macrotask (setTimeout) processed");
  }, 0);

  // Microtask 3
  Promise.resolve().then(() => {
    console.log("Microtask 3 processed");
  });

  console.log("Communication with aliens ongoing...");

  // Macrotask (setTimeout)
  setTimeout(() => {
    console.log("Another Macrotask (setTimeout) processed");
  }, 0);
}

// Start the communication
console.log("Initializing communication with aliens...");
communicateWithAliens();
console.log("Communication initiated!");