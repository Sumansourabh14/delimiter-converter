import { useState } from "react";
import "./App.css";
import { siteTitle } from "./data/content";
import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Switch,
  Textarea,
  VStack,
} from "@chakra-ui/react";

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

  const toggleLowerCase = () => {
    if (output === output.toLowerCase()) {
      setChecked(true);
      setOutput(output.toUpperCase());
    } else {
      setChecked(false);
      setOutput(output.toLowerCase());
    }
  };

  return (
    <>
      <h1>{siteTitle}</h1>
      <p>Convert space (" ") to hyphen ("-")</p>
      <Container centerContent fluid>
        <form onSubmit={handleSubmit}>
          <Box>
            <HStack>
              <Box>
                <Textarea
                  style={{ fontFamily: "inherit" }}
                  placeholder="Enter text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  variant={"subtle"}
                  autoresize
                />
              </Box>
              <Box>
                <Textarea
                  style={{ fontFamily: "inherit" }}
                  placeholder="Output text"
                  value={output}
                  readOnly
                  variant={"subtle"}
                />
              </Box>
            </HStack>
            <Box>
              <Button type="submit" disabled={text.trim().length === 0}>
                Convert
              </Button>
              <Switch.Root checked={checked} onCheckedChange={toggleLowerCase}>
                <Switch.HiddenInput />
                <Switch.Control />
                <Switch.Label>Lower case</Switch.Label>
              </Switch.Root>
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default App;
