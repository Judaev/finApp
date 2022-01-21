import { StyleSheet } from "react-native";
import { Theme } from "../../core/types/theme";

export const buttonStylesSheet = (theme: Theme) =>
  StyleSheet.create({
    buttonFrame: {
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor: theme.primary,
    },
    text: {
      textAlign: 'center',
      paddingVertical: 5,
      color: theme.textPrimary,
      fontWeight: '600',
    },
  });
