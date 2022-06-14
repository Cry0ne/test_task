import { LabelProps } from './Label.props';
import styled from 'styled-components';
import { baseTheme } from '../../styles/global'

const StyledLabel = styled.label`
    color: ${baseTheme.colors.label_font};
    font-weight: 400;
    font-size: 16px;
`;

export const Label = ({ children }: LabelProps) => {
    return (
        <StyledLabel>
            {children}
        </StyledLabel>)
};

