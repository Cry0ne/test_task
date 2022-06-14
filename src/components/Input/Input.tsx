import styled from 'styled-components';
import { baseTheme } from '../../styles/global'
import { useController, UseControllerProps } from 'react-hook-form';
import { InputProps } from './Input.props';


const StyledInput = styled.input<InputProps>`
    background-color: ${baseTheme.colors.input_bg};
    color: ${p => p.isValid === true ? baseTheme.colors.danger_dark : baseTheme.colors.input_font};
    font-size: 16px;
    padding: 21px 20px 20px 20px;
    font-weight: 400;
    outline: none;
    border: ${p => p.isValid === true ? `1px solid ${baseTheme.colors.danger_dark}` : "0"};
    border-radius: 8px;
    cursor: text;
    transition: ease all .15s;
    /*&:focus{
        box-shadow: 0 3px 6px ${baseTheme.colors.black};
    }*/
`;

const ErrorMessage = styled.div`
    color: ${baseTheme.colors.danger_dark};
    font-size: 14px;
    font-weight: 400;
    top: -2px;
`

interface FormValues {
    login: string,
    password: string,
}

export const InputText = (props: UseControllerProps<FormValues>): JSX.Element => {

    const { field, fieldState } = useController(props);

    return (
        <>
            <StyledInput isValid={fieldState.error?.type === 'required'} type="text" {...field} />
            {fieldState.error && <ErrorMessage>Обязательное поле</ErrorMessage>}
        </>
    );
};

export const InputPassword = (props: UseControllerProps<FormValues>): JSX.Element => {

    const { field, fieldState } = useController(props);

    return (
        <>
            <StyledInput isValid={fieldState.error?.type === 'required'} type="password" {...field} />
            {fieldState.error && <ErrorMessage>Обязательное поле</ErrorMessage>}
        </>
    );
};
