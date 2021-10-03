import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ContentContainer from '../../components/styled/ContentContainer'
import proceedUpload from '../../firebase/proceedUpload'
import saveToDB from '../../firebase/saveToDB'
import uploadingImage from '../../assets/uploading.png'
import { Redirect } from 'react-router'
import Heading from '../../components/styled/Heading'

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
`

const ProgressBar = styled.div`
    position: absolute;
    height: 5px;
    width: ${props => `${props.progress}vw`};
    background-color: ${({theme}) => theme.colors.secondary};
    top: 0;
    left: 0;
    transition: .8s ease-in-out;
`

export default function Uploading() {

    const subjects = useSelector(state => state.subjects.subjects)
    const [progress, setProgress] = useState(0)
    const [id, setId] = useState(false)
    const subjectsCopy = subjects



    useEffect(() => {
        const proceed = async () => {
            const dataToStore = await proceedUpload(subjectsCopy, p => {setProgress(p)});
            const id = await saveToDB(dataToStore)
            setId(id)
        }

        proceed()
    }, [subjectsCopy])




    return (
        <Center>
            <ProgressBar progress={progress}/>
            <ContentContainer>
                <img alt="" style={{width: '400px'}} src={uploadingImage}/>
                <Heading>High five!</Heading>
                <p>That's all we needed from you. We are now uploading the photos.<br/> Leave everything to us. Don't close this tab. It's about {progress}% done.</p>
            </ContentContainer>
            
            {id ? <Redirect to={`/editor/done/${id}`}/> : <></>}
            
        </Center>
    )
}
