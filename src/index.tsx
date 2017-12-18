import React from "react";

export interface GreetProps {
  name: string
}

const greet = (props: GreetProps) => (
  <div>Welcome {props.name}</div>
);

export default greet;
