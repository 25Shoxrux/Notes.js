import { user } from "./module/db.js";
let id1 = document.querySelector('#one')
let id2 = document.querySelector('#two')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let coiunter = document.querySelector('.counter')
let info = document.querySelectorAll('.info')
let text = document.querySelector('.text')
let TitelText = document.querySelector('.TitleText  ')

id1.onclick = () => {
    id2.classList.remove('active')
    id1.classList.add('active')


    info.forEach(e => {
        console.log(e);
        e.style.display = 'block'
      })
    
      box2.style.display = 'block'
      box3.style.display = 'block'
    
      text.style.display = 'block'
      TitelText.innerHTML = 'All todos'
}

id2.onclick = () => {
    id1.classList.remove('active')
    id2.classList.add('active')
    
  info.forEach(e => {
    console.log(e);
    e.style.display = 'none'
  })

  box2.style.display = 'none'
  box3.style.display = 'none'

  text.style.display = 'none'
  TitelText.innerHTML = 'ONLY TODAY TODOS'

}

let storage = JSON.parse(localStorage.getItem('div')) || user



// coiunter.innerHTML = box1.length
function reload(arr) {
    box1.innerHTML = ''
    for (let item of arr) {
        

        let div = document.createElement('div')
        let content = document.createElement('div')
        let label = document.createElement('label')
        let inp = document.createElement('input')
        let fake = document.createElement('span')
        let textCheck = document.createElement('span')
        let p = document.createElement('p')
        let timer = document.createElement('span')
        let month = document.createElement('div')        
        let date = document.createElement('div')





        div.classList.add('div')
        content.classList.add('content')
        label.classList.add('label')
        fake.classList.add('fake')
        textCheck.classList.add('textCheck')
        timer.classList.add('timer')
        month.classList.add('month')        
        date.classList.add('date')
        
        
        textCheck.innerHTML = 'Buy S Plaid!'
        inp.type = 'checkbox'
        p.innerHTML = item.title
        
        
        if(item.completed){
            inp.checked = true
            inp.classList.add('checkbox')
            inp.classList.add('active')
        } else{
            inp.classList.add('checkbox')
            inp.checked = false
        }
        
        fake.classList.add(item.id)
        
        div.append(content)
        content.append(label, p, timer)
        timer.append(month , date)
        label.append(inp, fake, textCheck)
        
        
        inp.onclick = (event) => {
            let a = event.target.nextSibling
            console.log(a);
            if(a.classList.contains('active')){
                a.classList.add('active')
                div.style.opacity = ".4"
            }else{
                a.classList.remove('active')
                div.style.opacity = "1"
            }
   
            item.completed = inp.checked
        

            localStorage.setItem('div', JSON.stringify(storage))
        }


    let today = new Date();
    
    today.setDate( today.getDate() + item.left )

    
    let a = { month: 'long', day: 'numeric' };
    let now = today.toLocaleString('en') ;
        

if (item.left <= 1) {
    box1.append(div)

    timer.innerHTML = 'Today'
 
        } else if (item.left > 1 && item.left <= 2) {
            box2.append(div)
            date.innerHTML =  now
        } else if (item.left >= 3) {
            box3.append(div)
            timer.innerHTML = now
        }
    }
}
reload(storage)

