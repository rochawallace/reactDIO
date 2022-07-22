import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;

WrapperTabs.tabsRole = 'Tabs';

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  gap: 30px;
  margin-left: 10px;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 12px;
  user-select: none;
  cursor: pointer;

  &:focus{
    outline: none;
  }

  &.is-selected{
    box-shadow: 10px 10px 14px -11px rgb(0 0 0 / 62%);
  }
`;

WrapperTab.tabsRole = 'Tab';


export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 8px;
  margin-left: 10px;
  margin-top: 10px;

  &.is-selected{
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';


export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

