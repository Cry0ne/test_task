import { ContentProps } from "./ContentProps";
import styled from "styled-components";

const StyledContent = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);  
    min-height: calc(100vh - 118px);
`


export const Content = ({ children }: ContentProps) => {
    return (
        <StyledContent>
            {children}
        </StyledContent>
    );
}
