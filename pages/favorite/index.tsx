import { useRouter } from "next/router";
import { FC } from "react";
import Card from "../../components/Favorite/Card/Card";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { useAppSelector } from "../../Hooks/common";
import { Game } from "../../Types/gameType";
import { getFavoriteSelector } from "../../utiles/selectors/profileSelectors";

type FavoriteType = {};
const urlName = ["Головна", "Вибране"];
const favorite: FC<FavoriteType> = () => {
    const games = useAppSelector(getFavoriteSelector);
    const route = useRouter();
    const isWindow = typeof window === "undefined" ? false : true;

    if (!games.length && isWindow) {
        route.push("/");
    }

    const gameFavoriteList = games.length
        ? (games as Array<Game>).map((el) => <Card key={el._id} game={el} />)
        : null;
    return (
        <HeadLayout name="Обране">
            <div className="">
                <div className="Container pb-[50px] ">
                    <Scrumbs arrName={urlName} />
                    <ul className=" flex flex-wrap m-[-7.5px] ">
                        {gameFavoriteList}
                    </ul>
                </div>
            </div>
        </HeadLayout>
    );
};

export default favorite;
