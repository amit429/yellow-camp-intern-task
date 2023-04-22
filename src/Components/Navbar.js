import React from 'react'
import { chakra, Box, Flex, useColorModeValue, HStack, Button, VisuallyHidden, IconButton, VStack, CloseButton, useDisclosure } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

    
  return (
    <>
        <chakra.header
        bg="#121727"
        w="full"
        boxShadow="xl"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.h1 color={'white'} fontStyle="san-serif" fontSize="xl" fontWeight="medium" ml="2">
              Wuri
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <Flex>
                <chakra.h1 color={'white'} fontStyle="san-serif" fontSize="xl" fontWeight="medium" ml="2">
                Writing Assistant
                </chakra.h1>
            </Flex>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

            <Flex>
                <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Wuri
                </chakra.h1>
            </Flex>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    
    </>
  )
}
