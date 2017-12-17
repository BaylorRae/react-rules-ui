import React from "react";

interface GreetProps {
  name: string
}

const greet = (props: GreetProps) => (
  <div>Welcome {props.name}</div>
);

