import React from 'react'
import { useSelector } from 'react-redux'
import ContentContainer from '../../components/styled/ContentContainer'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

export default function Editor() {

    const subjects = useSelector(state => state.subjects.subjects)
    
    return (
        <ContentContainer>
            {subjects.length > 0 ? (<SecondStep/>) : (<FirstStep/>)}
        </ContentContainer>
    )
}
