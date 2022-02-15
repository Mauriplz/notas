
export const fileUpload = async(file) =>{
    const url = `https://api.cloudinary.com/v1_1/dyvsnzqcu/image/upload`
    const formData = new FormData();
    formData.append( 'upload_preset', 'react-journal' );
    formData.append( 'file', file );
    formData.append( 'api_key', 749673897625393 );

    try{

        const resp = await fetch( url, {
            method: 'POST',
            body : formData
        } )
        
        if(resp.ok){
            const cloudRes = await resp.json()
            return cloudRes.secure_url;
        }else{
            throw await resp.json()
        }

    }catch(err){
        throw err
    }
}