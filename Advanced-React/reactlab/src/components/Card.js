import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      as="article"
      spacing={0}
      align="stretch"
      borderRadius="lg"
      overflow="hidden"
      bg="rgba(255,255,255,0.08)"
      _hover={{ transform: "translateY(-4px)" }}
      transition="all .2s ease"
      height="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="180px"
      />
      <VStack align="flex-start" spacing={3} p={4} flex="1">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text opacity={0.9} flex="1">
          {description}
        </Text>
        <HStack spacing={2}>
          <Text fontWeight="semibold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;

