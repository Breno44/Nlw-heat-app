import React from "react";

import { MotiView } from "moti";

import { View, Text } from "react-native";
import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
  index: number;
};

export function Message({ data, index }: Props) {
  function checkIndexIsEven(n: number | undefined) {
    if (n) {
      return n % 2 == 0;
    }
  }

  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
      style={[styles.container, { marginLeft: checkIndexIsEven(index) ? 70 : 0 }]}
    >
      <Text style={styles.message}>{data.text}</Text>

      <View style={styles.footer}>
        <UserPhoto imageUri={data.user.avatar_url} sizes="SMALL" />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
