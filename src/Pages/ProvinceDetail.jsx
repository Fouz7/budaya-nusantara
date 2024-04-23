import {useState} from "react";
import HeaderComp from "../Components/HeaderComp.jsx";
import imgHeader from '../assets/baliHeader.png'
import {
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


function ProvinceDetail() {
    const [activeTab, setActiveTab] = useState("sejarah")
    const data = [
        {
            label: "Sejarah",
            value: "sejarah",
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Budaya",
            value: "budaya",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Adat",
            value: "adat",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Pembangunan",
            value: "pembangunan",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        }
    ];

    return (
        <>
            <HeaderComp/>
            <figure className="relative">
                <img
                    src={imgHeader}
                    alt="imgHeader"
                />
                <Typography
                    variant="h1"
                    className="absolute -bottom-6 right-0 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-white"
                >
                    Bali
                </Typography>
            </figure>
            <Tabs value={activeTab} className="mx-36">
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mx-60 my-4"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900" : "text-gray-500"}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    className="bg-detail flex flex-col justify-center rounded"
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

        </>
    )
}

export default ProvinceDetail;