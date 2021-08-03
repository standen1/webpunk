import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';


export default function tableOfContents() {
  //Use router to check if link is active
   const router = useRouter();
  const activeLink = (href) => router.pathname === href ? 'menu-item isActive' : 'menu-item';
  return (
    <>
        <Menu key={router.link}>
          <Link href="/" scroll={false}>
            <a className={activeLink('/')}>Home</a>
          </Link>
          <Link href="/about" scroll={false}>
            <a className={activeLink('/about')} >About</a>
          </Link>
          <Link href="/portfolio" scroll={false}>
            <a className={activeLink('/portfolio')}>Portfolio</a>
          </Link>
          <Link href="/blog" scroll={false}>
            <a className={activeLink('/blog')}>Blog</a>
          </Link>
          <Link href="/contact" scroll={false}>
            <a className={activeLink('/contact')}>Contact</a>
          </Link>
          <a 
            className={activeLink('/resume')} 
            href="https://drive.google.com/file/d/1kY5FDhyEOHVYz5D90xLSpCqawvlPyF78/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
          >
            Resume
          </a>
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
  
  margin-right: 10px;

  a {
      font-size: 0.9rem;
      padding: 0;
      margin: 0 5px 0 25px;
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