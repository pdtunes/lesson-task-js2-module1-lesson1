const url =
  "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

async function getResult() {
  const response = await fetch(url);
  const results = await response.json();
  const breakingBad = results.data;
  const resultsContainer = document.querySelector (".card")
 
console.log (breakingBad)


  for (let i = 0; i < breakingBad.length; i++) {
    console.log(breakingBad[i].name);
    console.log(breakingBad[i].birthday)

    const name = breakingBad[i].name
    const birthday = breakingBad[i].birthday
    const nickName = breakingBad[i].nickname

    resultsContainer.innerHTML += `<div class="results"> 
    <h1>Name: ${breakingBad[i].name} </h1> 
    <p>Birthday: ${breakingBad[i].birthday} <p> 
    <p>Nickname: ${breakingBad[i].nickName} </p> 
    </div>`

    if (i === 6) {   
        break
        ;
          }

  }
}

getResult();
