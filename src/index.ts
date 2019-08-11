import uuidv5 from 'uuid/v5'

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

const updateImage = (img: HTMLImageElement, link: HTMLPreElement, query: string) => {
    const api = apis[apiType]
    query = processQuery(query, api)
    img.src = api.host + query + api.params
    link.textContent = img.src
}

const input: HTMLInputElement = document.querySelector('input')
const select: HTMLSelectElement = document.querySelector('select')
const img: HTMLImageElement = document.querySelector('img')
const link: HTMLPreElement = document.querySelector('.link')

input.addEventListener('input', ev => {
    updateImage(img, link, input.value)
})

select.addEventListener('input', ev => {
    apiType = select.value
    updateImage(img, link, input.value)
})
