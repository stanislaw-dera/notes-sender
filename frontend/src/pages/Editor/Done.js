import React, { useRef } from 'react'
import styled from 'styled-components'
import ContentContainer from '../../components/styled/ContentContainer'
import doneImage from '../../assets/done.png'
import { useParams } from 'react-router'
import Button from '../../components/styled/Button'
import Heading from '../../components/styled/Heading'

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
`

const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    margin-right: ${({theme}) => theme.spacing.sm};
    padding: ${({theme}) => theme.spacing.sm};

    &:focus {
        outline: none;
    }
`

const Flex =styled.div`
    display: flex;
    margin: ${({theme}) => theme.spacing.xl} 0;
`

export default function Done() {

    const {id} = useParams()
    const link = useRef(null)

    return (
        <Center>
            <ContentContainer>
                <img alt="" style={{width: '400px'}} src={doneImage}/>
                <Heading>Done!</Heading>
                <p>We hope you enjoyed Notes sender.</p>
                
                <Flex>
                    <Input readonly value={`${process.env.REACT_APP_URL}/v/${id}`} ref={link}/>
                    <Button nomargin onClick={() => {link.current.select(); document.execCommand('copy')}}>Copy</Button>
                </Flex>

            </ContentContainer>
        </Center>
    )

}
