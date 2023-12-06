$(document).ready(function () {
    // Initial filtering based on the default selected expertise level
    filterVideos($(".dropdown-toggle[data-toggle='dropdown']").first(), $(".dropdown-item[data-expertise='all']").first());

    // Handle dropdown item click
    $(".dropdown-item[data-expertise]").click(function () {
      var selectedExpertise = $(this);
      filterVideos(selectedExpertise.closest(".dropdown").find(".dropdown-toggle"), selectedExpertise);
    });

    function filterVideos(dropdownToggle, selectedOption) {
      // Update dropdown toggle text
      dropdownToggle.text(selectedOption.text());

      // Hide all video cards
      $(".video-card").hide();

      // Show video cards based on the selected expertise level
      if (selectedOption.data("expertise") !== "all") {
        $(".video-card[data-expertise='" + selectedOption.data("expertise") + "']").show();
      } else {
        // If "All" is selected, show all video cards
        $(".video-card").show();
      }
    }
  });

  $(document).ready(function () {
    // Initial sorting based on the default selected criteria
    sortVideos($(".dropdown-toggle[data-toggle='dropdown']").last(), $(".dropdown-item[data-most='all']").last());

    // Handle dropdown item click
    $(".dropdown-item[data-most]").click(function () {
      var selectedSort = $(this);
      sortVideos(selectedSort.closest(".dropdown").find(".dropdown-toggle"), selectedSort);
    });

    function sortVideos(dropdownToggle, selectedOption) {
      // Update dropdown toggle text
      dropdownToggle.text(selectedOption.text());

      // Hide all video cards
      $(".video-card").hide();

      // Show all video cards if 'All' is selected
      if (selectedOption.data("most") === "all") {
        $(".video-card").show();
      } else {
        // Show video cards based on the selected sorting criteria
        $(".video-card[data-most='" + selectedOption.data("most") + "']").show();
      }
    }
  });