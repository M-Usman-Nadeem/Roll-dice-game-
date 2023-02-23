
let dice = [1, 2, 3, 4, 5, 6];

let arr=[
   {
     name:playerOne.value,
     score:0,
     current:0
   },
   {
     name:playerTwo.value,
     score:0,
     current:0
   }
  ]
  function getClass(num){
  
    return num


  }
function render(win=""){
  arr[0].name=playerOne.value
  arr[1].name=playerTwo.value
let html='';
  arr.forEach((item,index)=>{
    html+=`\                                                      
    <div id='player${index+1}'  class="player${index+1} ${index+1==getClass(activePlayer)?'actived':''} ">
    <div id="pl${index+1}Text">        <h1 id="headingOfPlayer${index+1}">${item.name}</h1>
    <b id="score${index+1}">${item.score}</b>
<h2>

Current
</h2>
<b id="current${index+1}">${item.current}</b>

</div>

</div >
    `
  })

  document.querySelector('#AreaofPlaying').innerHTML=html
 

  
}

function reload(){
  window.location.reload()
}
let changePlayer=()=>{
  activePlayer=activePlayer==1?2:1;
  
}
 
  let activePlayer=1;
  function allData(){
    function changingPlayer(){
      whiteDiv.classList.add('hide')
      
      arr[activePlayer-1].score+=Number( arr[activePlayer-1].current)
    
      if(arr[activePlayer-1].score>=15){
    
    arr[activePlayer-1].current=0
    render('win')
    document.getElementById(`headingOfPlayer${activePlayer}`).textContent=`${playerOne.value}(winner)`
     gameButton.disabled=false
     diceButton.disabled=true
     holdButton.disabled=true
    
     return
      }
    arr[activePlayer-1].current=0
    changePlayer()
    render()
    
    }
    let diceButton=document.getElementById('dice')
    let holdButton=document.getElementById('changingPlayer')
let gameButton=document.getElementById('game')
let whiteDiv=document.getElementById('whiteDiv')
let diceNumber;
    function diceButtonFunction(){

        console.log(arr)
        gameButton.disabled=true
      diceNumber=dice[Math.floor(Math.random()*dice.length)]
      if(diceNumber!=1){
      
        whiteDiv.textContent=diceNumber
        arr[activePlayer-1].current+=diceNumber
        whiteDiv.classList.remove('hide')
        render()
        
      }
      else{
      
        arr[activePlayer-1].current=0
        alert(`player ${activePlayer} lost its turn due to dice no 1`) 
        changingPlayer()
        render()
      }
    }
  

diceButton.addEventListener('click',diceButtonFunction)


holdButton.addEventListener('click',changingPlayer)
gameButton.addEventListener('click',reload)
}
document.getElementById('startGamebutton').addEventListener('submit',function(e){
  e.preventDefault()    
 document.querySelector('main.mainFormSection').classList.add('hide')
 document.querySelector('.afterSubmitFormArea').classList.remove('hide')
 render()
 allData()


})