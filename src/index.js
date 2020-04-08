import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.4,
  image:
    "https://i2.wp.com/itc.ua/wp-content/uploads/2018/04/Avengers_Infinity_War_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
};

function Image(props) {
  //console.log("Image props", props);
  return <img src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("MovieItem props", props);
//   const { data: { title, vote_average, image} } = props;
//   return (
//     <div>
//     <Image src={image} alt={title}/>
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_average, image }
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
