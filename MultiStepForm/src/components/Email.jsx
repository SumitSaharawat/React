const Email = ({next, data, setData}) => {

    return(
        <>
        <span>Email: </span>

            <input
            value={data.email}
            onChange={(e) => setData((prev) => ({...prev, email:e.target.value}))}>
            </input>
        </>
    )
}

export default Email;