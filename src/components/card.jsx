import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log(pokemon);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        pokemon.map((item,i) => {

          return(
    
              <div className="Card" onClick={()=>infoPokemon(item)} key={i}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default}/>
                <h2>{item.name}</h2>
              </div>
            
        
          );

        
        })
      )}
    </>
  );
};

export default Card;
