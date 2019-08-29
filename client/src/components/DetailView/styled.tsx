import styled from 'styled-components'
import theme from '../../global/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-top: 2rem;
`

export const Button = styled.button`
  display: flex;
  align-self: flex-end;
  background: ${theme.color.white};
  color: ${theme.color.darkerGray};
  font-size: 1.8rem;
  min-height: 3rem;
  width: 10rem;
  border: 0.1rem solid ${theme.color.gray};
  padding: 0.5rem;
  cursor: pointer;
  transition: .2s all;
  justify-content: center;
  margin-bottom: 1rem;
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

  padding: 2rem;
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

export const Name = styled.h3`
  margin-top: 0.8rem;
  font-size: 2.2rem;
  margin-bottom: 0.2rem;
  text-decoration: underline;
`

export const Producer = styled(Name)`
  text-decoration: none;
  margin-top: 0.8rem;
  font-size: 1.8rem;
`

export const Text = styled(Producer)`
  text-decoration: none;
  margin-top: 2rem;
  font-size: 1.6rem;
  align-self: flex-start;
`

export const Description = styled(Producer)`
  border-top: 0.1rem solid ${theme.color.gray};
  color: ${theme.color.darkerGray};
  margin-top: 1.2rem;
  padding-top: 1.4rem;
  font-size: 1.6rem;
  font-style: italic;
  width: 100%;
`

export const Region = styled(Description)`
  border-top: 0.1rem solid ${theme.color.gray};
  padding-top: 1rem;
  margin-top: 2rem;
  font-style: normal;
  align-self: flex-end;
  width: auto;
  font-size: 1.5rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
