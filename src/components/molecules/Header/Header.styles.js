import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

export const StyledList = styled.ul`
  list-style-type: none;
  height: 100px;
  padding: 0 24px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }

  li {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};

    svg {
      width: 32px;
      height: 32px;
      fill: ${({ theme }) => theme.colors.black};
    }

    a {
      text-decoration: none;
      font-size: 28px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
