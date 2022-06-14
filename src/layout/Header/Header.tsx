import { Logo } from '../../components';
import styled from 'styled-components';


const StyleHeader = styled.header`
    text-align: center;
    padding: 40px 0 0 0; 
`
export const Header = () => {
    return (
        <StyleHeader>
            <Logo />
        </StyleHeader>
    );
}




