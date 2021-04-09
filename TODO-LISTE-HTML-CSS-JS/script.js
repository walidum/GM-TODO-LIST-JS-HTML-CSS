function createNote() {
    var title = prompt('Entrer le titre de la note :')
    var content = prompt('Entrer le contenu de la note :')

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
    head.appendChild(headimg)

    var text = document.createElement('div')
    text.setAttribute('class', 'text')
    card.appendChild(text)

    var spantext = document.createElement('span')
    spantext.innerHTML = content
    text.appendChild(spantext)

    var content = document.getElementById('id-content')
    content.appendChild(card)
}