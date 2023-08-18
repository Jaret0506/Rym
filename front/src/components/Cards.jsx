import Card from "./Card";
import "../App.css";

export default function Cards(props) {
  return (
    <div className="container">
      {props.characters.length > 0 &&
        props.characters.map((item) => {
          return (
            <Card
              id={item.id}
              name={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}
              origin={item.origin.name}
              image={item.image}
              onClose={props.onClose}
            />
          );
        })}
    </div>
  );
}

//{props.characters.foreach((character) => {
// <Card id={character.id}/>;
//})}
