import Link from 'next/link';
import { useRouter } from 'next/router'
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';


export default function SidebarNav(props) {
  //This is to find which link is active and
  //style it a different color.
  const router = useRouter();
  const activeLink = (href) => router.pathname === href ? 'menu-item isActive' : 'menu-item';
  //Check if light or dark mode to change the 
  //color of the burger icon.
  const lightMode = props.light ? 'light-mode' : '';
  const menuOpen = false;


  return (
    <>
    <Menu right burgerBarClassName={lightMode}>
      <Link href="/">
        <a className={activeLink('/')} >Home</a>
      </Link>
      <Link href="/about">
        <a className={activeLink('/about')} >About</a>
      </Link>
      <Link href="/portfolio">
        <a className={activeLink('/portfolio')} >Portfolio</a>
      </Link>
      <Link href="/blog">
        <a className={activeLink('/blog')}>Blog</a>
      </Link>
      <Link href="/contact">
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
    <style jsx>{`
      a {
        font-size: 1.3rem;
        text-transform: uppercase;
        padding: 0;
        margin: 1.5rem 0;
        font-weight: 400;
        letter-spacing: 0.5rem;
        color: #A2A2A2;
        text-decoration: none;
        transition: color 0.3s linear;
        border: none;
        list-style-type: none;
        outline: none;
      }

      a.isActive {
        color: #65DC98;
        opacity: 0.7;
      }

      a:hover {
        color: #00FFFF;
        cursor: pointer;
      }

      a.isActive:hover {
        color: #65DC98;
        cursor: not-allowed;
      }
    `}</style>
    </>
  );
};

