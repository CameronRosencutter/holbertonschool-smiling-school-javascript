function filterCards() {
  // Get the entered keywords
  var keywords = $('#searchInput').val().toLowerCase().trim();

  // Show/hide cards based on keywords
  $('.results .video-card').each(function() {
    var cardKeywords = $(this).data('keywords').toLowerCase();
    if (cardKeywords.includes(keywords)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

// Initial call to filter on page load
$(document).ready(function() {
  filterCards();
});