import * as React from "react";
import Downshift from "downshift";
import styled from "styled-components";

const Form = styled.form``;

const Input = styled.input``;

const Menu = styled.ul``;
const Item = styled.li``;

// Button
const Button = styled.button``;
// Added this to align input and button :)
const InputContainer = styled.div`
  display: flex;
`;

type OptionType = {
  value?: string;
};

interface IDropdownProps {
  options: OptionType[];
  onChange?: (selectedItem: string) => void; // this is for later
  temp: string;
}

const Dropdown: React.FC<IDropdownProps> = ({ onChange, temp, options }) => {
  return (
    <Downshift
      onChange={(selectedItem) =>
        onChange(selectedItem ? selectedItem.value : "")
      }
      itemToString={(item) => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getMenuProps,
        getRootProps,
        getItemProps,
        getToggleButtonProps,
        isOpen,
        highlightedIndex,
        inputValue, // we destructure this from Downshift
        clearSelection, // add this to clear the currently selected item
      }) => (
        <Form {...getRootProps()}>
          <InputContainer className="container">
            <Input
              type="text"
              placeholder={temp}
              className="form-control"
              {...getInputProps()}
            />
            <Button
              className="ml-1 btn btn-outline-primary"
              {...getToggleButtonProps()}
            >
              {isOpen ? "↑" : "↓"}
            </Button>
            {/* add this to clear the currently selected item */}
            <Button
              className="ml-1 btn btn-outline-primary"
              //onClick={clearSelection}
            >
              x
            </Button>
          </InputContainer>
          <Menu className="pr-6 pl-3 list-group" {...getMenuProps()}>
            {isOpen &&
              options
                .filter(
                  (item) => !inputValue || item.value.includes(inputValue)
                ) // added to narrow down options
                .map((item, index) => (
                  <Item
                    {...getItemProps({
                      className: (index === highlightedIndex) ? "list-group-item active" : "list-group-item border-primary",
                      key: item.value,
                      item,
                      index,
                    })}
                  >
                    {item.value}
                  </Item>
                ))}
          </Menu>
        </Form>
      )}
    </Downshift>
  );
};
export default Dropdown;
