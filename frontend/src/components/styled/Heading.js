import styled from "styled-components";

const Heading = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({theme}) => theme.spacing.md} 0;
`

export default Heading;