import { useGlobalContext } from "../contexts/GlobalContext"

const SearchBar = () => {

    const {search, searchMovies, setSearch} = useGlobalContext()

    return (
        <form onSubmit={searchMovies}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="buttonSearchBar" type="submit">Cerca</button>
        </form>


    )


}

export default SearchBar