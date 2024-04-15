"use client"
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";


const customIndicatorsStyle: CustomFlowbiteTheme = {
    carousel: {
        indicators: {
            active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 border border-red-500",
                on: "bg-red-700"
            }
        }
    }
};


export function Banner() {
    return (
        <div className="h-[600px] sm:h-64 xl:h-80 2xl:h-[600px]">
            <Carousel slideInterval={3000} theme={{ indicators: customIndicatorsStyle.carousel?.indicators }}>
                <img src="/banner01.jpg" alt="Banner 01" />
                <img src="/banner02.png" alt="Banner 02" />
                <img src="/banner03.png" alt="Banner 03" />
                <img src="/banner04.png" alt="Banner 04" />
            </Carousel>
        </div>
    );
};

