import React from "react";
import * as C from "./style";

const ResumeItem = ({ title, Icon, value}) => {
    return (
        <C.Conatiner>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
                <C.Total>{value}</C.Total>
        </C.Conatiner>
    );
};

export default ResumeItem;