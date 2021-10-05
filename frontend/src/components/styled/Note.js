import styled from "styled-components";

const Note = styled.div`
    background-color: ${({theme}) => theme.colors.light};
    padding: ${({theme}) => theme.spacing.md};
    margin-top: ${({theme}) => theme.spacing.md};
    border-radius: 5px;
`

export default Note;