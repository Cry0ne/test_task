import { LayoutProps } from './LayoutProps';
import { Header, Content } from '../layout';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  )
}
