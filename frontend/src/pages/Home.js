import React from 'react'
import LinkButton from '../components/styled/LinkButton'
import ContentContainer from '../components/styled/ContentContainer'


export default function Home() {
    return (
        <ContentContainer>
            <div>
                <h1>Notes sender</h1>
                <LinkButton to="/editor">Start</LinkButton>
            </div>
        </ContentContainer>
    )
}
