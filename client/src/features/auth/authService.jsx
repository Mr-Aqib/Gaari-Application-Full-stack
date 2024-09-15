import axios from 'axios'
export const loginUser = async (userData) =>
{
    const respose = await axios.post('http://localhost:3001/api/users/loginuser', userData)
    if (respose.data)
    {
        localStorage.setItem('user',JSON.stringify(respose.data))
    }
    return respose.data
}