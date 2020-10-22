const DOMAIN = 'https://trefle.io/api/v1/plants/search?token='
const API_KEY = 'tAzty-RzZNho8aFNdhldc4vZIE3fuCZqr7659j4iyfU'

const searchContainer = document.getElementById('searchBar')
searchContainer.addEventListener("keyup", event => {
  const searchString = event.target.value
  return searchString
})

let plantDiv = document.querySelector('.searchResults')

const getPlants = async () => {
  let input = document.getElementById('searchBar').value
  const TREFLE_URL = `${DOMAIN}${API_KEY}&q=`
  try {
    const response = await axios.get(TREFLE_URL + input)
    let allPlants = response.data.data

    plantDiv.innerHTML = '' // refreshes the innerHTML to a blank slate after each new search

    for (let i = 0; i < allPlants.length; i++) {
      if (allPlants[i].image_url !== null
        && allPlants[i].common_name !== null
        && allPlants[i].scientific_name !== null
        && allPlants[i].genus !== null
        && allPlants[i].family !== null
        && allPlants[i].family_common_name !== null) {

        let plantResults = document.createElement('div')
        plantResults.setAttribute('class', 'plantResults')

        let plantPhoto = document.createElement('img')
        plantPhoto.setAttribute('class', 'photoResults')
        plantPhoto.src = allPlants[i].image_url

        let plantCommonName = document.createElement('h3')
        plantCommonName.setAttribute('class', 'commonName')
        plantCommonName.innerHTML = `Common Name: ${allPlants[i].common_name}`

        let plantSciName = document.createElement('h3')
        plantSciName.setAttribute('class', 'sciName')
        plantSciName.innerHTML = `Scientific Name: ${allPlants[i].scientific_name}`

        let plantGenus = document.createElement('h3')
        plantGenus.setAttribute('class', 'genusName')
        plantGenus.innerHTML = `Genus: ${allPlants[i].genus}`

        let plantFamily = document.createElement('h3')
        plantFamily.setAttribute('class', 'familyName')
        plantFamily.innerHTML = `Family: ${allPlants[i].family}`

        let plantCommonFamily = document.createElement('h3')
        plantCommonFamily.setAttribute('class', 'commonFamily')
        plantCommonFamily.innerHTML = `Family Common Name: ${allPlants[i].family_common_name}`

        plantResults.appendChild(plantPhoto)
        plantResults.appendChild(plantCommonName)
        plantResults.appendChild(plantSciName)
        plantResults.appendChild(plantGenus)
        plantResults.appendChild(plantFamily)
        plantResults.appendChild(plantCommonFamily)
        plantDiv.appendChild(plantResults)
      }
    }
    return

  } catch (error) {
    console.log(error)
  }
}

// addEventListeners
document.querySelector('#search').addEventListener('click', getPlants)