"use client"
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';


  export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <S.Container>
        <S.NavBar className="fixed">
          <S.HamburgerMenu onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </S.HamburgerMenu>
          <div>
            <Link href='/'>
              <Image src='/assets/imagesNavbar/LTS_navbar_logo.png' alt='Lucas Technology Services Logo' width={76} height={43} />
            </Link>
          </div>
          <S.MajorLinksContainer>
            <S.LinksContainer className={isMenuOpen ? 'show-links' : ''}>
              <S.Link href="/">Home</S.Link>
              <S.Link href="/services">Services</S.Link>
              <S.Link href="portfolio">Portfolio</S.Link>
              <S.Link href="contact">Contact</S.Link>
              <S.Link href="aboutUs">About Us</S.Link>
              <S.Link href="blog">Blog</S.Link>
              {isMenuOpen && (
                <S.CloseButton onClick={toggleMenu}>
                  <CgClose />
                </S.CloseButton>
              )}
            </S.LinksContainer>
          </S.MajorLinksContainer>
        </S.NavBar>
      </S.Container>
    );
  }
