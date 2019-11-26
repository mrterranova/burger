// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatDaBurger").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = 0;
  
      var eatenBurgers = {
        devoured: eaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: eatenBurgers
      }).then(
        function() {
          console.log("changed eaten", eatenBurgers);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurgers = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 1
      };
  
      // Send the POST request.
      $.ajax("/api/burger/", {
        type: "POST",
        data: newBurgers
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".remove").on("click", function() {
      var id = $(this).data("id");
      console.log("DELETE")
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Eaten burger ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  