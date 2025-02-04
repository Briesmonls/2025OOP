import { useState } from "react"
import classes from './components.module.css'

export const body = () => {
    return(
        <body className={classes.body}>

        </body>
    )
}

export const ColorName = ({color, setColor}) => {
    return (
        <input
        className={classes.input}
        type="text"
        value={color}
        onInput={ (e) => setColor(e.target.value)}
        />
    )
}

export const Semaphore = () => {
    const [color, setColor] = useState("")

    return(
        <>
            <ColorName color={color} setColor={setColor} />
        </>
    )
}

export const ColorBox = () => {
    return(
       <div className={classes.ColorBox}>

       </div>
    )
}

export const Selector = () => {
    const Colors = [
        "none"
    ]

    return(
        Colors.value
    )
}

