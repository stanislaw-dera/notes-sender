import styled from "styled-components";

const TextButton = styled.button`
    border: 0;
    background-color: transparent;
    margin-top: ${({theme}) => theme.spacing.lg};
    color: ${({theme}) => theme.colors.dark};
    font-size: 1rem;

    &:hover{
        opacity: .4;
    }
`

export default TextButton;