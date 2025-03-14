import { Select, SelectProps, Tag } from "antd";

type TagRender = SelectProps["tagRender"];
export type NoteTypeProps = {
  value: string;
  label: string;
  customTailwindTextTransparentColor: string;
};
export const noteTypes: NoteTypeProps[] = [
  {
    value: "gold",
    label: "Công việc",
    customTailwindTextTransparentColor:
      "bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-black",
  },
  {
    value: "lime",
    label: "Sự kiện",
    customTailwindTextTransparentColor:
      "bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-black ",
  },
  {
    value: "green",
    label: "Sức khỏe",
    customTailwindTextTransparentColor:
      "bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-black ",
  },
  {
    value: "cyan",
    label: "Du lịch",
    customTailwindTextTransparentColor:
      "bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-black ",
  },
  {
    value: "black",
    label: "Riêng tư",
    customTailwindTextTransparentColor:
      "bg-clip-text text-transparent bg-gradient-to-r from-black to-black ",
  },
];

const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};

const SelectNoteTypes = () => {
  return (
    <Select
      mode="multiple"
      tagRender={tagRender}
      defaultValue={noteTypes.map((option) => option.value)}
      style={{ width: "100%" }}
      options={noteTypes}
    />
  );
};
export default SelectNoteTypes;
