// code by Vương An Khang PTIT 

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
//select elements
const completeInput = $('.input-complete')
const completeBox = $('.complete-box')
const completeWrapper = $('.wrapper-complete')
const icon = $('.search-icon')

//when type input
completeInput.onkeyup = (e) => {
    let userValue = e.target.value
    if(userValue) {
        let emptyArray = [];
        //filter all element start with user typed
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userValue.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`
        })
        //match to array to string
        let htmls = emptyArray.join('')
        //visibale complete-box
        completeWrapper.classList.add('active')
        renderView(htmls)

        let listItem =  completeBox.querySelectorAll('li')

        for(let i = 0; i < listItem.length; i++) {
            listItem[i].setAttribute('onclick', 'clickItem(this)')
        }
    }else{
        //hide complete-box
        completeWrapper.classList.remove('active')
    }
}

function renderView(htmls) {
    if(!htmls) {
        let currentValueInput =  completeInput.value
        let currentHTMLs = `<li>${currentValueInput}</li>`
        completeBox.innerHTML = currentHTMLs
    }else{
        completeBox.innerHTML = htmls
    }
}

function clickItem(item) {
    const valueItem = item.textContent
    completeInput.value = valueItem
    completeWrapper.classList.remove('active')

    //when click to icon-seach
    icon.onclick = () => {
        let webLink = `https://www.google.com/search?q=${valueItem}`
        icon.setAttribute('href', webLink)
        icon.click()
    }
}