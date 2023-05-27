import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuIteam from "../../shared/MenuIteam/MenuIteam";

const PopullarMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popullarIteam = data.filter(item => item.category === "popular")
            setMenu(popullarIteam)
        })
    },[])

    return (
        <section>
            <SectionTitle
                subheading={"Check it ou"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div>
                {
                    menu.map(item => <MenuIteam 
                        key={item._id}
                        item={item}
                    ></MenuIteam>)
                }
            </div>
        </section>
    );
};

export default PopullarMenu;