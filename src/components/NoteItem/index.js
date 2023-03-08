import {Container, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, note} = details

  return (
    <Container>
      <Heading>{title}</Heading>
      <Para>{note}</Para>
    </Container>
  )
}

export default NoteItem
