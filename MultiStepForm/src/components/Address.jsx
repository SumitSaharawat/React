const Address = ({next, data, setData}) => {

    return(
        <>
        <span>Address: </span>

            <input
            value={data.address}
            onChange={(e) => setData((prev) => ({...prev, address:e.target.value}))}>
            </input>
        </>
    )
}

export default Address;