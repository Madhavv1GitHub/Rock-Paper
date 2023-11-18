
let Playercount=0;
let Computercount=0;
let computerValue=document.querySelector('.computerImage');
let playerValue=document.querySelector('.playerImage');
          
                document.querySelector('button.rock').addEventListener("click",function(){
                    Computer()
                    playerValue.textContent="✊";
                    if(computerValue.textContent===playerValue.textContent)
                    {
                        document.querySelector('.result').textContent="Match Tie 🪢";
                    }
                    if(computerValue.textContent==="🖐️")
                    {
                        document.querySelector('.result').textContent="Computer Wins 😔";
                        document.querySelector('.computerwin').textContent=`Computer:${++Computercount}`;
                    }
                    if(computerValue.textContent==="✌️")
                    {
                        document.querySelector('.result').textContent="Player Wins 🥳";
                        document.querySelector('.playerwin').textContent=`Player:${++Playercount}`;
                    }
                    


                })
                
                
                
                document.querySelector('button.paper').addEventListener("click",function(){
                    Computer()
                    playerValue.textContent="🖐️";
                    if(computerValue.textContent===playerValue.textContent)
                    {
                        document.querySelector('.result').textContent="Match Tie 🪢";
                    }
                    if(computerValue.textContent==="✌️")
                    {
                        document.querySelector('.result').textContent="Computer Wins 😔";
                        document.querySelector('.computerwin').textContent=`Computer:${++Computercount}`;
                    }
                    if(computerValue.textContent==="✊")
                    {
                        document.querySelector('.result').textContent="Player Wins 🥳";
                        document.querySelector('.playerwin').textContent=`Player:${++Playercount}`;
                    }

                })
                
                
                
                document.querySelector('button.scissor').addEventListener("click",function(){
                    Computer()
                    playerValue.textContent="✌️";
                    if(computerValue.textContent===playerValue.textContent)
                    {
                        document.querySelector('.result').textContent="Match Tie 🪢";
                    }
                    if(computerValue.textContent==="✊")
                    {
                        document.querySelector('.result').textContent="Computer Wins 😔";
                        document.querySelector('.computerwin').textContent=`Computer:${++Computercount}`;
                    }
                    if(computerValue.textContent==="🖐️")
                    {
                        document.querySelector('.result').textContent="Player Wins 🥳";
                        document.querySelector('.playerwin').textContent=`Player:${++Playercount}`;
                    }

                })
               
                

    
  


function Computer()
{
    let ComputerMove=Math.random();
    if(ComputerMove>0 && ComputerMove<1/3)
{
    computerValue.textContent="✊";
}

if(ComputerMove>1/3 && ComputerMove<2/3)
{
    computerValue.textContent="✌️";
}

if(ComputerMove>2/3 && ComputerMove<1)
{
    computerValue.textContent="🖐️";
}

if(Playercount===5 )
{
    alert("PlayerWins");
    location.reload();
}
if(Computercount===5)
{
    alert("Computer Wins")
    location.reload();
}

}



            






