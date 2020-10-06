import React from "react";
import { Card } from "@blueprintjs/core";

import "./Card.scss";

interface UICardProps {
  title?: JSX.Element | string;
  icon?: JSX.Element;
  footer?: JSX.Element;
  className?: string;
}
const UICard: React.FC<UICardProps> = ({ title, icon, footer, children }) => {
  return (
    <Card className="card">
      {title ? (
        <div className="card-header">
          {icon ? <div className="card-header-icon">{icon}</div> : null}
          <div className="card-header-title">
            <h1>{title}</h1>
          </div>
        </div>
      ) : null}
      <div className={title ? "card-body" : "card-body card-headless-body"}>
        {children}
      </div>
    </Card>
  );
};

export default UICard;
