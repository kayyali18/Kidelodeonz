import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(1fr, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: calc(10px + 26 * ((100vw - 320px) / 680));
  max-height: 100%;
  background: linear-gradient(#ff700b, #ff275f);
`
export default Wrapper
