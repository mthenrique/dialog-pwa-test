import styled from "styled-components";
import { Default } from "../../themes/default";

export const Container = styled(Default)``

export const UserProfile = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 2rem;

  margin-bottom: 4rem;
`

export const UserProfileImg = styled.img`
  width: 100px;
`

export const UserProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserFriends = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const DisplayFriends = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`