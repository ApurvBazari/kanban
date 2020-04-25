import styled from 'styled-components'

export const Column = styled.div`
  background-color: #ebecf0;
  border-radius: 5px;
  box-sizing: border-box;
  max-height: 90%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: top;
  width: 300px;
  margin-left: 20px;
`

export const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 8px;
`;

export const Footer = styled.div`
  border-radius: 5px;
  color: #5e6c84;
  padding: 0 10px 10px 5px;
  margin: 2px 10px 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(9,30,66,.08);
  }
`;

export const DropArea = styled.div`
  overflow-y: auto;
  padding: 0 10px;
`;