const Page2 = (props: any) => {
    console.log(props)
    let id = "默认"
    if(props.match.params.id){
        id = props.match.params.id
    }
    return (
        <div>
            page222--{id}
        </div>
    )
}

export default Page2