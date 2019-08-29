import styled from 'styled-components'
import theme from '../../global/theme'
import image from '../../assets/images/search_bar_img.jpeg'
import { mq } from '../../common/mediaQuery'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`

export const Wrap = styled.div`
  display: flex;
  background: ${theme.color.primary};
  background: linear-gradient(to bottom, rgba(0,0,0, 0.6) 0%,
              rgba(0,0,0, .2)), url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 40%;

  min-height: 3rem;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 2rem;

  align-items: center;

  ${mq('max').tabletWide} {
    flex-direction: column;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;

  ${mq('max').tabletWide} {
    margin-bottom: 2rem;
  }
`
