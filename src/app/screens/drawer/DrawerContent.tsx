import React from "react";
import { View, StyleSheet, Image } from "react-native";

import SafeAreaView from "react-native-safe-area-view";

import { useTheme } from "react-native-paper";
import { Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerItem } from "@react-navigation/drawer";

import Container from "@components/Container";

import { CustomDarkTheme } from "@app/themes/theme";

import useAuth from "@hooks/useAuth";

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { colors } = useTheme();

  const { logout, user } = useAuth();
  return (
    <Container>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image source={require("@assets/images/os.png")} />
            </View>
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={[styles.title, { color: colors.text }]}>
                {user?.name}
              </Title>
              <Caption style={[{ color: colors.text }]}>
                {user?.username}
              </Caption>
            </View>
          </View>
        </View>
        <View style={styles.border}></View>
        <View>
          <DrawerItem
            labelStyle={{
              color: colors.onSurface,
            }}
            icon={({ color, size }) => (
              <Icon name="home" color={colors.onSurface} size={size} />
            )}
            label="Início"
            onPress={() => {
              navigation.navigate("TabScreens");
            }}
          />
        </View>
        <View style={styles.border}></View>
        <View>
          <DrawerItem
            labelStyle={{
              color: colors.onSurface,
            }}
            icon={({ color, size }) => (
              <Icon name="sign-out-alt" color={colors.onSurface} size={size} />
            )}
            label=" Sair"
            onPress={() => {
              logout();
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 5,
    justifyContent: "center",
  },
  border: {
    borderBottomColor: CustomDarkTheme.colors.surface,
    borderBottomWidth: 10,
    marginBottom: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
