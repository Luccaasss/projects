function StateLift({setName}) {

    return (
        <>
            <p>Type your name:</p>
            <input onChange={e => setName(e.target.value)} type="text" placeholder="your name"/>
        </>
    )
}

export default StateLift