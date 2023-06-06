import { useState } from "react";
import Navbar from "../components/navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DynamicInputForm from "@/components/dynamicInputForm";

const CreateCasePage = () => {
  const [problemStatement, setProblemStatement] = useState("");
  const [summary, setSummary] = useState("");
  const [addresses, setAddresses] = useState<string[]>([""]);

  return (
    <div className="w-full h-screen bg-[##e7e8ea]">
      <Navbar />

      <div className="max-w-[1200px] m-auto mt-5">
        <h1
          className="mb-4 text-xl font-extrabold leading-none 
        tracking-tight text-gray-900 md:text-xl  dark:text-white"
        >
          Define the case
        </h1>

        <p>First, define a case summary:</p>
        <div className="mt-3">
          <input
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            className=" appearance-none border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="summary"
            type="text"
            placeholder="summary"
          />
        </div>
        <p className="mt-5">
          A case is simply an initial problem statement that you will define in
          the text section below. Be sure to state the problem extensively.
        </p>

        <ReactQuill
          className="bg-white mt-3"
          theme="snow"
          value={problemStatement}
          onChange={setProblemStatement}
        />

        <p className="mt-5">
          It is also necessary to define the participants who will provide more
          context so the AI can elaborate on it and not be biased to a
          conclusion.
        </p>

        <DynamicInputForm inputFields={addresses} setter={setAddresses} />
        <button
          onClick={() => {
            const updatedAddresses = [...addresses];
            updatedAddresses.push("");
            setAddresses(updatedAddresses);
          }}
          className="bg-dark-blue font-bold text-white p-2 rounded mt-2"
        >
          add new field
        </button>
      </div>
    </div>
  );
};

export default CreateCasePage;
