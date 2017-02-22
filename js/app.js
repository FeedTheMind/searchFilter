// Function form of "strict" statement
(function () {
  'use strict';
}());

// Prevent code from executing before it's ready
  // Technically, not needed, as script is before closing </body>
    // But good practice
$(document).ready( () => {
  // Store array of employee names with selector
  var employeeNames = $('.employeeDetails > h3');

  // Create array of text data from HTML elements
  const lowerCaseNames = [];

  for (var i = 0; i < employeeNames.length; i++) {
    lowerCaseNames.push(employeeNames[i].textContent.toLowerCase());
  }

  // Use JS to create HTML element
  var searchBox = "<h2>Employees</h2> <div class='employeeSearch'> <input class='searchInput' placeholder='Search for employees.'></div>";

  // Use jQuery to add said HTML
  $('.pageHead').html(searchBox);
  var $search = $('.searchInput');

  $search.keyup(() => {
    var $searchVal = $search.val().trim();

    if ($searchVal === '') {
      $search.removeClass('changeInput');
    } else {
      $search.addClass('changeInput');

      for (var i = 0; i < lowerCaseNames.length; i++) {
        if ($searchVal.toLowerCase() === lowerCaseNames[i]) {
          $(employeeNames[i]).addClass('matchedName');
        } else {
          $(employeeNames[i]).removeClass('matchedName');
        }
      }
    }
  });
}); // document function
