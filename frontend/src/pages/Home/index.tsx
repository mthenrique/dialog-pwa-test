import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import UserList from "../../components/UserList";
import { Container } from "./style";

export const GET_USERS = gql`
  query list($keyword: String!) {
    list(keyword: $keyword) {
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
      greeting
    }
  }
`
export interface BasicUserInfo {
  _id: string
  index: number
  picture: string
  age: number
  eyeColor: string
  name: string
  company: string
  email: string
  phone: string
}

export interface CompleteUserInfo extends BasicUserInfo {
  friends: BasicUserInfo[]
  greeting: string
}

export default function Home() {
  const [keyword, setKeyword] = useState('')

  const [users, setUsers] = useState<CompleteUserInfo[]>([])
  
  const { data, loading, error } = useQuery<{ list: CompleteUserInfo[] }>(GET_USERS, {
    variables: {
      keyword
    }
  })

  useEffect(() => {
    if (!loading && data) {
      setUsers(data.list)
    }
  }, [data])

  return (
    <Container>
      <Header keyword={(e: string) => setKeyword(e)} />

      <UserList users={users} />
    </Container>
  )
}