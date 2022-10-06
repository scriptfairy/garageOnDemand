import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "32 Rawson Street, Newtown NSW",
    description: "Hourly Rage: $5",
    image: require("../assets/fav_garage01.png"),
  },
  {
    id: 2,
    title: "14 Margaret Steet, Newtown, NSW",
    description: "Hourly Rate: $8",
    image: require("../assets/fav_garage_02.png"),
  },
  {
    id: 3,
    title: "8 Simmons St, Newtown, NSW",
    description: "Hourly Rate: $10",
    image: require("../assets/fav_garage_03.png"),
  },
  {
    id: 4,
    title: "20 Kirkwood St, Newtown, NSW",
    description: "Hourly Rate: $15",
    image: require("../assets/fav_garage_04.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = React.useState(initialMessages);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleDelete = (messageToDelete) => {
    const newMessages = messages.filter(
      (message) => message.id !== messageToDelete.id
    );
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
