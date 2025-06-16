import { useState } from "react";
import "./App.css";
import { siteTitle } from "./data/content";
import { Button, Textarea } from "@chakra-ui/react";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const spaceToHyphens = (input: string): string => {
    return input.replace(/ /g, "-");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOutput(spaceToHyphens(text));
  };

  return (
    <>
      <h1>{siteTitle}</h1>
      <p></p>

      <p>Convert space (" ") to hyphen ("-")</p>
      <section>
        <form onSubmit={handleSubmit}>
          <section>
            <section>
              <section>
                <Textarea
                  style={{ fontFamily: "inherit" }}
                  placeholder="Enter text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </section>
              <section>
                <Textarea
                  style={{ fontFamily: "inherit" }}
                  placeholder="Output text"
                  value={output}
                  readOnly
                />
              </section>
            </section>
            <section>
              <Button type="submit" disabled={text.trim().length === 0}>
                Click me
              </Button>
            </section>
          </section>
        </form>
      </section>
    </>
  );
}

export default App;
