import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(1fr, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: calc(10px + 26 * ((100vw - 320px) / 680));
  height: 100%;
  width: 80vw;
  margin: auto;
`
export default Wrapper
