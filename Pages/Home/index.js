import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; //importando biblioteca de icons

export default function Home({ navigation }) {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getEmail() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setEmail(json.email);
    }
    getEmail();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            marginTop: "20%",
            height: 60,
            width: 60,
            alignSelf: "center",
          }}
          source={require("../../assets/logoConn.png")}
        ></Image>
      </View>

      <View style={{ marginTop: "20%" }}>
        <Text
          style={{
            fontSize: 60,
            color: "#B20000",
            marginLeft: "10%",
          }}
        >
          Olá {email}
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: "#B20000",
            marginLeft: "15%",
            marginRight: "10%",
          }}
        >
          Nosso app está em desenvolvimento!
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: "5%", marginLeft: "15%", marginRight: "5%" }}
        >
          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#ffac06" }]}
            onPress={() => navigation.navigate("Post")}
          >
            <Icon name="post" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#ffa06c" }]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Icon name="bell" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#5facdb" }]}
            onPress={() => navigation.navigate("Chat")}
          >
            <Icon name="chat" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#bb3" }]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#e5e5e5" }]}
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialCommunityIcons name="account" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#bb32fe" }]}
            onPress={() => navigation.navigate("Crud")}
          >
            <Icon name="dots-horizontal" color="white" size={32} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //container principal
    flex: 1,
  },
  buttonsTab: {
    //buttons da tab-bar
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 10,
  },
});