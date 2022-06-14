import { useNavigate } from 'react-router-dom';
import { ButtonGray, Label } from '../components';
import styled from 'styled-components';

const StyledProfile = styled.div`       
    display: grid;
    grid-column-start: 1;
    grid-column-end: 4;
    justify-items: center;

    & label{
        font-family: 'Helvetica Neue',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        margin-bottom:50px
    }   

    & button{
        width: 200px;
        height: 60px;
    }
`

const Profile = () => {

    const navigate = useNavigate();

    function Logout() {
        navigate(`/login`);
        window.localStorage.removeItem("login");
    }

    return (
        <StyledProfile>
            <Label>Здравствуйте, <b>{window.localStorage.getItem("login")}</b></Label>
            <ButtonGray onClick={Logout} type="submit">Выйти</ButtonGray>
        </StyledProfile>
    );
}

export default Profile;