import { useState } from "react";
import "./App.css";
import { siteTitle } from "./data/content";

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
      <h1 className="font-bold text-4xl">{siteTitle}</h1>
      <p className="read-the-docs"></p>

      <p className="my-8">Convert space (" ") to hyphen ("-")</p>
      <section className="flex justify-center my-8">
        <form onSubmit={handleSubmit}>
          <section className="flex flex-col gap-8">
            <section className="flex flex-col sm:flex-row gap-8">
              <section>
                <textarea
                  style={{ fontFamily: "inherit" }}
                  placeholder="Enter text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="border-2 p-2 rounded-lg"
                />
              </section>
              <section>
                <textarea
                  style={{ fontFamily: "inherit" }}
                  placeholder="Output text"
                  value={output}
                  readOnly
                  className="border-2 p-2 rounded-lg"
                />
              </section>
            </section>
            <section>
              <button
                type="submit"
                disabled={text.trim().length === 0}
                className="cursor-pointer border-2 py-2 px-8"
              >
                Convert
              </button>
            </section>
          </section>
        </form>
      </section>
    </>
  );
}

export default App;
