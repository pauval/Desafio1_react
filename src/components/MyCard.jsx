import Tags from './Tags';

const MyCard = ({ imageUrl, name, description, raza, color_tag }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="card-body">
        <div className="card-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-tag">
          <Tags text={raza} color={color_tag} />
        </div>
      </div>
    </div>
  );
}

export default MyCard;