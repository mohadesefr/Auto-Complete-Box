const inputElem = document.querySelector('input');
const autoBoxElem = document.querySelector('.autocom-box');
const inputContainerElem = document.querySelector('.search-input')


inputElem.addEventListener('keyup', function () {
    let userSearchWord = inputElem.value;

    if (userSearchWord) {

        let searchValue = suggestions.filter(function (suggest) {
            // includes shows the word that was in the letter in any position not the first letter 
            // return suggest.toLowerCase().includes(userSearchWord.toLowerCase());
            return suggest.toLowerCase().startsWith(userSearchWord.toLowerCase());

        });

        inputContainerElem.classList.add('active');
        suggestionsListGenerator(searchValue);

    } else {
        inputContainerElem.classList.remove('active');
    };

});

function suggestionsListGenerator(wordsArray) {
    let listItemArray = wordsArray.map(function (word) {
        return `<li>${word}</li>`
    });

    let customListItem;
    if (!listItemArray.length) {
        customListItem = `<li>${inputElem.value}</li>`
    } else {
        customListItem = listItemArray.join('');
    }

    autoBoxElem.innerHTML = customListItem;
    select();
};

function select() {
    let liElements = autoBoxElem.querySelectorAll('li');

    liElements.forEach(function (li) {
        li.addEventListener('click', function (e) {
            inputElem.value = e.target.textContent;
            inputContainerElem.classList.remove('active');

        });
    });

};