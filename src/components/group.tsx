import React from "react";

export type GroupScope = "all" | "any" | "none";

export interface GroupProps {
  scope: GroupScope
}

export const Group = (props: GroupProps) => (
  <div>When {props.scope} of the conditions match</div>
);
