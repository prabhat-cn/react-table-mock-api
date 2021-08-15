import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MaterialApi from '../tables/MaterialApi';
import MaterialCustomButton from '../tables/MaterialCustomButton';
import MaterialMock from '../tables/MaterialMock';

const TableTab = () => {
    return (
        <>
            <Tabs>
                <TabList>
                <Tab>Mock Table</Tab>
                <Tab>Custom Button</Tab>
                <Tab>Api Table</Tab>
                </TabList>

                <TabPanel>
                    <MaterialMock />
                </TabPanel>
                <TabPanel>
                    <MaterialCustomButton />
                </TabPanel>
                <TabPanel>
                    <MaterialApi />
                </TabPanel>
            </Tabs>
        </>
    )
}

export default TableTab
