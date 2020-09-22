import React from "react";
import "./index.css";
import SelectorItem from "../SelectorItem";

export default ({activeItem, setActiveItem}) => {
  const channelTypes = [
    {
      name: "Digital",
      icon: "mobile-alt",
    },
    {
      name: "Out of Home",
      icon: ["far", "clipboard"],
    },
    {
      name: "TV",
      icon: "tv",
      comingSoon: true,
    },
    {
      name: "Radio",
      icon: "broadcast-tower",
      comingSoon: true,
    },
  ];
  return (
    <div className="Selector">
      {channelTypes.map((item) => (
        <SelectorItem
          name={item.name}
          icon={item.icon}
          selected={activeItem === item.name}
          comingSoon={item.comingSoon}
          key={item.name}
          setActiveItem={setActiveItem}
        />
      ))}
    </div>
  );
};
