import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  position: relative;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

export const Edit = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  justify-content: space-between;
`;