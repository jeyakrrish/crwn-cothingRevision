import { useNavigate } from 'react-router-dom';
import { DirectoryBodyContainer, DirectoryItemContainer, BackgroundImage } from './directory-item.styles';

const DirectoryItem = ({ directory }) => {
  const { title, imageUrl } = directory;

  const navigate = useNavigate();

  const clickHandler = () => navigate(`/shop/${title}`)

  return (
    <DirectoryItemContainer onClick={clickHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <DirectoryBodyContainer>
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer >
  )
}

export default DirectoryItem;