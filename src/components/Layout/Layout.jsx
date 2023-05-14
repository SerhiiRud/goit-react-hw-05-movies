import { Outlet } from 'react-router-dom';
import { Header, Menu, HeaderLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Menu>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </li>
        </Menu>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
