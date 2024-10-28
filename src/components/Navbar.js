// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import DiscoverEvents from './DiscoverEvents';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    font-size: 2rem;
    color: #333;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 75%;
    background-color: #fff;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
    color: #333;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #000;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #808080;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const NavButton = styled.button`
  padding: 0.5rem 1.2rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  svg {
    font-size: 1.5rem;
    color: #333;
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  button {
    width: 100%;
    padding: 0.7rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #007bff;
    }
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;

const OrSeparator = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 1rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  span {
    margin: 0 0.5rem;
    color: #888;
    font-size: 0.8rem;
  }
`;

Modal.setAppElement('#root');

function Navbar() {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);

  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>EventSpot</Logo>

        <HamburgerButton onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </HamburgerButton>

        <NavLinksContainer isOpen={isMenuOpen}>
          <CloseButton onClick={toggleMenu}>
            <FiX />
          </CloseButton>

          <NavLinks>
            <button onClick={() => handleScroll('featured-events')}>Featured Events</button>
            <button onClick={() => handleScroll('top-rated-events')}>Top Rated Events</button>
            <button onClick={() => handleScroll('discover-nearby-events')}>Discover Nearby Events</button>
          </NavLinks>

          <ButtonContainer>
            <NavButton onClick={openSearchModal}>Search</NavButton>
            <NavButton onClick={openSignInModal}>Sign In</NavButton>
            <Avatar>
              <FiUser />
            </Avatar>
          </ButtonContainer>
        </NavLinksContainer>
      </NavbarContainer>

      <Modal
        isOpen={isSearchModalOpen}
        onRequestClose={closeSearchModal}
        style={{
          content: {
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            width: '90%',
            maxWidth: '600px',
            borderRadius: '10px',
            padding: '2rem',
          },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
      >
        <DiscoverEvents onClose={closeSearchModal} />
      </Modal>

      <Modal
        isOpen={isSignInModalOpen}
        onRequestClose={closeSignInModal}
        style={{
          content: {
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            width: '90%',
            maxWidth: '400px',
            borderRadius: '10px',
            padding: '2rem',
          },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
      >
        <LoginFormContainer>
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <OrSeparator><span>Or</span></OrSeparator>
          <div className="social-buttons">
            <button style={{ backgroundColor: '#4267B2', color: '#fff' }}>
              Login with Facebook
            </button>
            <button style={{ border: '1px solid #ddd' }}>
              <FcGoogle /> Login with Google
            </button>
          </div>
        </LoginFormContainer>
      </Modal>
    </>
  );
}

export default Navbar;
