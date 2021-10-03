import React, { useState } from 'react'
import StyledTextarea from '../../components/styled/StyledTextarea'
import Button from '../../components/styled/Button'
import { addSubject } from '../../store/subjectsSlice'
import { useDispatch } from 'react-redux'
import Heading from '../../components/styled/Heading'


export default function FirstStep() {

    const [subjectsNames, setSubjectsNames] = useState("")

    const dispach = useDispatch()
    
    const prepareSubjects = () => {
        const names = subjectsNames.split("\n");
    
        for (let i = 0; i < names.length; i++) {
            dispach(addSubject(names[i]))
        }
    }
    

    return (
        <div>
            <Heading>Hello there!</Heading>
            <p>First, type in subjects names.</p>
            <StyledTextarea onChange={evt => setSubjectsNames(evt.target.value)} style={{ marginTop: "20px" }} placeholder={`Enter each subject name in the new line; eg:\nMath\nEnglish\nBiology`} />

            <Button onClick={prepareSubjects}>Next</Button>
        </div>
    )
}
