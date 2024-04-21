import 'bootstrap/dist/css/bootstrap.min.css';

const Tags = ({ text, color }) => {
  return (
    <span className={`badge bg-${color}`}>{text}</span>
  );
}

export default Tags;
