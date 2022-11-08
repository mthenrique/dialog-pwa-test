import { Link } from "react-router-dom";
import InputSearch from "../InputSearch";
import { Container } from "./style";



export default function Header({keyword}: {keyword: Function}) {
  return (
    <Container>
      <Link to='/'>
        <h1>MySocial</h1>
      </Link>
      <InputSearch keyword={keyword}/>
    </Container>
  )
}