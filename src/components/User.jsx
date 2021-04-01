
const User = (props) => {

    const id = props.match.params.userId

    return (
        <>
            <h1>User</h1>
            {
                id && <h2>User Id: {id}</h2>
            }
        </>
    )
}

export default User