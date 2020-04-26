import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  position: relative;
`

export const Edit = styled.div`
  position: absolute;
  right: 0;
  &:hover {
    background-color: rgba(9,30,66,.08);
    cursor: pointer;
  }
`;