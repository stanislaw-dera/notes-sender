import React, { useCallback } from 'react'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addNote, addPhoto } from '../store/subjectsSlice'
import ImageThumbnail from './styled/ImageThumbnail'
import StyledFieldset from './styled/StyledFieldset'
import StyledTextarea from './styled/StyledTextarea'
import TextButton from './styled/TextButton'

const StyledDropzone = styled.div`
    margin: ${({ theme }) => theme.spacing.sm} 0;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
`

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function SingleSubject({ subject }) {

    const dispach = useDispatch()
    const [showTextarea, setShowTextarea] = useState(false)

    const photos = useSelector(state => state.subjects.subjects[subject.id].photos)

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(element => {
            console.log(element)
            dispach(addPhoto({
                path: URL.createObjectURL(element),
                name: element.name,
                type: element.type,
                subject: subject.id
            }))
        });
    }, [dispach, subject.id])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <StyledFieldset>
            <legend>{subject.name}</legend>

            <StyledDropzone {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </StyledDropzone>

            <Flex>
                {photos.map(photo => (
                    <ImageThumbnail alt="Uploaded photo" src={photo.path} key={photo.id} />
                ))}
            </Flex>

            <div style={{ marginTop: '10px' }}>
                {showTextarea ? <StyledTextarea small placeholder="Provide some additional information here" onChange={evt => dispach(addNote({subject: subject.id, note: evt.target.value}))} /> : <TextButton onClick={() => setShowTextarea(true)}>Add note</TextButton>}
            </div>
        </StyledFieldset>
    )
}
