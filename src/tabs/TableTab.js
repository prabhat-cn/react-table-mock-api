import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MaterialCustomButton from '../tables/MaterialCustomButton';
import MaterialMock from '../tables/MaterialMock';

const TableTab = () => {
    return (
        <>
            <Tabs>
                <TabList>
                <Tab>Mock Table</Tab>
                <Tab>Custom Button</Tab>
                </TabList>

                <TabPanel>
                    <MaterialMock />
                </TabPanel>
                <TabPanel>
                    <MaterialCustomButton />
                </TabPanel>
            </Tabs>
        </>
    )
}

export default TableTab
