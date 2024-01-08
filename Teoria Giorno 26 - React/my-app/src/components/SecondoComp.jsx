
const SecondoComp = ({title, list}) => {
    return (
        <>
            <h1>{title}</h1>
            {list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p> )}
            <strong>Tot. {list.length}</strong>
        </>
    )
    
}

export default SecondoComp;