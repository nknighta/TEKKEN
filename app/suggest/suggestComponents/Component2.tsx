'use client'
import { BaseSyntheticEvent, FC, useState } from "react";
import Autosuggest from "react-autosuggest";

type LangType = {
  name: string;
  employeeName: string;
};
const languages: LangType[] = [
  {
    name: "111-222-333",
    employeeName: "tekken taro"
  },
  {
    name: "111-666-333",
    employeeName: "tekken saburo"
  },
  {
    name: "222-333-444",
    employeeName: "tekken hanako",
  },
  {
    name: "333-444-555",
    employeeName: "tekken tetuo"
  },
  {
    name: "555-666-777",
    employeeName: "shacho",
  }
];

const getSuggestions = (value: string): LangType[] => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const ReactSuggestionName: FC = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<LangType[]>([]);

  const getSuggestionValue = (suggestion: LangType): string => {
    const { name } = suggestion;
    const {employeeName} = suggestion;
    return name;
    return employeeName;
  };

  const renderSuggestion = (suggestion: LangType) => {
    return <div className="text-black pt-2 pb-2 bg-white mt-2 mb-2 rounded-md">
      {suggestion.name}
      <br/>
      {suggestion.employeeName}
      </div>;
  };

  const onChange = (
    event: BaseSyntheticEvent,
    { newValue }: { newValue: string }
  ) => {
    if (event) setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const suggestions: LangType[] = getSuggestions(value);
    setSuggestions(suggestions);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "社員ID",
    value,
    onChange
  };

  const RenderInputComponent = (inputProps:any) => (
    <div>
      <input {...inputProps} 
            style={{
              backgroundColor: "black",
              color: "white",
              width: "300px",
              height: "30px",
              fontSize: 20
            }}/>
    </div>
  );
  return (
    <div>
        <div className="flex h-auto bg-black justify-center p-14">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={RenderInputComponent}
                inputProps={inputProps}/>
        </div>
    </div>
  );
};

export default ReactSuggestionName;
