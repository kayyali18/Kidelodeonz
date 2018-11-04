import React from 'react'
import { FormattedMessage } from 'react-intl'

import Wrapper from './Wrapper'
import FooterLink from './FooterLink'
import messages from './messages'

function Footer() {
  return (
    <Wrapper>
      <FooterLink to="/contact">
        <FormattedMessage {...messages.info} />
      </FooterLink>
      <FooterLink to="/">
        <FormattedMessage {...messages.home} />
      </FooterLink>
      <FooterLink to="/contact">
        <FormattedMessage {...messages.contact} />
      </FooterLink>
    </Wrapper>
  )
}

export default Footer
