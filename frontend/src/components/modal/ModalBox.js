import styled from "styled-components";

const ModalBox = styled.div`
    background-color: white;
    padding: ${({theme}) => theme.spacing.xl};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 5px;

    & img {
        max-height: 90vh;
        max-width: 90vw;
    }
`

export default ModalBox;