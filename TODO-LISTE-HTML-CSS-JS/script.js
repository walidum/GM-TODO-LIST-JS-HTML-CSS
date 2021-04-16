function createNewNote() {
    var title = document.getElementById('title').value
    var content = document.getElementById('content').value

    var card = document.createElement('div')
    card.setAttribute('class', 'card')

    var head = document.createElement('div')
    head.setAttribute('class', 'head')
    card.appendChild(head)

    var headspan = document.createElement('span')
    headspan.innerHTML = title
    head.appendChild(headspan)

    var headimg = document.createElement('img')
    headimg.setAttribute('src', 'images/delete.png')
    headimg.setAttribute('onclick', 'remove(this)')
    head.appendChild(headimg)

    var text = document.createElement('div')
    text.setAttribute('class', 'text')
    card.appendChild(text)

    var spantext = document.createElement('span')
    spantext.innerHTML = content
    text.appendChild(spantext)

    var content = document.getElementById('id-content')
    content.appendChild(card)
    dShow();
    document.getElementById('title').value = ''
    document.getElementById('content').value = ''
}


function remove(el) {
    var toRemove = el.parentNode.parentNode
    toRemove.remove()
}

function show() {
    document.getElementById('form')
        .style.display = 'flex'
    document.getElementById('id-content')
        .style.display = 'none'
}

function dShow() {
    document.getElementById('form')
        .style.display = 'none'
    document.getElementById('id-content')
        .style.display = 'flex'
}