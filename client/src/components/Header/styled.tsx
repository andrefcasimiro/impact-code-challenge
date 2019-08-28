import styled from 'styled-components'
import theme from '../../global/theme'
import image from '../../assets/images/header_img.jpeg'
import { mq } from '../../common/mediaQuery'

export const Wrap = styled.div`
  background: ${theme.color.primary};
  background: linear-gradient(to bottom, rgba(109,0,0, 0) 0%,
              rgba(0,0,0, .7)), url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 40%;

  color: ${theme.color.white};
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${mq("max").tablet} {
    background-position: 50% 60%;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 6.6rem;

  ${mq("max").tablet} {
    font-size: 4.8rem;
    text-shadow: 1rem 0 2rem rgba(0, 0, 0, 0.8);
  }
`
