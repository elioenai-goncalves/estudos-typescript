const stringNumber1: [string, number] = ['Elioenai', 36]; //correto

const stringNumber3: [string, number] = ['Elioenai', 'Elioenai']; //errado - tipos incorretos, dois strings

const stringNumber2: [string, number] = [36 , 'Elioenai']; //errado - ordem de index errada

const [Name, setName] = useState("Elioenai"); //isso é uma "tupla", aonde "useState" está retornando uma "tupla"

let color: [number, number, number] = [255, 0 ,0]; //outro exemplo de "tupla"

let bgColor: [number, number, number, number?] = [255, 0, 0] //como o último valor é opcional não dará erro 


