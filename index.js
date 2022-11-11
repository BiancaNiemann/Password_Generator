const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')

function generator() {
            
    let characterNum = document.getElementById('amount').value

    passwordOne.textContent = ''
    passwordTwo.textContent = ''
    
    for (let i = 0; i < characterNum; i++) {
                          
    let random1 = Math.floor(Math.random() * characters.length)
     passwordOne.textContent += characters[random1]
            
    let random2 = Math.floor(Math.random() * characters.length) 
    passwordTwo.textContent += characters[random2] 
    } 
}

function copyOne() {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = passwordOne.textContent
    inp.select();
    document.execCommand('copy');
    inp.remove()
}

function copyTwo() {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = passwordTwo.textContent
    inp.select();
    document.execCommand('copy');
    inp.remove()
}


