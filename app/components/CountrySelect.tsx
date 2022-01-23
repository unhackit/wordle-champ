import Select from "react-select";
import { countries } from "countries-list";
import { LoaderFunction } from "remix";
import { useEffect, useState } from "react";

const CountrySelect = () => {
    const [options, setOptions] = useState<{}[]>([]);

    const customStyles: any = {
        container: (provided: Object) => ({
            ...provided,
            border: "1px solid #000",
            borderRadius: "6px",
        }),
        input: (provided: Object) => ({
            ...provided,
            padding: 16,
            color: "#000",
        }),
        singleValue: (provided: Object) => ({
            ...provided,
            fontSize: "18px",
        }),
    };

    useEffect(() => {
        buildData();
    }, []);

    const buildData = () => {
        let data = Object.values(countries).map(({ name, emoji }) => ({ label: name + " " + emoji, value: name + "//" + emoji, emoji }));
        setOptions(data);
    };

    return <Select options={options} styles={customStyles} name="country" />;
};

export default CountrySelect;
