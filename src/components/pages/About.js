import React from "react";

export default function About(props) {
  return (
    <div>
      <h2 className="display-4">About contact {props.match.params.id}</h2>
      <p className="lead">Simple app </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}
