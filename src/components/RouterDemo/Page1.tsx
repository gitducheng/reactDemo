// import {Redirect} from "react-router-dom"
import React, { useEffect } from 'react'

const Page1 = (props: any) => {
    useEffect(() => {
        props.history.push("/home")
    })
    return (
        <div>
            {/* <Redirect to="/home" /> */}
            page111
        </div>
    )
}
export default Page1