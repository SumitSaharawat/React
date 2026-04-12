const FirstName = ({next, data, setData}) => {

    return(
        <>
            <span>First Name: </span>

            <input
            value={data.firstName}
            onChange={(e) => setData((prev) => ({...prev, firstName:e.target.value}))}>
            </input>
        </>
    )
}

export default FirstName;