function ListadoProductos({ productos }) {
  return(
    <tbody>
      {productos.map(producto => (
        <tr key={producto.id}>
        <td>{producto.id}</td>
          <td>{producto.name}</td>
          <td>{producto.description}</td>
          <td>{producto.category}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default ListadoProductos