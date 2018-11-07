import React from 'react'

import Dot from './Dot'
import DotWrapper from './Wrapper'

const LoadingDots = () => (
  <DotWrapper>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </DotWrapper>
)

export default LoadingDots
