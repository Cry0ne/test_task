import { ButtonProps } from './Button.props';
import { baseTheme } from '../../styles/global';
import styled from 'styled-components';


const StyledButton = styled.button`
    
    background-color: ${baseTheme.colors.primary};
    color: ${baseTheme.colors.white};
    font-size: 18px;
    font-weight: 700;
    padding: 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    transition: ease all 0.15s;
    
    &:hover{
        background-color: #364ec9;
    }
    &:active{
        background-color: #2b3fa1;
    }
    &:disabled{
        background-color: ${baseTheme.colors.secondary};
        cursor: wait;
    }
    
`;

const StyledButtonGray = styled.button`

    background-color: ${baseTheme.colors.input_bg};
    color: ${baseTheme.colors.black};
    font-size: 18px;
    font-weight: 700;
    padding: 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    transition: ease all 0.15s;
    
    &:hover{
        background-color: #dbdbdb;
    }
    &:active{
        background-color: #afafaf;
    }
`;

export const Button = ({ children, disabled, onClick }: ButtonProps) => {

    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>)
};

export const ButtonGray = ({ children, disabled, onClick }: ButtonProps) => {

    return (
        <StyledButtonGray onClick={onClick} disabled={disabled}>
            {children}
        </StyledButtonGray>)
};

