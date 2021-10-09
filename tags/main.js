const btnDelete = document.querySelector('ul li i')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const countTag = document.querySelector('.detail span')
const removeAll = document.querySelector('.detail button')

let tags = []
const maxTag = 10

input.addEventListener("keyup", addTag)

//when click input to type
function addTag(e) {
    //if type Enter
    if(e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, '')
        //Tags can have many ','
        if(tags.length < 10) {
            tag.split(',').forEach((tag) => {
                if(tag.length > 1 && !tags.includes(tag)) {
                    tags.push(tag) //add tag to tags
                    renderTag();
                    coutTag()
                }
            })
        }
    }
}

function renderTag() {
    //delete all li because it repeat
    ul.querySelectorAll('li').forEach((li) => li.remove())

    tags.slice().reverse().forEach((tag) => {
        //add ${tag} to delete tag in tags
        let liTag = `<li>${tag}<i class="uit uit-multiply" onclick = "removeElement(this, '${tag}')"></i></li>`
        ul.insertAdjacentHTML('afterbegin', liTag)
    })
    input.value = ""
}

function removeElement(i, tag) {
    //delete tag in tags
    const index = tags.indexOf(tag)
    tags = [...tags.slice(0, index), ...tags.slice(index+1)]
    //delete in ul DOM
    i.closest('li').remove()

    coutTag()
}

function coutTag() {
    countTag.innerText = maxTag - tags.length
}

//slove removeAll
removeAll.addEventListener('click', removeAllElement)

function removeAllElement() {
    //reset tags
    tags = []
    //delete li DOM
    ul.querySelectorAll('li').forEach((li) => li.remove())
    coutTag()
}





