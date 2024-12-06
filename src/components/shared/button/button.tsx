import { useNavigate } from 'react-router-dom';
import './button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type propsType = {
  title: string;
  path?: string;
};

export function CustomButton({ title, path }: propsType) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (!path) {
      return;
    }

    navigate(`${path}`);
  };
  return (
    <button className="custom-button" onClick={handleAction}>
      <FontAwesomeIcon icon={faPlay} />
      {title}
    </button>
  );
}
