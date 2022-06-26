/* When get pun btn is clicked, fetch joke from API
    Then render the pun in the box using p element. */


let setUp = document.querySelector('.setUp');
let pun = document.getElementById('pun');
let punBtn = document.querySelector('.pun-btn');
const answerBtn = document.querySelector('.answer-btn');

alert('HAPPY BIRTHDAY!')

const getPun = async () => {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    const data = await response.json()
    console.log(data)
    if (data.type === 'single'){
      pun.innerHTML = data.joke
      pun.style.display = 'block'
    } else if(data.type === 'twopart'){
      setUp.innerHTML = data.setup
      pun.innerHTML = data.delivery
      pun.style.display = 'none'
    } 
    }
  
  catch (error) {
    console.log('Error!')
  }
}

function typeWriter(){
  let i = 0; 
  const speed = 50
  if (i < pun.length && i < setUp.length){
    pun.innerHTML += pun.charAt(i)
    setUp.innerHTML += setUp.charAt(i)
    i++;
    setTimeout(typeWriter, speed)
  }

}

function revealAnswer(){
  pun.style.display = 'block'
}

answerBtn.addEventListener('click', revealAnswer, typeWriter)
punBtn.addEventListener('click', getPun, typeWriter); 
