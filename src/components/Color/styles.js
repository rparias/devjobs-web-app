import styled from 'styled-components'

const ColorContainer = styled.div`
  color: var(--clr-white);
  background: ${(props) => props.color || '#fff'};
  border: ${(props) => props.color || '1px solid #d6d6d6'};
  height: 100px;
  width: 100px;
  border-radius: 40%;
`

export default ColorContainer
