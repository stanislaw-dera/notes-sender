import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    margin: ${({theme}) => theme.spacing.md} 0;
    padding: ${({theme}) => theme.spacing.lg};
    border-radius: 5px;
    border: 2px solid ${({theme}) => theme.colors.light};

    & > legend {
        color: ${({theme}) => theme.colors.dark};
        font-size: 1rem;
    }
`

export default StyledFieldset;