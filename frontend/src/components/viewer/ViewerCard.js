import React from 'react'
import styled from 'styled-components';
import Card from '../styled/Card';
import ImageThumbnail from '../styled/ImageThumbnail';
import Note from '../styled/Note';

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function ViewerCard(props) {

    const {subject} = props;

    return (
        <Card>
            <h2>{subject.name}</h2>
            <Flex>
                {subject.photos.map(photo => (
                    <ImageThumbnail alt="Uploaded photo" src={photo.url} key={photo.id} />
                ))}
            </Flex>
            {subject.note && <Note>{subject.note}</Note>}
        </Card>
    )
}
