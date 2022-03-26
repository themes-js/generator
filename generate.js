// 
// Variables
//
var list_of_themes = [];

// 
// Functions
//


// 
// The generator
// 
function generate(minify) {

    // Get all elements with the class "theme_container"
    var theme_containers = document.getElementsByClassName("theme_container");

    // Get the number of theme containers
    var number_of_theme_containers = theme_containers.length;

    // Loop through all theme containers to save every theme to the list
    for (var i = 0; i < number_of_theme_containers; i++) {

        // Get the theme container
        var theme_container = theme_containers[i];

        // Get the theme name
        var theme_name = theme_container.getElementsByClassName("theme_name_input")[0].value;

        // Get the six colors
        var theme_background_color = theme_container.getElementsByClassName("theme_background_color_picker")[0].value;
        var theme_text_color = theme_container.getElementsByClassName("theme_text_color_picker")[0].value;
        var theme_nav_background_color = theme_container.getElementsByClassName("theme_nav_background_color_picker")[0].value;
        var theme_nav_text_color = theme_container.getElementsByClassName("theme_nav_text_color_picker")[0].value;
        var theme_extra_color_one = theme_container.getElementsByClassName("theme_extra_color_picker")[0].value;
        var theme_extra_color_two = theme_container.getElementsByClassName("theme_extra_color_picker")[1].value;

        // Create the theme
        var theme = {
            "name": theme_name,
            "background_color": theme_background_color,
            "text_color": theme_text_color,
            "nav_background_color": theme_nav_background_color,
            "nav_text_color": theme_nav_text_color,
            "extra_color_one": theme_extra_color_one,
            "extra_color_two": theme_extra_color_two
        };

        // Add the theme to the list of themes
        list_of_themes.push(theme);
    }

    // Make a File out of the list of themes


    // Create a download request to the browser
    var download_request = new XMLHttpRequest();
    download_request.open("GET", "data:text/javascript;charset=utf-8," + encodeURIComponent(theme_js_file), true);
    download_request.responseType = "blob";
    download_request.onload = function() {
        var blob = new Blob([this.response], { type: "text/javascript" });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "themes.js";
        link.click();
    };
    download_request.send();

    // Minify the file if the user wants to
    if (minify) {}

    // Clear the list of themes variable
    list_of_themes = [];
}