import * as React from 'react'
// @ts-ignore
import { compose } from 'recompose'
import {
  Text,
  Wrapper,
  StyledSection as Section,
  StyledImg as Img,
  CommentBox,
} from './styled'

const Comment = ({ comment }) => {

  return (
    <Wrapper>
      <Section width={'35'}>
        <Img width={120} src={'https://images.pexels.com/photos/1269039/pexels-photo-1269039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />
      </Section>
      <Section width={'65'}>
        <Text>{comment.author} says...</Text>
        <CommentBox><Text>{comment.content}</Text></CommentBox>
      </Section>
    </Wrapper>
  )
}


const enhancer: any = compose(
)


export default enhancer(Comment)
