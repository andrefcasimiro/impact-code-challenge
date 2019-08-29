import styled from 'styled-components'
import theme from '../../global/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const DetailsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  min-height: 20rem;
  margin-bottom: 10rem;
`

type BoxProps = {
  width: string,
}
export const Box = styled.div`
  display: flex;
  width: ${(p: BoxProps) => p.width || 100}%;
  flex-direction: column;

  background: ${theme.color.white};
  border: .1rem solid ${theme.color.gray};

  align-items: center;
  flex-grow: 1;
  min-width: 20rem;

  padding: 1rem;
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

export const Name = styled.h2`
  display: flex;
  text-align: center;
  margin: 0.5rem 0 1rem 0;
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 30rem;
  margin: 0.5rem 0 1rem 0;

`

export const Price = styled.p`
  display: inline;
  font-size: 1.6rem;
  text-align: center;
  margin: 0.25rem 0;
  color: black;
`

export const Style = styled.h3`
  color: ${theme.color.darkerGray};
  margin-top: 0.8rem;
  font-size: 2.2rem;
  margin-bottom: 0.2rem;
`

export const Producer = styled.p`
  color: ${theme.color.darkerGray};
  margin-top: 0.8rem;
  font-size: 1.8rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
