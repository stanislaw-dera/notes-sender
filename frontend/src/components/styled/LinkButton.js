import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
    padding: ${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing.xl};
    border-radius: 5px;
    text-decoration: none;
    display: block;
    width: fit-content;
    border: 0;
    color: white;
    background-color: ${({theme}) => theme.colors.primary};
    text-transform: uppercase;
    margin-top: ${({theme}) => theme.spacing.lg};

    &:hover{
        opacity: .9;
    }
`

export default LinkButton;