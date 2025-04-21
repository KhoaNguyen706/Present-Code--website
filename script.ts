const htmltext:string=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Example Tabs</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" defer></script>
    <script src="script.js" defer></script>
</head>
<body>

<div class="code-dome" style="position: relative;">
    <div class="tab">
        <button class="tablinks" onclick="openCode(this, event, 'HTML')">HTML</button>
        <button class="tablinks" onclick="openCode(this, event, 'TS')">TS</button>
        <button class="tablinks" onclick="openCode(this, event, 'CSS')">CSS</button>
    </div>

    <button class="copy-btn" onclick="copyCode()" title="Copy Code to Clipboard">Copy</button>

    <div id="HTML" class="tabcontent">
    <pre><code id="codehtml" class="language-html"></code></pre></div>
        
    <div id="TS" class="tabcontent">
    <pre><code id="codets" class="language-ts"></code></pre></div>

    <div id="CSS" class="tabcontent">
    <pre><code id="codecss" class="language-css"></code></pre></div>
</div>
</body>
</html>`;
const tstext:string=`interface Book {
    title: string;
    author: string;
    yearPublished: number;
}
  
class Library {
    private books: Book[] = [];
  
    public addBook(book: Book): void {
        this.books.push(book);
    }
}
  
// Create a new Library instance
const myLibrary = new Library();
const set = new Set<number>();
  
// Add some books to the library
myLibrary.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 });
myLibrary.addBook({ title: "1984", author: "George Orwell", yearPublished: 1949 });
  
// List all books in the library
myLibrary.listBooks();`;
const csstext=`
/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}
  
  /* Style the buttons inside the tab */
.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
}
  
  /* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}
  
  /* Create an active/current tablink class */
.tab button.active {
    background-color: #ccc;
}
  
  /* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}
  
  
.copy-btn {
    float: right;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
}
  
.copy-btn:hover {
    background-color: #45a049;
}

code, pre {
    
}`;
function openCode(btn:HTMLElement,event:Event,id:string):void{
    const tabs = document.querySelectorAll(".tabcontent");
    const buttons = document.querySelectorAll(".tab button");
    tabs.forEach(tab=>{
        (tab as HTMLElement).style.display='none';
    })
    buttons.forEach(button=>{
        button.classList.remove("active");
    })
    const selected = document.getElementById(id);
    if (selected) {
        selected.style.display = "block";
    }

  // Add active class to the clicked button
    btn.classList.add("active");
    const copy = document.querySelector(".copy-btn");
    if (copy) {
        copy.textContent = "Copy";
    }
    
    Prism.highlightAll();
}
window.addEventListener("DOMContentLoaded",()=>{
    const firstTab = document.querySelector(".tablinks") as HTMLElement;
    if (firstTab) {
        firstTab.click();
    }

 
    (document.getElementById("codehtml") as HTMLElement).textContent =
        htmltext;
    (document.getElementById("codecss") as HTMLElement).textContent =
       csstext ;
    (document.getElementById("codets") as HTMLElement).textContent =
       tstext ;
    Prism.highlightAll();
})
function copyCode():void{
const copy_text = document.querySelector(".tabcontent[style*='display: block'] code");
const copy = document.querySelector(".copy-btn")
    if(copy_text && copy_text.textContent){
        navigator.clipboard.writeText(copy_text.textContent).then(()=>{
            copy!.textContent=`Copied!`

        })
    }else{
        copy!.textContent=`Copy`;
    }
}