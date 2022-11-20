import React from "react";

interface ISimpleTabChildProps {
    color: string;
};

const SimpleTabChild: React.FC<ISimpleTabChildProps> = ({color}) => {
    return (
        <div>
            <h3>Hello, I was supposed to be {color}!</h3>
        </div>
    );
}

export default SimpleTabChild;