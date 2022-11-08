import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  Container,
  DisplayFriends,
  UserFriends,
  UserProfile,
  UserProfileImg,
  UserProfileInfo
} from "./style";

import { Link, useParams } from 'react-router-dom'
import { gql, useQuery } from "@apollo/client";
import { CompleteUserInfo } from "../Home";
import { useEffect, useState } from "react";

export const GET_USER_BY_ID = gql`
  query User_by_id($_id: String!) {
    user_by_id(id: $_id) {
      _id
      index
      picture
      age
      eyeColor
      name
      company
      email
      phone
      friends {
        _id
        index
        picture
        age
        eyeColor
        name
        company
        email
        phone
      }
    }
  }
`

export default function UserDetails() {
  const { id } = useParams<{ id: string }>()

  const { data, loading, error } = useQuery<{ user_by_id: CompleteUserInfo }>(GET_USER_BY_ID, {
    variables: {
      _id: id
    }
  })

  const [user, setUser] = useState<CompleteUserInfo>()

  useEffect(() => {
    if (!loading && data) {
      setUser(data.user_by_id)
    }
  }, [data])
  
  return (
    <Container>
      <Header keyword={(e: string) => console.log(e)} />

      <UserProfile>
        <UserProfileImg
          src={user?.picture}
        />

        <UserProfileInfo>
          <span>Name: {user?.name}</span>
          <span>Age: {user?.age}</span>
          <span>Email: {user?.email}</span>
        </UserProfileInfo>
      </UserProfile>

      <UserFriends>
        <h2>Friends:</h2>
        <DisplayFriends>
          {
            user?.friends.map(friend => {
              return (
                <Card
                  key={friend._id}
                  id={friend._id}
                  age={friend.age}
                  company={friend.company}
                  email={friend.email}
                  name={friend.name}
                  picture={friend.picture}
                  eyeColor={friend.eyeColor}
                  link={false}
                />
              )
            })
          }
        </DisplayFriends>
      </UserFriends>
    </Container>
  )
}
