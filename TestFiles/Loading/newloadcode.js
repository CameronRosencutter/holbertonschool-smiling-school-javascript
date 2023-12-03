    document.addEventListener("DOMContentLoaded", function() {
      // Simulate a delay (e.g., 3 seconds) before displaying the content
      setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 3000);
    });