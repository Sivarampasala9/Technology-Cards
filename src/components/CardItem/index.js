import './index.css'

const CardItem = props => {
  const {cardItemDetails} = props
  const {title, description, imageUrl, className} = cardItemDetails

  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imageUrl} className="avatar" alt="avatar" />
    </li>
  )
}

export default CardItem
