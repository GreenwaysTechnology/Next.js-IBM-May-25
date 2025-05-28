'use client'

import { Button } from "@carbon/react"
import { useState } from "react"

export default function Increment() {
    const [value, setValue] = useState(0)
    return <>
        <h1>Value : {value}</h1>
        {/* <button onClick={()=>{
            setValue(value+1)
        }}>Like</button> */}
        {/* Carbon Button */}
        <Button kind="danger" onClick={() => {
            setValue(value + 1)
        }}>Like</Button>
    </>
}