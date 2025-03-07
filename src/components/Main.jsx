import { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext"


const Main = () => {
    const { movies, tvs } = useGlobalContext()
    const urlBaseCopertina = import.meta.env.VITE_APP_BASE_URL_COPERTINA

    if (movies.length === 0 && tvs.length === 0) {
        return (
            <div>

            </div>
        )
    } else {

        return (
            <main>
                <h1 className="categories">Elenco Film</h1>
                <div className="cardContainer">

                    {
                        movies.map((elem) => {
                            let bandiera = (elem.original_language.toUpperCase())
                            bandiera === "EN" ? bandiera = "GB" : bandiera
                            bandiera === "JA" ? bandiera = "JP" : bandiera

                            return (
                                <div key={elem.id} className="card">
                                    <figure className="imgContainer">
                                        <img className="imgCopertina" src={`${urlBaseCopertina}${elem.poster_path}`} alt={elem.original_title} />
                                    </figure>
                                    <div className="infoData">
                                        <ul>

                                            <li>Titolo:{elem.title}</li>
                                            <li>Titolo originale:{elem.original_title}</li>
                                            <li>Lingua:
                                                < img width={20}
                                                    alt={bandiera}
                                                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${bandiera}.svg`} />
                                            </li>
                                            <li>Voto:{(elem.vote_average / 2).toFixed()}/5</li>

                                        </ul>

                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>


                <h1 className="categories">Elenco Serie tv</h1>
                <div className="cardContainer">
                    {
                        tvs.map((elem) => {
                            let bandiera = (elem.original_language.toUpperCase())
                            bandiera === "EN" ? bandiera = "GB" : bandiera
                            bandiera === "JA" ? bandiera = "JP" : bandiera

                            return (

                                <div key={elem.id} className="card">
                                    <figure className="imgContainer">
                                        <img className="imgCopertina" src={`${urlBaseCopertina}${elem.poster_path}`} alt={elem.original_name} />
                                    </figure>
                                    <div className="infoData">
                                        <ul>
                                            <li>Titolo:{elem.name}</li>
                                            <li>Titolo originale:{elem.original_name}</li>
                                            <li>Lingua:
                                                < img width={20}
                                                    alt={bandiera}
                                                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${bandiera}.svg`} />
                                            </li>
                                            <li>Voto:{(elem.vote_average / 2).toFixed()}/5</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </main>
        )

    }

}



export default Main