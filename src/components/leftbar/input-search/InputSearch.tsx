import { Input } from "antd";

const InputSearch = () => {
  // const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  return (
    <Input.Search
      placeholder="input search text"
      // onSearch={onSearch}
      className="w-full"
    />
  );
};

export default InputSearch;
