import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const App = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    document.title = "ABCD123";
  }, []);

  const handleSubmit = async () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      if (!parsedJson.data || !Array.isArray(parsedJson.data)) {
        throw new Error("Invalid JSON format: 'data' must be an array.");
      }
      setError(null);
      const response = await axios.post("http://localhost:5000/bfhl", parsedJson);
      setResponseData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const filterOptions = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    { value: "highest_alphabet", label: "Highest Alphabet" },
  ];

  const filteredResponse = () => {
    if (!responseData) return null;
    let result = {};
    if (selectedFilters.some(f => f.value === "alphabets")) {
      result.alphabets = responseData.alphabets;
    }
    if (selectedFilters.some(f => f.value === "numbers")) {
      result.numbers = responseData.numbers;
    }
    if (selectedFilters.some(f => f.value === "highest_alphabet")) {
      result.highest_alphabet = responseData.highest_alphabet;
    }
    return result;
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Frontend JSON Processor</h1>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
        placeholder='Enter JSON: { "data": ["A","C","z"] }'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
        Submit
      </button>

      {responseData && (
        <div className="mt-4">
          <Select isMulti options={filterOptions} onChange={setSelectedFilters} />
          <pre className="bg-gray-100 p-2 mt-2">{JSON.stringify(filteredResponse(), null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
