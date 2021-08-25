import styled from 'styled-components';

export const CardProfile = styled.div`
  display: flex;
  width: 357px;
  height:873px;
  margin: 3rem 2rem 0 1rem;
`;

export const CardProfileInner = styled.div`
  border: 1px solid var(--gray);
  border-radius: 1em;
  padding: 0 0.50rem 0 0.50rem;
`;

export const ImgProfile = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  margin: 1rem auto 0 auto;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  font-family: 'Roboto', sans-serif;
  
  h1{
    font-weight: 400;
  }

  h2{
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    a{
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        color: var(--white-dark);
      }

    }
  }

  p{
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1.25rem;
    vertical-align: middle;
  }
`;