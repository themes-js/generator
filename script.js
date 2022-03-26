// 
// Settings
// 
var max_number_of_themes = 5;

// 
// Variables
// 
var number_of_themes = 1;

// 
// Theme - Container
//
var theme_container = document.getElementById("empty_theme_container");


// 
// Main
// 

// Function: Add Theme
function addTheme() {

    // Check if the number of themes is less than the maximum number of themes
    if (number_of_themes <= max_number_of_themes) {

        // Create a new theme div 
        var new_theme = theme_container.cloneNode(true);
        // Add the right class
        new_theme.className = "theme_container";
        // Add an id containing the container number
        new_theme.id = "theme_container_" + number_of_themes;
        // Add the theme div to the theme container
        document.getElementById("generator_container").appendChild(new_theme);

        // Increase the number of themes
        number_of_themes++;
    }
}

// Function: Remove Theme
function removeTheme(element) {
    // Remove the theme container
    document.getElementById(element.parentNode.parentNode.id).remove();
    // Increase the max number of themes
    max_number_of_themes++;
}