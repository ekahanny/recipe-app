import { createContext, useState } from "react"

export const SearchContext = createContext()

const SearchProvider = ({ children }) => {
    const [searchRes, setSearchRes] = useState([])
    const [inputVal, setInputVal] = useState("")

    return (
        // Mengirim 4 data yang menggunakan searchcontext
        <SearchContext.Provider value={{ searchRes, setSearchRes, inputVal, setInputVal }}>
            {children}
        </SearchContext.Provider>
    )
    
}

export default SearchProvider