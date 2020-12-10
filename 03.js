
const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30, online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]

console.table (players)

const createPlayerCard = player =>{
    const containerRef = document.createElement ('div')
    containerRef.classList.add('player-card')
    
    const idRef = document.createElement('h4')
    idRef.classList.add('player-id')
    idRef.textContent = `ID: ${player.id}`
    
    const nameRef = document.createElement('p')
    nameRef.classList.add('product-description')
    nameRef.textContent = `Имя: ${player.name}`
    
    const timeRef = document.createElement('p')
    timeRef.classList.add('product-description')
    timeRef.textContent = `Время в игре: ${player.timePlayed} минут`
    
    const pointsRef = document.createElement('p')
    pointsRef.classList.add('product-description')
    pointsRef.textContent = `Набрано очков: ${player.points}`
    
    // const onlineRef = document.createElement('p')
    // onlineRef.classList.add('product-description')
    // online.textContent = `Онлайн: ${player.online}`
    
    containerRef.append (idRef, nameRef, timeRef, pointsRef)
    
    // const cardRootRef = document.querySelector('#root')
    // cardRootRef.appendChild (containerRef)

    return containerRef
}

const playersCards = players.map (player => createPlayerCard (player)) 

const playersListRef = document.querySelector ('.js-players')

playersListRef.append (...playersCards)

console.log (playersListRef)