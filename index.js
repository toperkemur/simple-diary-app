var entryTitle = document.getElementById("entry-title");
var entry = document.querySelector(".entry");
var submitButton = document.getElementById("submit-button");
var entries = document.getElementById("entries");
var entriesNumber = document.getElementById("entries-number")
var entryNumber = 1;


function submitEntry(event) {
    event.preventDefault();
    console.log("event prevented");
    console.log(entryTitle.value);


    var createEntry = document.createElement("div");
    createEntry.className = "entry-text";
    var createTitle = document.createElement("h3");
    createTitle.className = "post-title";
    createTitle.innerText = entryTitle.value;
    createEntry.appendChild(createTitle);
    var createParagraph = document.createElement("p");
    createParagraph.className = "entry-paragraph";
    createParagraph.innerText = entry.value;
    createEntry.appendChild(createParagraph);
    createEntry.style.display = "none";
    entries.appendChild(createEntry);



    entryTitle.value = " ";
    entry.value = " ";

    var createPostNumber = document.createElement("button");
    createPostNumber.className = "entry-number";
    createPostNumber.innerText = entryNumber;
    entriesNumber.appendChild(createPostNumber);

    createPostNumber.addEventListener("click", function() {
        var allEntries = document.querySelectorAll(".entry-text");
        console.log(allEntries)
        for (var i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = "none";
        }
        createEntry.style.display = "block";
    });



    entryNumber++;





}

submitButton.addEventListener("click", submitEntry);