import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { Container } from './styles';

export function SocialButtons() {
  return (
    <Container>
      <a href="https://www.instagram.com/murilloressguitar?igsh=YmQ5cGNuMnhuMmtz" target='blank' rel='noopener noreferrer'>
        <button className='instagram'>
          <FaInstagram />
        </button>
      </a>

      <a href="https://www.tiktok.com/@murilloressguitar?_t=8oSGdv3qcoX&_r=1" target='blank' rel='noopener noreferrer'>
        <button className='tiktok'>
          <FaTiktok />
        </button>
      </a>
    </Container>
  )
}
