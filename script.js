// 
// Settings
// 
var max_number_of_themes = 5;

// 
// Variables
// 
var number_of_themes = 2;

// 
// Main
// 


// Function: Add Theme
function addTheme() {

    // Check if the number of themes is less than the maximum number of themes
    if (number_of_themes <= max_number_of_themes) {

        // Add a new theme div 
        var new_theme = document.createElement("div");
        // Add a class
        new_theme.className = "theme_container";
        // Add an id containing the number
        new_theme.id = "theme_container_" + number_of_themes;
        // Add the theme div to the theme container
        document.getElementById("generator_container").appendChild(new_theme);

        // Create a theme delete button
        var theme_delete_button = document.createElement("div");
        // Add a class
        theme_delete_button.className = "theme_delete_button";
        // Add an X to the theme delete button
        theme_delete_button.innerHTML = "<div onclick='removeTheme(" + number_of_themes + ")' class='theme_delete_button_x'>X</div>";
        // Add the theme delete button to the theme container
        document.getElementById("theme_container_" + number_of_themes).appendChild(theme_delete_button);

        // Increase the number of themes
        number_of_themes++;
    }
}