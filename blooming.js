const DOMAIN = 'https://trefle.io/api/v1/plants/search?token='
const API_KEY = 'tAzty-RzZNho8aFNdhldc4vZIE3fuCZqr7659j4iyfU'

const searchContainer = document.getElementById('searchBar')
searchContainer.addEventListener("keyup", event => {
    const searchString = event.target.value
    return searchString
    // console.log(searchString)
  })
  
  let plantDiv = document.querySelector('.searchResults')
  
  const getPlants = async() => {
    let input = document.getElementById('searchBar').value
    const TREFLE_URL = `${DOMAIN}${API_KEY}&q=`
    try {
      const response = await axios.get(TREFLE_URL + input)
      console.log(response)
      let allPlants = response.data
      console.log(allPlants.data[0].common_name)
      
      plantDiv.innerHTML = '' // refreshes the innerHTML to a blank slate after each new search
      
      for (let i = 0; i < allPlants.data.length; i++){
        let plantResults = document.createElement('div')
        plantResults.setAttribute('class', 'plantResults')

        let plantCommonName = document.createElement('h1')
        plantCommonName.setAttribute('class', 'commonName')
        plantCommonName.innerHTML = `Common Name: ${allPlants.data[i].common_name}`

        let plantPhoto = document.createElement('img')
        plantPhoto.setAttribute('class', 'photoResults')
        plantPhoto.src = allPlants.data[i].image_url
        
        let plantSciName = document.createElement('h3')
        plantSciName.setAttribute('class', 'sciName')
        plantSciName.innerHTML = `Scientific Name: ${allPlants.data[i].scientific_name}`
        
        plantResults.appendChild(plantCommonName)
        plantResults.appendChild(plantSciName)
        plantResults.appendChild(plantPhoto)
        plantDiv.appendChild(plantResults)

      }
        return

    } catch(error) {
      console.log(error)
    }
}

// document.querySelector('#search').addEventListener('click', getPlants)
// window.onload = getPlants