



export async function fetch(nameImg, loader) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "43384169-ca1a4d081c57b6f9f4fa25679";


    const params = new URLSearchParams({
        key: API_KEY,
        q: nameImg,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        
    })
    
    return fetch(`${BASE_URL}?${params}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
        
}