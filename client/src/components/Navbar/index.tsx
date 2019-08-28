import * as React from 'react'
import {
  Wrap,
  Content,
  Link,
} from './styled'
import appConfig from '../../global/app/config'

type Props = {
  links?: Array<{
    title: string,
    path: string,
  }>,
}

const Navbar = ({ links = appConfig.appLinks }: Props) => (
  <React.Fragment>
    <Wrap>
      <Content>
        {links.map((link, index) => <Link key={index} href={link.path}>{link.title}</Link>)}
      </Content>
      <Content>
        <Link href='#'>Login</Link>
        <Link href='#'>Register</Link>
      </Content>
    </Wrap>
  </React.Fragment>
)

export default Navbar
