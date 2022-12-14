import React from "react";
import { useEffect} from "react";
import { useState } from "react";
import Card from "./card";
import Pokeinfo from "./pokeinfo";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPreUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPreUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    console.log(pokeData);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);
  
  return (
    <div>
      <h1 className="Titulo">Mundo Pokemon</h1>
      <h2 className="Titulo">Seleccione un pokemon para ver sus stats</h2>
      <div className="Container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
          <div className="btn-group">
            {prevUrl && <button onClick={()=>{
                setPokeData([]);
                setUrl(prevUrl);
            }}>Anterior</button>}

            {nextUrl && <button onClick={()=>{
                setPokeData([]);
                setUrl(nextUrl);
            }}>Siguiente</button>}

          </div>
        </div>

        <div className="rigth-content"></div>
        <Pokeinfo data={pokeDex}/>
      </div>
    </div>
  );
};

export default Main;
