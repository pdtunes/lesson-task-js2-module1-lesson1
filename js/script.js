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

    console.log(breakingBad[i]);

    resultsContainer.innerHTML += `<div class="card-body"> 
    <h5 class="card-title" ${breakingBad[i].name} </h5>
    <p class="card-text"> ${breakingBad[i].birthday} <p> 
    <p class="card-text"> ${breakingBad[i].nickname} </p> 
    </div>`

    if (i === 7) {   
        break;
          }

  }
}

getResult();
