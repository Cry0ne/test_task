
export interface CheckboxProps {
    value?: string,
    checked: boolean,
    onChange?: ({ target }: { target: any; }) => void,
    name?: string,
    id?: string,
    label?: string
}