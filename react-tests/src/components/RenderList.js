function RenderList({items}){

    return (
        <>
            <h3>Items from the list</h3>
            {
                items.map(e => (
                    <li>{e}</li>
                ))
            }
        </>
    )
}

export default RenderList