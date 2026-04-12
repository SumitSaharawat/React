const Phone = ({next, data, setData}) => {

    return(
        <>
        <span>Phone: </span>

            <input
            value={data.phone}
            onChange={(e) => setData((prev) => ({...prev, phone:e.target.value}))}>
            </input>
        </>
    )
}

export default Phone;