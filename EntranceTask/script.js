window.addEventListener("load", () => {

    setOnClickListeners();

});

function setOnClickListeners()
{
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", addTechnology);

    let linkRemove = document.getElementById("linkRemove");
    linkRemove.addEventListener("click", removeAllTechnologies);
}

function addTechnology()
{
    let card = createCard();

    let input = document.getElementById("input");
    //let text = document.createTextNode(input.value);
    //card.appendChild(text);
    card.innerText = input.value;

    let grid = document.getElementById("grid");
    grid.appendChild(card);
}

function createCard()
{
    let card = document.createElement("p");

    card.style.border = "1px solid";
    card.style.padding = "10px";
    card.style.boxShadow = "1px 2px #888888";
    card.style.borderRadius = "20px";

    let height = 40;

    card.style.height = height + "px";
    card.style.width = "70%";

    card.style.lineHeight = (height/2 + 10) + "px";
    card.style.textAlign = "center";
    card.style.fontWeight = "bold";

    card.id = "item";

    return card;
}

function removeAllTechnologies(event)
{
    //prevent page reload
    event.preventDefault();

    let grid = document.getElementById("grid");
    let childNodes = grid.childNodes;
    //console.log(childNodes);
    for (let i = grid.childNodes.length - 1; i >= 0; i--)
    {
        //console.log("child node " + grid.childNodes[i] + " " + grid.childNodes[i].id);
        if (grid.childNodes[i].id == "item")
        {
            grid.removeChild(grid.childNodes[i]);
        }
    }
}