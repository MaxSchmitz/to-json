import Placeholder from "./placeholder";
import { useState } from "react";
import Button from "./button";
import { ClipboardCopyIcon } from "@heroicons/react/outline";

export default function Card() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const example = 
    `{
      "dog": {
        "color": "brown",
        "weight": 50,
        "type": "corgie"
      }
  }`;

  async function onSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    // setAnimalInput("");
    setLoading(false);
  }


    return (
        <form className="gap-8 sm:flex p-8 bg-gray-700" onSubmit={onSubmit}>
          <textarea 
            className="w-full aspect-video rounded-md p-4"
            type="text"
            name="animal"
            placeholder="Enter text here"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}></textarea>
          <div className="flex flex-col my-4 space-y-4">
            <Button isLoading={loading} />
            <Placeholder />
          </div>
          <div className="w-full aspect-video rounded-md bg-gray-50 p-4 max-w-prose overflow-auto"> 
            <button onClick={() => navigator.clipboard.writeText(result)} type="button">
              <ClipboardCopyIcon className="h-5 w-5 text-blue-500"/>
            </button>
            <div className="font-mono whitespace-pre text-left">
              {result}
            </div>
          </div>
        </form>
    )
  }