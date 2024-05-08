import React from "react";



export const TablaClasificacion = ({ equipos, categoria }) => {


    return (
        <div style={ { overflowX: 'auto'}}>
        <table style={{ width: "100%",  }}>
            <caption
                style={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    captionSide: "top",
                }}
            >
                GRUPO {categoria}
            </caption>
            <thead>
                <tr>
                    <th>Posición</th>
                    {/* <th></th> */}
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                    <th>PEX</th>
                    <th>Puntos</th>
                </tr>
            </thead>
            <tbody>
                {equipos ? equipos.map((equipo, id) => (

                    <tr key={id}>
                        <td>{ id + 1 }</td>
                        {/* <td>
                            <img
                                src={equipo.logo}
                                alt={equipo.iniciales}
                                style={{ width: "30px" }}
                            />
                        </td> */}
                        <td>
                            <img
                                src={equipo.logo}
                                alt={equipo.alt}
                                style={{ width: "30px" }}
                            />
                            {equipo.nombre}
                        </td>
                        <td>{equipo.partidosJugados}</td>
                        <td>{equipo.partidosGanados}</td>
                        <td>{equipo.partidosEmpatados}</td>
                        <td>{equipo.partidosPerdidos}</td>
                        <td>{equipo.golesFavor}</td>
                        <td>{equipo.golesContra}</td>
                        <td>{equipo.diferenciaGoles}</td>
                        <td>{equipo.pex}</td>
                        <td>{equipo.puntos}</td>
                    </tr>
                )) : null}
            </tbody>
        </table>
        </div>
    );
};
