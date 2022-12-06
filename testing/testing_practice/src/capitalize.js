const capitalize = (string) => {
    if (typeof string != "string") return string;
    return string[0].toUpperCase() + string.slice(1);
};

export { capitalize };
