const rivers = {
    nile: {
        continent: 'Africa',
        length: '6,650 km',
        outflow: 'Mediterranean'
    },
    amazon: {
        continent: 'South America',
        length: '6,575 km',
        outflow: 'Atlantic Ocean'
    },
    mississippi: {
        continent: 'North America',
        length: '6,275 km',
        outflow: 'Gulf of Mexico'
    },
    yangtze: {
        continent: 'Asia',
        length: '6,300 km',
        outflow: 'East China Sea'
    }
}

export const getInformation = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                rivers[name]
            )
        }, 1500)
    })
}

export const getList = () => {
    return fetch('http://localhost:3333/list')
        .then(data => data.json())
}

export const setItem = (item) => {
    console.log('item service', item)
    return fetch('http://localhost:3333/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
    .then(data => data.json())
}