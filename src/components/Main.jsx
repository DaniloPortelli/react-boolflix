import { useState } from "react";

const Main = () => {
    const [search, setSearch] = useState("")

    const searchMovies = (e) => {

        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0ee6c621f41d693fdef2025e489837b3&query=${search}`)
            .then((res) => res.json())
            .then(data => setMovies(data.results))
    }

    const [movies, setMovies] = useState([]);

    return (
        <main>
            <div>
                <form onSubmit={searchMovies}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                {
                    movies.map((m) => {
                        return (
                            <>
                                <ul>
                                    <li>Titolo:{m.title}</li>
                                    <li>Titolo originale:{m.original_title}</li>
                                    <li>Lingua:{m.original_language}</li>
                                    <li>Voto:{(m.vote_average / 2).toFixed()}/5</li>
                                </ul>
                            </>
                        )
                    })
                }
            </div>
        </main>
    )
}



export default Main