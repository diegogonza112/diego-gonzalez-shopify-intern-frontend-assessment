import React, { MouseEventHandler } from 'react'

interface StopWatchButtonInterface { onClick: MouseEventHandler, text: string, disabled: boolean }

export default function StopWatchButton(props: StopWatchButtonInterface) {

    return(
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            >
            {props.text}
        </button>
    )
}