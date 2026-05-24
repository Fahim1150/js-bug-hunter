if (a) { // Depth 1
  if (b) { // Depth 2
    if (c) { // Depth 3
      if (d) { // Depth 4 -> WARNING TRIGGERED
        console.log("Error here"); // No warning (flag is true)
        console.log("And here");   // No warning (flag is true)
      } // Depth 3 -> FLAG RESETS
    }
    if (e) {
       if (f) { // Depth 4 -> WARNING TRIGGERED AGAIN (New block)
          // ...
       }
    }
  }
}