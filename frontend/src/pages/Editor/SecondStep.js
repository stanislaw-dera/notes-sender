import React from 'react'
import { useSelector } from 'react-redux'
import SingleSubject from '../../components/SingleSubject'
import LinkButton from '../../components/styled/LinkButton'
import Heading from '../../components/styled/Heading'

export default function SecondStep() {

    const subjects = useSelector(state => state.subjects.subjects)
    
    return (
        <div>
            <Heading>Let's add some photos!</Heading>
            {subjects.map(s => (
                <SingleSubject key={s.id} subject={s}/>
            ))}

            <LinkButton to="/editor/uploading">Finish</LinkButton>
        </div>
    )
}
