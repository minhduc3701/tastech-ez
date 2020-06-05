import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: sticky;
  top: 120px;
  margin-top: 40px;

  button {
    margin-bottom: 20px;
    outline: none !important;
  }

  @media screen and (max-width: 991px) {
    flex-direction: row;
    margin-bottom: 0;
    position: relative;
    top: auto;

    button {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`