import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const CharacterCard = (props) => {
  const navigate = useNavigate();
  const title = props.characterData.name;
  const description = props.characterData.nickname;
  const img = props.characterData.img;
  const char_id = props.characterData.char_id;
  return (
    <Card
      hoverable={true}
      onClick={() => {
        navigate(`${char_id}`);
      }}
      style={{
        width: 300,
        margin: "5px",
        borderRadius: "20px",
        cursor: "pointer",
        padding: "10px",
        marginTop: "25px",
        marginBottom: "25px",
      }}
      cover={
        <img
          style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "top",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          alt="example"
          src={img}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
export default CharacterCard;
