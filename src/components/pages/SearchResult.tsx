import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { ShopCard } from "../organisms/shop/ShopCard";
import { shops } from "../../entities/Shop";

export const SearchResult: FC = memo(() => {
    const navigate = useNavigate();

    const onClickDetail = (id: number) => {
        return navigate(`/detail/${id}`);
    };

    return (
        <Box
            p="20px 50px"
            w="100%"
            display="grid"
            gridGap="30px"
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
    );
});
