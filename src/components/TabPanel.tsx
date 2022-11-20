import { Box } from "@mui/material";
import React from "react"
import { TabIndex } from "../enum/enums";

interface ITabPanelProps<T> {
    children?: React.ReactNode;
    index: T;
    value: T;
}

const TabPanel: React.FC<ITabPanelProps<TabIndex>> = ({children, index, value}) => {
    return (
        <div role="tabpanel" hidden={value !== index}>{value === index && <Box p={3}>{children}</Box>}</div>
    );
};

export default TabPanel;