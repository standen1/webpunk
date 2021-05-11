import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router'

export default function tableOfContents() {
  //Use router to check if link is active
   const router = useRouter();
  const activeLink = (href) => router.pathname === href ? 'menu-item isActive' : 'menu-item';
  return (
    <>
      <Menu>
        <Link href="/">
          <a className={activeLink('/')}>Home</a>
        </Link>
        <Link href="/about">
          <a className={activeLink('/about')} >About</a>
        </Link>
        <Link href="/portfolio">
          <a className={activeLink('/portfolio')}>Portfolio</a>
        </Link>
        <Link href="/blog">
          <a className={activeLink('/blog')}>Blog</a>
        </Link>
        <Link href="/contact">
          <a className={activeLink('/contact')}>Contact</a>
        </Link>
      </Menu>
    </>
  );
};

const Menu = styled.menu`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  width: 450px;
  margin-right: 10px;

  a {
      font-size: 1rem;
      padding: 0;
      margin: 0 5px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: #A2A2A2;
      text-decoration: none;
      transition: color 0.3s linear;
      border: none;
      list-style-type: none;
      outline: none;
    }

    a.isActive {
      color: #65DC98;
    }

    a:hover {
      color: ${props => props.theme.menuHover};
      cursor: pointer;
    }

    a.isActive:hover {
      color: #65DC98;
      cursor: not-allowed;
    }
`;