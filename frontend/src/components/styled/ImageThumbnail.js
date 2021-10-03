import styled from "styled-components";

const ImageThumbnail = styled.img`
    width: calc((800px - 120px) /6);
    border-radius: 5px;
    display: block;
    margin: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.md} 0 0;
`

export default ImageThumbnail;