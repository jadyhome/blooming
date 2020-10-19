

const API_KEY = 'tAzty-RzZNho8aFNdhldc4vZIE3fuCZqr7659j4iyfU'

const getPlants = async() => {
    const TREFLE_URL = `https://trefle.io/api/v1/plants?token=${API_KEY}`
    try {
      const response = await axios.get(TREFLE_URL)
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
}




window.onload = getPlants