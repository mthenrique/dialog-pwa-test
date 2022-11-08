import { Link } from "react-router-dom";
import {
  CardDescription, 
  CardDescriptionItemKey, 
  CardDescriptionItemValue, 
  CardDescriptionItem, 
  CardImage, 
  Content, 
} from "./style";

export interface UserCardInfo {
  id: string
  picture: string
  name: string
  age: number
  eyeColor: string
  company: string
  email: string
  link: boolean
}

export default function Card(props: UserCardInfo) {
  return (
    <Content>
      {
        props.link ? (
          <Link to={`/${props.id}`}>
            <CardImage src={ props.picture }/>
          </Link>
        ) : (
          <CardImage src={ props.picture }/>
        )
      }

      <CardDescription>
        <CardDescriptionItem>
          <CardDescriptionItemKey>Name: </CardDescriptionItemKey>
          <CardDescriptionItemValue>{ props.name }</CardDescriptionItemValue>
        </CardDescriptionItem>

        <CardDescriptionItem>
          <CardDescriptionItemKey>Age: </CardDescriptionItemKey>
          <CardDescriptionItemValue>{ props.age }</CardDescriptionItemValue>
        </CardDescriptionItem>

        <CardDescriptionItem>
          <CardDescriptionItemKey>Eye color: </CardDescriptionItemKey>
          <CardDescriptionItemValue>{ props.eyeColor }</CardDescriptionItemValue>
        </CardDescriptionItem>

        <CardDescriptionItem>
          <CardDescriptionItemKey>Company: </CardDescriptionItemKey>
          <CardDescriptionItemValue>{ props.company }</CardDescriptionItemValue>
        </CardDescriptionItem>

        <CardDescriptionItem>
          <CardDescriptionItemKey>Email: </CardDescriptionItemKey>
          <CardDescriptionItemValue>{ props.email }</CardDescriptionItemValue>
        </CardDescriptionItem>
      </CardDescription>
      
    </Content>
  )
}