import styled from 'styled-components'

export const Container = styled.button`
  height: 24px;
  width: 60px;
  background-color: ${props => props.color};
  cursor: pointer;
  position: absolute;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  right: 10px;
  &:hover {
    opacity: 0.8;
  }
`