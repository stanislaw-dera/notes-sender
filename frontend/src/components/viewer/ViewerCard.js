import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from '../modal/Modal';
import Card from '../styled/Card';
import ImageThumbnail from '../styled/ImageThumbnail';
import Note from '../styled/Note';

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function ViewerCard(props) {

    const { subject } = props;
    const [modal, setModal] = useState(false)

    return (
        <>
            {
                modal && (
                    <Modal handleClose={() => { setModal(false) }}>
                        <img src={modal} alt="" />
                    </Modal>
                )
            }


            <Card>
                <h2>{subject.name}</h2>
                <Flex>
                    {subject.photos.map(photo => (
                        <ImageThumbnail onClick={() => setModal(photo.url)} alt="Uploaded photo" src={photo.url} key={photo.id} />
                    ))}
                </Flex>
                {subject.note && <Note>{subject.note}</Note>}
            </Card>
        </>
    )
}
