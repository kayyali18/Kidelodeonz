import styled from 'styled-components'

import BounceAnimation from './animation'

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 15px;
  /* Animation */
  animation: ${BounceAnimation} 1s ease-in infinite;
  animation-delay: ${props => props.delay};
`

export default Dot
