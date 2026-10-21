function sendMessage(userName:string, isLooged: boolean) {
    console.log(`Olá ${userName}. Você ${!isLooged ? "não" : ""} ´pode logar.`)    
}

const userName = "Elioenai"
const isLooged = true

sendMessage(userName, isLooged)