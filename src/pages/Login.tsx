import { useForm } from "react-hook-form";
import { InputText, Button, Label, Checkbox, Message, InputPassword } from '../components';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const StyledLogin = styled.div`
    
    display: grid;
    grid-column-start: 2;
    grid-column-end: 3;     
    
    & form{
        display: grid;
        grid-row-gap: 20px;
    }

    & form > label{
        display: grid;
        grid-row-gap: 10px;
    }

    & form > button{
        margin-top: 20px;
    }
`;


type FormValues = {
    login: string;
    password: string;
};

const Login = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            login: "",
            password: ""
        },
        mode: "onBlur"
    });
    const onSubmit = (data: FormValues) => {
        setIsLoading(true);

        setTimeout(function () {
            if (data.login === "steve.jobs@example.com" && data.password === "password") {
                window.localStorage.setItem("login", data.login);
                navigate(`/profile`);
            }
            else {
                setMessage(`Пользователя ${data.login} не сущесвует`)
            }

            console.log(data);
            setIsLoading(false);
        }, 2000)
    };


    const [saveUser, setSaveUser] = useState(false);

    return (
        <StyledLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                {message !== '' && <Message>{message}</Message>}
                <Label>Логин
                    <InputText control={control} name="login" rules={{ required: true }} />

                </Label>
                <Label>Пароль
                    <InputPassword control={control} name="password" rules={{ required: true }} />

                </Label>
                <Checkbox onChange={({ target }) => setSaveUser(!saveUser)} checked={saveUser} label="Запомнить пароль" />
                <Button disabled={isLoading} type="submit">Войти</Button>
            </form>
        </StyledLogin>
    );
}

export default Login;