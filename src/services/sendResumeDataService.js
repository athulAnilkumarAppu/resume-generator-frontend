import axios from 'axios'


export const sendResumeDataService = async (params)=> {
   const res =  await axios.post('/create-pdf', params).then((response)=> {
        return response
    }).catch((error)=> {
        console.log(error)
    })
    return res
}