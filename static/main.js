async function search(textToFind, lastResFind){
    event.preventDefault();
    const elements = document.querySelectorAll("span#search");
    elements.forEach((element) => {
        const match = element.textContent;
        const newTextNode = document.createTextNode(match);
        element.replaceWith(newTextNode);  
    });
    if(textToFind != ""){
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(textToFind, 'gi'), 
            function(match) {
                return `<span id='search'>${match}</span>`;
        });
        lastResFind = textToFind;
        canvas = document.querySelector(".hyper");
        ctx = canvas.getContext("2d");
        setupStars();
        updateStars();
        window.location = `#search`;
        updateSearch();
    }
}
function updateSearch(){
    document.querySelector('form').addEventListener('keydown', async function(e) {
        if(e.keyCode === 13) 
            await search(document.querySelector('.search__input').value.trim().toLowerCase(), lastResFind);
    });
    document.querySelector('form').addEventListener('focusout', async function(e) {
        await search(document.querySelector('.search__input').value.trim().toLowerCase(), lastResFind);
    });
}
let lastResFind;
updateSearch();