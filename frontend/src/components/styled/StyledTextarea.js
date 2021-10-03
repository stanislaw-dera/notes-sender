import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100%;
    resize: none;
    height: ${props => props.small ? "inherit" : "200px"};
    font-family: 'Ubuntu', sans-serif;
    padding: ${({theme}) => theme.spacing.md};
    border-radius: 5px;
    border: ${({theme}) => theme.colors.dark} 1px solid;
    color: ${({theme}) => theme.colors.dark};
    background-color: ${({theme}) => theme.colors.light};

    &:focus {
        border: 1px solid ${({theme}) => theme.colors.primary};
        outline: none;
    }
`

export default StyledTextarea;