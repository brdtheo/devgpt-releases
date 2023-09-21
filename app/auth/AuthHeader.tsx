import { supabase } from "@/utils/supabase";
import { Box, Flex, Image } from "@chakra-ui/react";
import AstroHead from "@/images/astro_profile.png";

//components
import Logo from "@/app/components/Logo";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="slate.600"
      pb={3}
      alignItems="center"
    >
      <Logo />
      <Image src={AstroHead.src} objectFit='contain' width='25px' height='25px' alt="DevGPT Astro" />
    </Flex>
  );
};