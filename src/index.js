const uuidv5 = require('uuid/v5')
const bel = require('bel')

const apis = {
    gravatarMonster: {
        host: 'https://www.gravatar.com/avatar/',
        params: '?d=monsterid&s=256',
        hash: true
    },
    gravatarRetro: {
        host: 'https://www.gravatar.com/avatar/',
        params: '?d=retro&s=256',
        hash: true
    },
    gravatarIdenticon: {
        host: 'https://www.gravatar.com/avatar/',
        params: '?d=identicon&s=256',
        hash: true
    },
    githubIdenticon: {
        host: 'https://github.com/identicons/',
        params: '.png',
        space: ''
    },
    uiAvatars: {
        host: 'https://ui-avatars.com/api/?name=',
        params: '&size=420'
    },
    roboHash: {
        host: 'https://robohash.org/',
        params: '?set=set2&bgset=bg1&size=420x420'
    },
    adorableAvatars: {
        host: 'https://api.adorable.io/avatars/420/',
        params: '.png'
    }
}

let apiType = Object.keys(apis)[0]

const createHash = query => {
    let hash = uuidv5(query || '', uuidv5.DNS)
    hash = hash.replace(/-/g, '0')
    return hash
}

const processQuery = (query, api) => {
    query = query || 'a'
    if (typeof api.space === 'string') {
        query = query.replace(/\s/g, api.space)
    }
    if (api.hash) {
        query = createHash(query)
    }
    return query
}

const createImage = query => {
    const api = apis[apiType]
    query = processQuery(query, api)
    const img = bel`
        <img src=${api.host + query + api.params}>
    `
    return img
}

const updateImage = (img, query) => {
    const api = apis[apiType]
    query = processQuery(query, api)
    img.src = api.host + query + api.params
}

const input = bel`<input type='text' autofocus>`
const select = bel`
    <select>
        <option value="gravatarMonster">Gravatar Monster</option>
        <option value="gravatarRetro">Gravatar Retro</option>
        <option value="gravatarIdenticon">Gravatar Identicon</option>
        <option value="githubIdenticon">Github Identicon</option>
        <option value="uiAvatars">UI Avatars</option>
        <option value="roboHash">Robo Hash</option>
        <option value="adorableAvatars">Adorable Avatars</option>
    </select>
`
const img = createImage()

document.body.appendChild(input)
document.body.appendChild(select)
document.body.appendChild(bel`<br>`)
document.body.appendChild(bel`<br>`)
document.body.appendChild(img)

input.addEventListener('input', ev => {
    updateImage(img, input.value)
})

select.addEventListener('input', ev => {
    apiType = select.value
    updateImage(img, input.value)
})