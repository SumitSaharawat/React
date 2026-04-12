const LastName = ({next, data, setData}) => {

    return(
        <>
        <span>Last Name: </span>

            <input
            value={data.lastName}
            onChange={(e) => setData((prev) => ({...prev, lastName:e.target.value}))}>
            </input>
        </>
    )
}

export default LastName;