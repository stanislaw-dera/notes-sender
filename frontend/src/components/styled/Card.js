import styled from "styled-components";

const Card = styled.div`
    margin: ${({theme}) => theme.spacing.lg} 0;
    padding: ${({theme}) => theme.spacing.md};
    border: 2px solid ${({theme}) => theme.colors.light};
    border-radius: 5px;

    & > h2 {
        color: ${({theme}) => theme.colors.dark};
        font-weight: 400;
    }
`

export default Card;