import React from 'react'

export default function Viewer(props) {

    const {data} = props;

    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
