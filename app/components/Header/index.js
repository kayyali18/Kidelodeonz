import React from 'react'
import { FormattedMessage } from 'react-intl'

import Wrapper from './Wrapper'
import HeaderLink from './HeaderLink'
import messages from './messages'

function Header() {
  return (
    <Wrapper>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/about">
        <FormattedMessage {...messages.about} />
      </HeaderLink>
      <HeaderLink to="/">
        <FormattedMessage {...messages.title} />
      </HeaderLink>
      <HeaderLink to="/contact">
        <FormattedMessage {...messages.contact} />
      </HeaderLink>
      <HeaderLink to="/faq">
        <FormattedMessage {...messages.faq} />
      </HeaderLink>
    </Wrapper>
  )
}

export default Header
