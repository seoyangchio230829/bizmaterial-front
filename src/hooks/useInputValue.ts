import { useState } from 'react';

const useInputValue = (initInput: object) => {
  const [inputValue, setInputValue] = useState(initInput);

  const handleInput = (e: any): void => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const initValue = (): void => {
    setInputValue(initInput);
  };

  return { inputValue, initValue, handleInput };
};

export default useInputValue;
