import React from "react";
import { ServicesTabs as TabsList } from "@/app/types/servicesTabs";
import {Tab, Tabs} from "@mui/material";
import styles from "./styles.module.scss"
import Flex from "@/app/components/Flex/Flex";

interface IServicesTabs{
  activeTab:string,
  handleTabChange: (event: any, value: any) => void;
}

const ServicesTabs: React.FC<IServicesTabs> = ({ activeTab, handleTabChange}) => {
  const allTabs = [TabsList.county, TabsList.adventure, TabsList.hiking, TabsList.camping, TabsList.group];

  return (
    <Tabs
      value={activeTab}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabChange}
      variant="fullWidth"
      sx={{
        ".MuiTabs-indicator": {
          display: "none",
        },
        ".Mui-selected": {
          backgroundImage: "linear-gradient(260deg, var(--color--orange), var(--color--yellow))",
        },
        ".MuiTabs-flexContainer": {
          gap: 3,
          flexWrap: "wrap"
        },
        ".MuiButtonBase-root": {
          minWidth: 130,
          maxWidth: 200,
        },
      }}
    >
      {allTabs.map((tab) => (
        <Tab
          className={styles["service-tab"]}
          label={
            <Flex gap={5} alignItems="center">
              <div className={styles["service-tab-button"]}></div>
              {tab}
            </Flex>
          }
          value={tab}
          key={tab}
        />
      ))}
    </Tabs>
  );
};

export default ServicesTabs;
