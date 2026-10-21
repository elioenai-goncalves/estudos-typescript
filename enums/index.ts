//ENUM TIPO NUMÉRICO

enum Colors {
    Red, //Red = 1, camos quisermos iniciar com 1 ao invés de 0
    Blue,
    Green
}

function showColor(color){
    console.log(color)
}

showColor(Colors.Blue) //aqui imprimirá o número 1, que é o enum dessa cor



//podemos percorrer a impressão do enum usando o laço "for"
for (const key in Colors) {
    console.log(key)
}



enum UserResponse {
    No = 0,
    Yes = 1
}

function respondedEmail(recipient: string, userResponse: UserResponse): void {
    //... salvar no banco se o usuário respondeu ou não
}

respondedEmail('Elioenai', UserResponse.Yes)



enum TradeType {
    ACAO = 9281,
    TESOURO_DIRETO = 3221,
    TESOURO_SELIC = 6554
}

saveTrade(TradeType.TESOURO_DIRETO)



enum StatusCodes {
    OK = 200,
    BadRequest = 400
}

returnStatus(StatusCodes.BadRequest)
returnStatus(StatusCodes['OK'])
returnStatus(StatusCodes[400])


//ENUM TIPO STRING
enum Gender {
    M = "Masculino",
    F = "Feminino"
}

genderName(Gender.F)

