import React from "react"

function ListadoCategorias({ categorias }) {
  return(
    <tbody>
      {categorias.map(categoria => (
        <tr key={categoria.id}>
        <td>{categoria.id}</td>
        <td>{/*atributos*/}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default ListadoCategorias;