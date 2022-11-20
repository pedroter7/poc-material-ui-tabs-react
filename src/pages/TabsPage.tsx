import React, { useState } from "react";
import { TabIndex } from "../enum/enums";
import {Tabs, Tab} from '@mui/material';
import TabPanel from "../components/TabPanel";
import SimpleTabChild from "../components/SimpleTabChild";

interface ITabsPageProps {
    defaultTab?: TabIndex
};

const TabsPage: React.FC<ITabsPageProps> = ({defaultTab}) => {
    const [selectedTab, setSelectedTab] = useState<TabIndex>(defaultTab ?? TabIndex.Blue);

    const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: TabIndex) => {
        setSelectedTab(newIndex);
    };

    return (
        <div>
            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Tab Blue" value={TabIndex.Blue} data-testid="tabpanel-blue" />
                <Tab label="Tab Red" value={TabIndex.Red} data-testid="tabpanel-red" />
                <Tab label="Tab Green" value={TabIndex.Green} data-testid="tabpanel-green" />
            </Tabs>
            <TabPanel index={TabIndex.Blue} value={selectedTab}>
                <SimpleTabChild color="blue"></SimpleTabChild>
            </TabPanel>
            <TabPanel index={TabIndex.Red} value={selectedTab}>
                <SimpleTabChild color="red"></SimpleTabChild>
            </TabPanel>
            <TabPanel index={TabIndex.Green} value={selectedTab}>
                <SimpleTabChild color="green"></SimpleTabChild>
            </TabPanel>
        </div>
    );
}

export default TabsPage;