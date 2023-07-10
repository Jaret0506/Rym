import Card from "./Card";
import "../App.css";

export default function Cards(props) {
  console.log(props.characters);

  // <h2>{props.id}</h2>
  // <h2>{props.name}</h2>
  // <h2>{props.status}</h2>
  // <h2>{props.species}</h2>
  // <h2>{props.gender}</h2>
  // <h2>{props.origin}</h2>
  // <div>
  //   <img src={props.image} alt="Aqui iria la imagen" />
  return (
    <div className="stilos">
      {props.characters.map((item) => {
        return (
          <Card
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
            origin={item.origin.name}
            image={item.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}

//{props.characters.foreach((character) => {
// <Card id={character.id}/>;
//})}
