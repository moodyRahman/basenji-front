function ModelEntry({name, params}) {


    return (
        <div>
            {name} <br /> <br />
            
            {params.map((elem, i) => {
                return (
                    <div key={i}>
                        {elem.name}
                        <input type="text" value={elem.value==null?"":elem.value} />
                        <br />
                    </div>
                )
            })}

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ModelEntry;