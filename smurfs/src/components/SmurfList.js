import React from "react";

function SmurfList(props) {
  console.log(props);
  return (
    <div>
      {props.smurfs.map(smurf => (
        <div key={smurf.id}>
          <h1>{smurf.name}</h1>
          <h2>{smurf.age}</h2>
          <h2>{smurf.height}</h2>
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
