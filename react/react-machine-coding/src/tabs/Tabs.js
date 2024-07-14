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
            <div style={{ marginTop: '20px' }}>
                {tabs[activeIndex].content}
            </div>
        </div>
    )
}

export default Tabs;
