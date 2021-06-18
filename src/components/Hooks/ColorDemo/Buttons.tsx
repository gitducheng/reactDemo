type Props = {
    onChangeColor: Function
}
const Buttons = (props: Props) => {
    return (
        <div>
            <button onClick={() => props.onChangeColor({color: "red"})}>红</button>
            <button onClick={() => props.onChangeColor({color: "yellow"})}>黄</button>
        </div>
    )
}

export default Buttons