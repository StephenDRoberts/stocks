import React from 'react';
import { Card } from '@blueprintjs/core';

import './Card.scss';

interface UICardProps {
    title: JSX.Element | string;
    icon?: JSX.Element;
    footer?: JSX.Element;
    className?: string;
}
const UICard: React.FC<UICardProps> = ({ title, icon, footer, children }) => {
    return (
        <Card className="card">
            <div className="card-header">
                {icon ? <div className="card-header-icon">{icon}</div> : null}
                <div className="card-header-title">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="card-body">{children}</div>
            {/* <div className="card-footer">{footer}</div> */}
        </Card >
    );
};

export default UICard;
