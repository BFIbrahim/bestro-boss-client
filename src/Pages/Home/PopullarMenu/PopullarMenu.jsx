import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuIteam from "../../shared/MenuIteam/MenuIteam";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory.jsx/MenuCategory";

const PopullarMenu = () => {
    const [menu] = useMenu();
    const popullar = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
                subheading={"Check it ou"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            {/* <div className="grid md:grid-cols-2 gap-5 mb-10">
                {
                    popullar.map(item => <MenuIteam
                        key={item._id}
                        item={item}
                    ></MenuIteam>)
                }
            </div> */}

            <MenuCategory items={popullar}></MenuCategory>

        </section>
    );
};

export default PopullarMenu;