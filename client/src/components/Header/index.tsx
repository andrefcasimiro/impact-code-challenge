import * as React from 'react'
import {
  Wrap,
  Content,
  Logo,
} from './styled'
import appConfig from '../../global/app/config'

type Props = {
  appName?: string,
}

const Header = ({ appName = appConfig.appName }: Props) => (
  <React.Fragment>
    <Wrap>
      <Content><Logo>{appName}</Logo></Content>
    </Wrap>
  </React.Fragment>
)

export default Header
