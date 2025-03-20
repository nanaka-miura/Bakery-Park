import { FC, memo } from "react";
import { Input } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

type Props = {
    onClickButton: () => void;
};

export const SearchInputButton: FC<Props> = memo((props) => {
    const { onClickButton } = props;

    return (
        <>
            <Input w="60%" placeholder="店名 / エリア / 駅" outline="none" />
            <PrimaryButton children="検索" onClick={onClickButton} />{" "}
        </>
    );
});
