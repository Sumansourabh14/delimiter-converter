import {
  Box,
  Button,
  Container,
  Field,
  Stack,
  Switch,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { siteTitle } from "./data/content";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [checked, setChecked] = useState(false);

  const spaceToHyphens = (input: string): string => {
    return input.replace(/ /g, "-");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOutput(spaceToHyphens(text));
  };

  const toggleLowerCase = (checked: boolean) => {
    if (checked) {
      setChecked(true);
      setOutput(output.toUpperCase());
    } else {
      setChecked(false);
      setOutput(output.toLowerCase());
    }
  };

  return (
    <>
      <Container centerContent py={8}>
        <Text fontSize="5xl" fontWeight="bold">
          {siteTitle}
        </Text>

        <VStack py={16} style={{ width: "100%" }}>
          <Text fontSize="lg" color="gray.400" pb={8}>
            Convert space (" ") to hyphen ("-")
          </Text>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack gap={4}>
              <Stack
                justifyContent={"center"}
                width="100%"
                direction={{
                  base: "column",
                  md: "row",
                }}
              >
                <Box flex={1}>
                  <Field.Root>
                    <Field.Label>Enter Text</Field.Label>
                    <Textarea
                      placeholder="Enter text here"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      resize="vertical"
                      h="100px"
                    />
                  </Field.Root>
                </Box>
                <Box flex={1}>
                  <Field.Root>
                    <Field.Label>Converted Output</Field.Label>
                    <Textarea
                      placeholder="Converted output"
                      value={output}
                      readOnly
                      resize="vertical"
                      h="100px"
                    />
                  </Field.Root>
                </Box>
              </Stack>
              <VStack gap={4}>
                <Button
                  type="submit"
                  colorScheme="blue"
                  disabled={text.trim().length === 0}
                >
                  Convert
                </Button>
                <Switch.Root
                  checked={checked}
                  onCheckedChange={(e) => toggleLowerCase(e.checked)}
                >
                  <Switch.HiddenInput />
                  <Switch.Control />
                  <Switch.Label>Change output to lower case</Switch.Label>
                </Switch.Root>
              </VStack>
            </VStack>
          </form>
        </VStack>
      </Container>
    </>
  );
}

export default App;
