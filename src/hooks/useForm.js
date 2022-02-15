import { useState } from "react"

export const useForm = ( initialFormValues ) =>{

    const [ formValues, setFormValues ] = useState(initialFormValues)

    const handleInputChange = ( {target} ) =>{
        setFormValues({
            ...formValues,
            [target.name] : target.value 
        })
    }

    const reset = ( stateChange = initialFormValues ) =>{
        setFormValues(stateChange)
    }

    return {
        formValues,
        handleInputChange,
        reset
    }

}