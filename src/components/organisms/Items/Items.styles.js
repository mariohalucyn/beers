import styled from 'styled-components'

export const StyledList = styled.ul`
  max-width: 400px;
  padding: 0;
  margin: 0 auto;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 64px;

  @media (min-width: 768px) {
    max-width: 800px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.15);

    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .image {
      width: 80px;
      margin: auto;

      img {
        width: 80px;
        margin: auto;
      }
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
