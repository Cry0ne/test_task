import styled from 'styled-components';
import { baseTheme } from '../../styles/global'


const StyledLogo = styled.label`
    color: ${baseTheme.colors.black};
    font-family: 'Helvetica Neue',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
`;


export const Logo = () => {
    return (
        <StyledLogo>
            LOGO
        </StyledLogo>)
};
