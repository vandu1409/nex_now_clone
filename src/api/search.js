import api from "../utils/axios";


export const searchBusinesses = async (searchParams = {}) => {
  try {
 
    const response = await api.get('/search', {
      params: {...searchParams },
    });

    return response.data;
  } catch (error) {
    console.error('[searchBusinesses] API Error:', error);
    throw error;
  }
};

export const getAllCities = async() => {
    try{
        const response = await api.get('/cities');
        return response.data

    }catch(err){
        console.log(err)
    }
}

export const searchByType = async(type) => {
    try{
      const response = await api.get(`/search-by-type?type=${type}`)
      return response.data
    }catch(error){
      console.log(error)
    }
}