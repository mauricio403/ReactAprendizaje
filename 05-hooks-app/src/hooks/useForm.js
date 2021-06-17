import { useState } from "react"

export const useForm = (inicialState = {}) => {
    
    const [values, setvalues] = useState(inicialState)

    const handleInputChange = ({target }) => {
       
        setvalues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange ]

}


//este es un custom Hook que se encarga de manejar los formularios