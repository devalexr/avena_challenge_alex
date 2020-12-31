import { StyleSheet, Platform } from 'react-native';

export const GUI_colors = {
  COLOR_BLUE_STRONG: '#0f3057',
  COLOR_BLUE: '#00587a',
  COLOR_BLUE_LIGHT: '#008891',
  COLOR_SUCCESS: '#82d22d',
  COLOR_GRAY_LIGHT: '#F4F5FA',
  COLOR_GRAY_STRONG: '#50536a',
  COLOR_DANGER: '#ed1b23',
  COLOR_FONT_DEFAULT: '#3c3c3c',
  COLOR_FONT_MUTED: '#9c9e9f',
  COLOR_FONT_STRONG: '#122f54',
};

export const GUI_styles = StyleSheet.create({
  container: {
    backgroundColor: GUI_colors.COLOR_GRAY_LIGHT,
    alignItems: 'center',
    padding: 20,
    flex:1
  },
  //=========================== SHADOW ====================================
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
