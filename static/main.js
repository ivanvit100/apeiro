const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

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

function changeSpanContent(){
    let spanElement = document.querySelector("#ap");
    spanElement.textContent = window.innerWidth < 340 ? 
        `ООО "АПЕЙРО"` :
        `Общество с ограниченной ответственностью "АПЕЙРО"`;
}

function createCursor(){
    if(!isMobile){
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
        let linkElements = document.querySelectorAll(".link");
        linkElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                document.querySelectorAll(".custom-cursor").length === 0 && !isMobile && createCursor();
                cursor.classList.add('scale-up');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('scale-up');
            });
        });
        let textElements = document.querySelectorAll(".textCur");
        textElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('text-cursor');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('text-cursor');
            });
        });
    }
}
const handleLeave = () => {
    document.querySelector(".custom-cursor").remove();
};
const handleEnter = () => {
    document.querySelectorAll(".custom-cursor").length === 0 && !isMobile && createCursor();
};

if(!isMobile){
    document.body.addEventListener('mouseleave', handleLeave);
    document.body.addEventListener('mouseenter', handleEnter);
    window.addEventListener('resize', changeSpanContent);
}

let lastResFind;
updateSearch();
changeSpanContent();
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelectorAll(".custom-cursor");
    cursor.length === 0 && !isMobile && createCursor();
    try{
        if(!isMobile){
            cursor[0].style.left = (e.clientX - 15) + 'px';
            cursor[0].style.top = (e.clientY - 5) + 'px';
        }
    }catch(e){
        console.warn("[cursor] Not found");
    }
});

let tar = 0;
var json = {
    title: ['Базовый', 'Продвинутый', 'Базовый'],
    imgSrc: ['tar1', 'tar2', 'tar1'],
    description: ['Готовая платформа на основе ранее созданных без добавления дополнительных функций на программном уровне по желанию заказчика.', 
    'Платформа на основе ранее созданных с добавлением или изменением базовых функций на программном уровне по желанию заказчика.',
    'Готовая платформа на основе ранее созданных без добавления дополнительных функций на программном уровне по желанию заказчика.']
};

function listener(){
    document.querySelector('.next').addEventListener('click', () => {
        tar = tar < 2 ? tar + 1 : 1;
        tarUpdate();
    });
    document.querySelector('.prev').addEventListener('click', () => {
        tar = tar > 0 ? tar - 1 : 1; 
        tarUpdate();    
    });
}
function tarUpdate(){
    document.querySelector("#item").innerHTML = `
    <h1 class="textCur">${json.title[tar]}</h1>
    <svg class="switch prev link" viewBox="0 0 110 110">
        <path d="M90 7 L10 52 L90 97 Z" fill="none" stroke="black" stroke-width="10"/>
    </svg>
    <picture>
        <source srcset="./static/images/${json.imgSrc[tar]}.webp" alt="Тариф" class="itemImg" height="200" width="200" type="image/webp">
        <source srcset="./static/images/${json.imgSrc[tar]}.png" alt="Тариф" class="itemImg" height="200" width="200" type="image/png"> 
        <img src="./static/images/${json.imgSrc[tar]}.png" alt="Тариф" class="itemImg">
    </picture>
    <svg class="switch next link" viewBox="0 0 110 110">
        <path d="M10 7 L90 52 L10 97 Z" fill="none" stroke="black" stroke-width="10"/>
    </svg>
    <p class="textCur">${json.description[tar]}</p>`;
    listener();
}

!isMobile && createCursor();
listener();