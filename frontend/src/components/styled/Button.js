import styled from "styled-components";

const Button = styled.button`
    padding: ${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing.xl};
    border-radius: 5px;
    font-size: .8em;
    border: 0;
    color: white;
    background-color: ${({theme}) => theme.colors.primary};
    text-transform: uppercase;
    margin-top: ${props => props.nomargin ? 0 : ({theme}) => theme.spacing.lg};

    &:hover{
        opacity: .9;
    }
`

export default Button;