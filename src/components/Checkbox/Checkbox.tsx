
import styled from "styled-components";
import { CheckboxProps } from './Checkbox.props';
import { baseTheme } from '../../styles/global';

const StyledInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  position:absolute;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledIndicator = styled.div`
  width: 20px;
  height: 20px;
  background: ${baseTheme.colors.bg};
  outline-offset: -1px;
  border: 1px solid ${baseTheme.colors.black};
  border-radius: 4px;
  margin-right: 14px;

  &::after {
    content: "";
    position: relative;
    display: none;
  }

  ${StyledInput}:checked + &::after {
    display: block;
    background-color: #4A67FF;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    transition: ease all 0.15s;
  }

`;

export const Checkbox = ({ value, checked, onChange, name, id, label }: CheckboxProps): JSX.Element => {
  return (
    <div>
      <StyledLabel>
        <StyledInput
          id={id}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <StyledIndicator />
        {label}
      </StyledLabel>
    </div>
  );
}
