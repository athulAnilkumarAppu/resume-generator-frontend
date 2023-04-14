import axios from 'axios'


export const getPdfService = async ()=> {
    const res = await axios.get('https://server-backend-resume.onrender.com/fetch-pdf', { responseType: 'blob' }).then((response)=> {
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' })  // return the pdf file
        return pdfBlob
    }).catch((error)=> {
           console.log(error)
    })
    return res
}