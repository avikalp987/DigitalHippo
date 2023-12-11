"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const Navitems = () => {
    const [activeIndex,setActiveIndex] = useState<null | number>(null);

    useEffect(() => {
        const handler = (ev : KeyboardEvent) => {
            if(ev.key === "Escape"){
                setActiveIndex(null);
            }
        }

        document.addEventListener("keydown",handler);

        return () => {
            document.removeEventListener("keydown",handler);
        }
    } ,[])

    const isAnyOpen = activeIndex !== null;

    const navRef  = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(navRef,() => setActiveIndex(null));


    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category,index) => {

                const handleOpen = () => {
                    if(activeIndex === index){
                        setActiveIndex(null);
                    }else{
                        setActiveIndex(index);
                    }
                }

                const isOpen = index===activeIndex;

                return (
                <NavItem 
                    category={category} 
                    handleOpen={handleOpen} 
                    isOpen={isOpen}
                    key={category.value}
                    isAnyOpen = {isAnyOpen}
                    
                />
                );
            })}
        </div>
    );
}
export default Navitems;