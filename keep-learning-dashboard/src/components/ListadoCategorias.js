import React from "react"

function ListadoCategorias({ categorias }) {
  return(
    <tbody>
      {Object.keys(categorias).map(categoria => (
        <tr key={categoria.id}>
        <td>{categoria}</td>
        <td>{categorias[categoria]}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default ListadoCategorias;