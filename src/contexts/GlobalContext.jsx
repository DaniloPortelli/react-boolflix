import { useContext, useState, createContext } from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const apiKey = import.meta.env.VITE_APP_API_KEY
    const apiUrl = import.meta.env.VITE_APP_API_URL

    const [movies, setMovies] = useState([]);
    const [tvs, setTvs] = useState([]);
    const [search, setSearch] = useState("")
    const searchMovies = (e) => {

        e.preventDefault();
        fetch(`${apiUrl}movie?api_key=${apiKey}&query=${search}`)
            .then((res) => res.json())
            .then(data => setMovies(data.results))

        e.preventDefault();
        fetch(`${apiUrl}tv?api_key=${apiKey}&query=${search}`)
            .then((res) => res.json())
            .then(data => setTvs(data.results))
    }

    const value = {
        movies,
        tvs,
        search,
        searchMovies,
        setSearch
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext }