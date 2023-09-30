import {XStack, styled, Text, Image} from "tamagui";

import cookie from "../assets/cookie.png";

 
type CookieProps = {
    count:string,
}

export const Cookie = ({count}:CookieProps) => {
    return(
        <XStack alignItems="center" justifyContent="center" width={40}>
            <Image source={cookie} maxWidth={32} maxHeight={32} />
            <CookieText>{count}</CookieText>
      </XStack>
    )
}


const CookieText = styled(Text, {
    color: "#333F48",
    fontSize: 14,
});