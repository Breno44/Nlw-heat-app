import React from "react";

import { styles } from "./styles";
import { Button } from "../../components/Buttons";
import { useAuth } from "../../hooks/auth";

import { View } from "react-native";
import { COLORS } from "../../theme";

export function SigninBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Entrar Com Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
