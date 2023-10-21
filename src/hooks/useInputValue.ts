import { useState } from 'react';

// interface inputValueData {
//   id: string;
//   pw: string;
// }

interface inputValueData {
  [key: string]: string;
}

const useInputValue = (initInput: inputValueData) => {
  const [inputValue, setInputValue] = useState<inputValueData>(initInput);

  const handleInput = (e: any): void => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const initValue = (): void => {
    setInputValue(initInput);
  };

  return { inputValue, initValue, handleInput } as const;
};

export default useInputValue;
