const DOMAIN = 'https://trefle.io/api/v1/plants/search?token='
const API_KEY = 'tAzty-RzZNho8aFNdhldc4vZIE3fuCZqr7659j4iyfU'

const searchContainer = document.getElementById('searchBar')
searchContainer.addEventListener("keyup", event => {
    const searchString = event.target.value
    return searchString
    // console.log(searchString)
  })
  
let plantDiv = document.querySelector('.searchArea')

const getPlants = async() => {
  let input = document.getElementById('searchBar').value
  const TREFLE_URL = `${DOMAIN}${API_KEY}&q=`
    try {
      const response = await axios.get(TREFLE_URL + input)
      console.log(response)
      let allPlants = response.data
      console.log(allPlants.data[0].common_name)

      for (let i = 0; i < allPlants.data.length; i++){
        let plant = document.createElement('div')
        plant.innerHTML = allPlants.data[i].common_name
        plantDiv.appendChild(plant)
      }
      return
    } catch(error) {
      console.log(error)
    }
}

// const displayPlants = (plantData) => {
//   let searchArea = document.querySelector('.search')
//   let searchResult = document.createElement('div')
//   let displayResult = document.createElement('h3')

//   searchResult.className = 'search-result'
//   displayResult.innerText = plantData

//   searchResult.appendChild(displayResult)
//   searchArea.appendChild(searchResult)
// }

// document.querySelector('#search').addEventListener('click', getPlants)
// window.onload = getPlants