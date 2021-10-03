import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContentContainer from '../components/styled/ContentContainer'
import Viewer from '../components/viewer/Viewer'
import getFromDB from '../firebase/getFromDB'
import Heading from '../components/styled/Heading'

export default function View() {

    const {id} = useParams()
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const proceed = async () => {
            try {
                setData(await getFromDB(id))        
            } catch(err) {
                setError(err)
            } 
        }
        
        proceed()

    }, [id])

    return (
        <ContentContainer>
            <Heading>View</Heading>
            {error ? <p>{error}</p> : <></>}
            {data ? <Viewer data={data}/> : !error ? <p>Loading</p> : <></>}
        </ContentContainer>

    )
}
