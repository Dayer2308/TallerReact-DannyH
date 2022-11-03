import React from 'react'

const [pokemones, setPokemones] = useState([])
    const [loader, setLoader] = useState(false)
    const [pagination, setPagination] = useState({
        current: "https://pokeapi.co/api/v2/pokemon",
        next: null,
        previous: null
    })
