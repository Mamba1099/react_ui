import { useBreakpointValue, Text, Button, VStack } from "@chakra-ui/react";

export default function UseBreakPointValueComponent() {
  const variant = useBreakpointValue({
    base: "outline",
    md: "solid",
  });

  return (
    <VStack align="flex-start">
      <Text>Resize the size of your window</Text>
      <Button colorScheme="teal" variant={variant}>
        Button
      </Button>
    </VStack>
  );
}
