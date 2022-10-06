import React from "react";
import { FlatList, StyleSheet, View, IconComponent } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import * as colors from "../config/colors";

const menuItems = [
  {
    title: "Portfolio",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My History",
    icon: {
      name: "history",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Invoices",
    icon: {
      name: "cash",
      backgroundColor: colors.primary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Christine Al-Thifairy"
          subTitle="chris@jzoo.com"
          image={require("../assets/Christine.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="FAQ"
        IconComponent={
          <Icon
            name="frequently-asked-questions"
            backgroundColor={colors.link}
          />
        }
      />
      <ListItem
        title="Contact Us"
        IconComponent={<Icon name="chat" backgroundColor={colors.link} />}
      />
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor={colors.link} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
