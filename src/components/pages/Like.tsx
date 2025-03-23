import { FC, memo } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { shops } from "../../entities/Shop";
import { ShopCard } from "../organisms/shop/ShopCard";
import { PageTitle } from "../molecules/PageTitle";

export const Like: FC = memo(() => {
    const navigate = useNavigate();

    const onClickDetail = (id: number) => {
        return navigate(`/detail/${id}`);
    };

    return (
        <>
            <PageTitle title="お気に入り店舗" subTitle="likes" />
            <Box
                p="20px 50px"
                w="100%"
                display="grid"
                gridGap="40px"
                gridTemplateColumns="repeat(auto-fit,minmax(230px, 1fr))"
                justifyItems="center"
            >
                {shops.map((shop) => {
                    return (
                        <ShopCard
                            onClickDetail={() => onClickDetail(shop.id)}
                            key={shop.id}
                            shop={shop}
                        />
                    );
                })}
            </Box>
        </>
    );
});
