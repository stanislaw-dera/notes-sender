import React from 'react'
import ViewerCard from './ViewerCard';

export default function Viewer(props) {

    const {data: {subjects}} = props;

    return (
        <div>
            {subjects.map(subject => (
                <ViewerCard key={subject.id} subject={subject}/>
            ))}
        </div>
    )
}
