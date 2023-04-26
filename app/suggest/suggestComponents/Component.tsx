'use client'
import { BaseSyntheticEvent, FC, useState } from "react";
import Autosuggest from "react-autosuggest";

type LangType = {
  name: string;
};
type IdType = {
    id: string;
  };

const languages: LangType[] = [
  {
    name: "tekken taro"
  },
  {
    name: "tekken hanako",
  }
];

const id: IdType[] = [
    {
      id: "111-222-333"
    },
    {
        id: "222-333-444"
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

const ReactSuggestionID: FC = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<LangType[]>([]);

  const getSuggestionValue = (suggestion: LangType): string => {
    const { name } = suggestion;

    return name;
  };

  const renderSuggestion = (suggestion: LangType) => {
    return <div className="text-black pt-2 pb-2 bg-white mt-2 mb-2 rounded-md">
    {suggestion.name}
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
    placeholder: "名前",
    value,
    onChange
  };

  return (
    <div>
        <div className="flex bg-black h-auto justify-center p-14">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}/>
        </div>
    </div>
  );
};

export default ReactSuggestionID;
