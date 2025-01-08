import { Heading, List } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <Heading>List</Heading>

      {items.length === 0 && <Text>No item found</Text>}
      <List.Root>
        {items.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default ListGroup;
