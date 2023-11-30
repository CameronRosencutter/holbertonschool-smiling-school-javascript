setTimeout(function () {
    document.querySelector('.div1').style.display = 'none';
    
    // Function to show the second div after another delay
    setTimeout(function () {
      document.querySelector('.div2').style.display = 'block';
    }, 0); // Adjust the delay as needed
  }, 2000);


  setTimeout(function () {
    document.querySelector('.div4').style.display = 'none';
    
    // Function to show the second div after another delay
    setTimeout(function () {
      document.querySelector('.div5').style.display = 'block';
    }, 0); // Adjust the delay as needed
  }, 2000);