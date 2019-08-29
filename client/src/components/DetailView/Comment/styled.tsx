import styled from 'styled-components'
import theme from '../../../global/theme'
// @ts-ignore
import { Section, Img } from '../styled'
import { mq } from '../../../common/mediaQuery'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`

type SectionProps = { width?: string }
export const StyledSection = styled(Section)`
  width: ${(p: SectionProps) => p.width || 100}%;

  ${mq("max").tablet} {
    width: 100%;
  }
`

export const StyledImg = styled(Img)`
  align-self: flex-end;
  margin-right: 5rem;

  ${mq("max").tablet} {
    align-self: center;
    margin: 0;
  }
`


export const Text = styled.p`
  width: 100%;
  display: flex;
  align-self: flex-start;
  padding-top: 1rem;
  font-size: 1.6rem;
  color: ${theme.color.darkerGray};
`

export const CommentBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  background: ${theme.color.white};
  border: .1rem solid ${theme.color.gray};
`
