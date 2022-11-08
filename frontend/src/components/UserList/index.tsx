import { Link } from "react-router-dom";
import { CompleteUserInfo } from "../../pages/Home";
import Card from "../Card";
import { UserListContainer } from "./style";

interface Users {
  users: CompleteUserInfo[];
}

export default function UserList(props: Users) {
  return (
    <UserListContainer>
      {
        props.users.map(user => {
          return (
            <Card
              key={user._id}
              id={user._id}
              picture={user.picture}
              name={user.name}
              age={user.age}
              eyeColor={user.eyeColor}
              company={user.company}
              email={user.email}
              link={true}
            />
          )
        })
      }
    </UserListContainer>
  )
}
