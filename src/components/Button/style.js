import styled from 'styled-components'

export const Container = styled.button`
  height: 24px;
  background-color: ${props => props.color};
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  margin-left: ${props => `${props.marginLeft}px` || 0};
  &:hover {
    opacity: 0.8;
  }
`