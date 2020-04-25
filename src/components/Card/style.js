import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 200px;
  height: 100px;
  color: ${props => props.textColor}
`