import React from "react";

const Pokeinfo = ({ data }) => {
  console.log(data);
  return (
    <div>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="habilidades">
            {data.abilities.map((poke,i) => {
              return (
                  <div className="grupo" key={i}>
                    <h2>{poke.ability.name}</h2>
                  </div>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke,i) => {
              return (
                <div key={i}>
                  <h3>{poke.stat.name}:{poke.base_stat}</h3>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Pokeinfo;
