const key ="8bbf4ce41878f91b115496300224b94d"

function ColocarDadosNaTela(dados){
  document.querySelector(".cid").innerHTML="Tempo em "+ dados.name
  document.querySelector(".tempo").innerHTML=Math.floor(dados.main.temp)+" ºC"
  document.querySelector(".texto-prevencial").innerHTML= dados.weather[0].description
  document.querySelector(".umidade").innerHTML="Umidade: "+dados.main.humidity +" %"
  document.querySelector(".icone-do-tempo").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function BuscarCidade(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  
  ColocarDadosNaTela(dados)
}

function ClickNoButton(){
   const cidade = document.querySelector(".input-cidade").value
   BuscarCidade(cidade)
}