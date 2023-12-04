function CardCart( props ) {
    return (
        <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Editor</th>
                            <th>Habilidades</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.name}</td>
                            <td>{props.skills}</td>
                            <td>R$: {props.price}</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Remover</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
    )
}
export default CardCart;