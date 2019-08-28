import * as React from 'react'
import {
  Wrap,
  Content,
  Logo,
} from './styled'
import appConfig from '../../global/app/config'
import Navbar from '../Navbar'

type Props = {
  appName?: string,
}

const Header = ({ appName = appConfig.appName }: Props) => (
  <Wrap>
    <Content>
      <Logo onClick={() => window.location.assign('/')}>
        {appName}
      </Logo>
    </Content>
    <Navbar />
  </Wrap>
)

export default Header
