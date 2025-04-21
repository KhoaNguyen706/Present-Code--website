var htmltext = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Code Example Tabs</title>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js\" defer></script>\n    <script src=\"script.js\" defer></script>\n</head>\n<body>\n\n<div class=\"code-dome\" style=\"position: relative;\">\n    <div class=\"tab\">\n        <button class=\"tablinks\" onclick=\"openCode(this, event, 'HTML')\">HTML</button>\n        <button class=\"tablinks\" onclick=\"openCode(this, event, 'TS')\">TS</button>\n        <button class=\"tablinks\" onclick=\"openCode(this, event, 'CSS')\">CSS</button>\n    </div>\n\n    <button class=\"copy-btn\" onclick=\"copyCode()\" title=\"Copy Code to Clipboard\">Copy</button>\n\n    <div id=\"HTML\" class=\"tabcontent\">\n    <pre><code id=\"codehtml\" class=\"language-html\"></code></pre></div>\n        \n    <div id=\"TS\" class=\"tabcontent\">\n    <pre><code id=\"codets\" class=\"language-ts\"></code></pre></div>\n\n    <div id=\"CSS\" class=\"tabcontent\">\n    <pre><code id=\"codecss\" class=\"language-css\"></code></pre></div>\n</div>\n</body>\n</html>";
var tstext = "interface Book {\n    title: string;\n    author: string;\n    yearPublished: number;\n}\n  \nclass Library {\n    private books: Book[] = [];\n  \n    public addBook(book: Book): void {\n        this.books.push(book);\n    }\n}\n  \n// Create a new Library instance\nconst myLibrary = new Library();\nconst set = new Set<number>();\n  \n// Add some books to the library\nmyLibrary.addBook({ title: \"The Hobbit\", author: \"J.R.R. Tolkien\", yearPublished: 1937 });\nmyLibrary.addBook({ title: \"1984\", author: \"George Orwell\", yearPublished: 1949 });\n  \n// List all books in the library\nmyLibrary.listBooks();";
var csstext = "\n/* Style the tab */\n.tab {\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #f1f1f1;\n}\n  \n  /* Style the buttons inside the tab */\n.tab button {\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    font-size: 17px;\n}\n  \n  /* Change background color of buttons on hover */\n.tab button:hover {\n    background-color: #ddd;\n}\n  \n  /* Create an active/current tablink class */\n.tab button.active {\n    background-color: #ccc;\n}\n  \n  /* Style the tab content */\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n  \n  \n.copy-btn {\n    float: right;\n    padding: 5px 10px;\n    cursor: pointer;\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n}\n  \n.copy-btn:hover {\n    background-color: #45a049;\n}\n\ncode, pre {\n    \n}";
function openCode(btn, event, id) {
    var tabs = document.querySelectorAll(".tabcontent");
    var buttons = document.querySelectorAll(".tab button");
    tabs.forEach(function (tab) {
        tab.style.display = 'none';
    });
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });
    var selected = document.getElementById(id);
    if (selected) {
        selected.style.display = "block";
    }
    // Add active class to the clicked button
    btn.classList.add("active");
    var copy = document.querySelector(".copy-btn");
    if (copy) {
        copy.textContent = "Copy";
    }
    Prism.highlightAll();
}
window.addEventListener("DOMContentLoaded", function () {
    var firstTab = document.querySelector(".tablinks");
    if (firstTab) {
        firstTab.click();
    }
    // Add some example code for testing
    document.getElementById("codehtml").textContent =
        htmltext;
    document.getElementById("codecss").textContent =
        csstext;
    document.getElementById("codets").textContent =
        tstext;
    Prism.highlightAll();
});
function copyCode() {
    var copy_text = document.querySelector(".tabcontent[style*='display: block'] code");
    var copy = document.querySelector(".copy-btn");
    if (copy_text && copy_text.textContent) {
        navigator.clipboard.writeText(copy_text.textContent).then(function () {
            copy.textContent = "Copied!";
        });
    }
    else {
        copy.textContent = "Copy";
    }
}
