
import React from 'react'

export const TablaEstadisticas = ({estadisticas, equipo}) => {
  return (
    <table>
        <caption
        style={{
          fontWeight: "bold",
          fontSize: "1.5em",
          captionSide: "top",
      }}
  >
      Table de {estadisticas}
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Equipo</th>
          <th>Goles</th>
        </tr>
        <tbody>
          {equipo ? estadisticas.map((estadistica, id) => (
            <tr key={id}>
              <td>
                <img
                  src={estadistica.logo}
                  alt={estadistica.nombre}
                  style={{ width: "30px" }}
                />
              </td>
              <td>{estadistica.nombre}</td>
              <td>{estadistica.goles}</td>
            </tr>
          )) : null}
        </tbody>
      </thead>

    </table>
  )
}
