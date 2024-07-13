import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            {tabs.map((tab, index) => {
                return (
                    <Button
                        onClick={() => setActiveIndex(index)}
                        colorScheme='teal'
                        variant={activeIndex === index ? 'solid' : 'ghost'}
                    >
                        {tab.title}
                    </Button>
                )
            })}
            {tabs[activeIndex].content}
        </div>
    )
}

export default Tabs;
