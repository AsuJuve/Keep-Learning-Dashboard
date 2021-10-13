import React from "react"

function ListadoProductos({ productos }) {
  return(
    <tbody>
      {productos.map(producto => (
        <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{/*atributos*/}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default ListadoProductos