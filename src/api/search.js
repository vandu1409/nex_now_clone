import { tr } from "date-fns/locale";
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

export const searchByName = async(name) =>{
  try{
     const response = await api.get(`/search-by-name?name=${name}`)
     return response
  }catch(err){
      console.log(err)
  }
}