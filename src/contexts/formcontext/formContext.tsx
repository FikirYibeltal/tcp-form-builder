import React, { useState } from 'react'

const formContext = React.createContext<contextType>({})
export interface contextType {
    formTitle?: string
    setFormTitle?: React.Dispatch<React.SetStateAction<string>>
}
const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [formTitle, setFormTitle] = useState('Form Title Goes Here')

    return (
        <formContext.Provider value={{ formTitle, setFormTitle }}>{children}</formContext.Provider>
    )
}

export { formContext, FormProvider }
