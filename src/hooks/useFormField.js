import { useState } from "react";

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const setVal = (event) => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return [value, setVal, reset];
};