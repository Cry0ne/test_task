import { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}