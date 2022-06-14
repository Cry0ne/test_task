import { MessageProps } from './Message.props';
import styled from 'styled-components';
import { baseTheme } from '../../styles/global'

const StyledMessage = styled.div`

    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap:14px;
    align-items: center;
    justify-content: start;

    border: 1px solid ${baseTheme.colors.danger_dark};
    background-color: ${baseTheme.colors.danger_light};
    color: ${baseTheme.colors.black};
    font-size: 14px;
    padding: 20px 20px 20px 20px;
    font-weight: 400;
    border-radius: 8px;

`;

const StyledDangerIcon = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${baseTheme.colors.danger};
    color: ${baseTheme.colors.danger_dark};
    font-size: 14px;
    border-radius: 10px;
    font-weight: 400;
    &::after{
         display: flex;
        justify-content: center;
        position:relative;
        top: 2px;
        content: "!";
    }
`;


export const Message = ({ children }: MessageProps): JSX.Element => {

    return (
        <StyledMessage>
            <StyledDangerIcon />
            {children}
        </StyledMessage>
    );
};