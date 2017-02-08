// Function form of "strict" statement
(function () {
  'use strict';
}());

// Prevent code from executing before it's ready
  // Technically, not needed, as script is before closing </body>
    // But good practice
$(document).ready(function () {
  // Use JS to create HTML element
  var searchBox = "<h2>Employees</h2> <div class='employeeSearch'> <input class='searchInput' placeholder='Search for employees.'></div>";
  // 10 is placeholder, for now
  var employeesPerPage = 10;
  // Use clone to make a deep copy of employeeList for later use
  var listClone =  $('.employeeList > li').clone();
  // Use jQuery to add said HTML
  $('.pageHead').html(searchBox);

  $('.pageContainer').append("<div class='pagination'></div>");
});
