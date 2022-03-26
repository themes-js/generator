// 
// Variables
//
var list_of_themes = [];
var theme_js_file;
var file_name = "themes.js";

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
    // Make a string out of the list of themes
    var text_theme_list = JSON.stringify(list_of_themes);
    // The header section
    theme_js_file = "// themes.js by CuzImBisonratte\n";
    theme_js_file += "// generated on https://themes-js.github.io/generator/\n";
    theme_js_file += "// this is based on v3.0.0 of https://github.com/themes-js/themes.js\n";
    // The colorcodes section
    theme_js_file += "\n\n//\n// Colorcodes\n//\n\n";
    theme_js_file += "var themes_info_list = " + text_theme_list + ";\n";
    // The variables section
    theme_js_file += "\n\n//\n// Variables\n//\n\n";
    theme_js_file += "var doc_element = document.documentElement;\n";
    theme_js_file += "var number_of_themes = themes_info_list.length;\n";
    theme_js_file += "var current_theme = 0;\n";
    // The functions section
    theme_js_file += "\n\n//\n// Functions\n//\n\n";
    theme_js_file += "// The function that changes the theme\nfunction change_theme(change_to) {\n";
    theme_js_file += "  doc_element.style.setProperty('--body-background-color', themes_info_list[change_to].background_color);\n";
    theme_js_file += "  doc_element.style.setProperty('--body-text-color', themes_info_list[change_to].text_color);\n";
    theme_js_file += "  doc_element.style.setProperty('--nav-background-color', themes_info_list[change_to].nav_background_color);\n";
    theme_js_file += "  doc_element.style.setProperty('--nav-text-color', themes_info_list[change_to].nav_text_color);\n";
    theme_js_file += "  doc_element.style.setProperty('--extra-color-one', themes_info_list[change_to].extra_color_one);\n";
    theme_js_file += "  doc_element.style.setProperty('--extra-color-two', themes_info_list[change_to].extra_color_two);\n";
    theme_js_file += "  document.getElementById('themeToggleButton').innerHTML = themes_info_list[change_to].name;";
    theme_js_file += "}\n";
    theme_js_file += "// The function thats run on page load\n";
    theme_js_file += "function startTheme() {\n";
    theme_js_file += "    // Get the saved theme\n";
    theme_js_file += "    try {\n    theme=localStorage.getItem('theme');\n";
    theme_js_file += "    } catch(e) {\n";
    theme_js_file += "        // If there is no saved theme, set the theme to 0\n";
    theme_js_file += "        theme = 0;\n";
    theme_js_file += "    }\n";
    theme_js_file += "    // Change to the theme\n";
    theme_js_file += "    change_theme(theme);\n";
    theme_js_file += "}\n";
    theme_js_file += "// Run the function on page load\n";
    theme_js_file += "startTheme();\n";
    theme_js_file += "\n\n\n";
    theme_js_file += "// The function that runs on button click\n";
    theme_js_file += "function toggleTheme() {\n";
    theme_js_file += "    // Add 1 to the current theme\n";
    theme_js_file += "    current_theme++;\n";
    theme_js_file += "    // If the current theme is greater than the number of themes, set it to 0\n";
    theme_js_file += "    if (current_theme > number_of_themes - 1) {\n";
    theme_js_file += "        current_theme = 0;\n";
    theme_js_file += "    }\n";
    theme_js_file += "    // Change the theme\n";
    theme_js_file += "    change_theme(current_theme);\n";
    theme_js_file += "    // Save the theme\n";
    theme_js_file += "    localStorage.setItem('theme', current_theme);\n";
    theme_js_file += "}\n";

    // Minify the file if the user wants to
    if (minify) {
        // Remove all the comments (everything between // and \n)
        theme_js_file = theme_js_file.replace(/\/\/.*\n/g, "");
        // Remove all the line breaks
        theme_js_file = theme_js_file.replace(/\n/g, '');
        // Rewrite file name
        file_name = "themesjs.min.js";
    }

    // Create a download request to the browser
    var download_request = new XMLHttpRequest();
    download_request.open("GET", "data:text/javascript;charset=utf-8," + encodeURIComponent(theme_js_file), true);
    download_request.responseType = "blob";
    download_request.onload = function() {
        var blob = new Blob([this.response], { type: "text/javascript" });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = file_name;
        link.click();
    };
    download_request.send();

    // Clear the list of themes variable
    list_of_themes = [];
}