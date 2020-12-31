import { StyleSheet, Platform } from 'react-native';
import {Fonts} from './Fonts';

export const GUI_colors = {
  COLOR_GRAY_LIGHT: '#F4F5FA',
  COLOR_GRAY_STRONG: '#50536a',
  COLOR_FONT_DEFAULT: '#23233C',
  COLOR_FONT_MUTED: '#A5A5A5',
  COLOR_FONT_STRONG: '#122f54',
  COLOR_GREEN_STRONG: '#6CC57C',
};

export const GUI_fuentes = {
  FONT_BOLD : Fonts.Bold,
  FONT_REGULAR : Fonts.Regular,
}

export const GUI_styles = StyleSheet.create({
  container: {
    backgroundColor: GUI_colors.COLOR_GRAY_LIGHT,
    alignItems: 'center',
    padding: 20,
    flex:1
  },
  //=========================== TEXT ===============================
  textTitleBig:{
    fontSize: 40,
    textAlign : 'center',
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_BOLD
  },
  textStrong:{
    fontSize: 16,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_BOLD
  },
  textPMuted:{
    fontSize: 16,
    textAlign : 'center',
    color:  GUI_colors.COLOR_FONT_MUTED,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  textSmallMuted:{
    fontSize: 12,
    color:  GUI_colors.COLOR_FONT_MUTED,
    fontFamily: GUI_fuentes.FONT_REGULAR
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
