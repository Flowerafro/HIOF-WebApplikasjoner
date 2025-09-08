// Oppgave 1

document.getElementById("remove-btn").addEventListener("click", function () {
    const removeButton = document.getElementById("remove")
    removeButton.remove();
})

//document.body.style.fontFamily = "Arial, sans-serif";

// Oppgave 2
document.getElementById("change-btn").addEventListener("click", function () {
    const changeText = document.getElementById("change")
    changeText.innerText = "tekst byttet!"
})

// Oppgave 3

document.getElementById("input").addEventListener("input", function (event) {
    const changeInput = document.getElementById("input-text")
    changeInput.innerText = event.target.value
})

// Oppgave 4
const myList = ["item one", "item two", "item three"];

document.getElementById("write-list").addEventListener("click", function () {
    const writeList = myList.map(list => `<li>${list}</li>`).join("");
    document.getElementById("ul").innerHTML = writeList;
})

// Oppgave 5

/* 
gammel knotete løsning

document.getElementById("create").addEventListener("click", function () {
    if (document.getElementById("text").value === "h2") {
        const h2 = document.createElement("h2");
        h2.innerText = "h2-element";
        document.getElementById("placeholder").appendChild(h2);
    } else if (document.getElementById("text").value === "h3") {
        const h3 = document.createElement("h3");
        h3.innerText = "h3-element";
        document.getElementById("placeholder").appendChild(h3);
    } else if (document.getElementById("text").value === "p") {
        const p = document.createElement("p");
        p.innerText = "p-element";
        document.getElementById("placeholder").appendChild(p);
    } else if (document.getElementById("text").value === "span") {
        const span = document.createElement("span");
        span.innerText = "span-element";
        document.getElementById("placeholder").appendChild(span);
    }
    else {
        return alert("du må skrive h2 for å lage et h2-element")
    }
}) */

document.getElementById("create").addEventListener("click", function () {
    const value = document.getElementById("text").value;
    const allowedValues = ["h2", "h3", "p", "span"];
    if (allowedValues.includes(value)) {
        const newElement = document.createElement(value);
        newElement.innerText = `${value}-element`;
        document.getElementById("placeholder").appendChild(newElement);

    } else {
        alert("du må skrive h2, h3, p eller span for å lage et element");
    }
})

// Oppgave 6

document.getElementById("remove-li").addEventListener("click", function () {
    const liListItems = document.getElementById("list");
    liListItems.removeChild(liListItems.lastElementChild)
})

// Oppgave 7



// Oppgave 8
