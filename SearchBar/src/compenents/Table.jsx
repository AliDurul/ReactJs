

const Table = ({ data }) => {
    // let dataArr = props.data
    // const [id] = dataArr\
    // console.log(data);
    return (

        <table>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            {
                data.map((item) =>
                (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                )
                )
            }

        </table>

    )
}

export default Table