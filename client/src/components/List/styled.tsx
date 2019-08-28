import styled from 'styled-components'
import theme from '../../global/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const TilesWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin-bottom: 10rem;
`

export const Tile = styled.div`
  display: flex;
  position: relative;
  background: ${theme.color.white};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 16rem;
  height: 26rem;
  flex-grow: 1;
  border: .1rem solid ${theme.color.gray};
  transition: .2s all;
  z-index: ${theme.zIndices.tiles};
  cursor: pointer;

  &:hover {
    transform: translateY(-0.1rem);
    transform: scale(1.02);
    box-shadow: 0 1rem 5rem 0 rgba(0,0,0,0.1);
    z-index: ${theme.zIndices.tiles + 1};
  }
`

export const Name = styled.h3`
  display: flex;
  text-align: center;
  margin: 0;
  margin-top: 0.2rem;
  font-size: 1.6rem;
`

export const Producer = styled(Name)`
  font-size: 1.4rem;
  font-style: italic;
  margin-top: 1rem;
  padding: 0.5rem;

  color: ${theme.color.darkerGray};
  &:hover {
    text-decoration: underline;
  }
`

export const Img = styled.img`
  height: 8rem;
`

export const Price = styled.p`
  display: inline;
  font-size: 1.6rem;
  text-align: center;
  margin: 0.25rem 0;
  color: black;
`

export const Style = styled(Price)`
  text-align: center;
  font-size: 1.4rem;
  color: ${theme.color.darkerGray};
  margin-top: 0.8rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
