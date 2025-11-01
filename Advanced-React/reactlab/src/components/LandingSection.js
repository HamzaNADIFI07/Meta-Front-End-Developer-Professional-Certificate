import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// UI du landing
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      <Avatar
        src="https://i.pravatar.cc/150?img=7"
        name="Avatar"
        size="2xl"
      />
      <Heading as="h1" size="lg" textAlign="center">
        {greeting}
      </Heading>
      <Text fontSize="lg" textAlign="center">
        {bio1}
      </Text>
      <Text fontSize="md" opacity={0.9} textAlign="center">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
