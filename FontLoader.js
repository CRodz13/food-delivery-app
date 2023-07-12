import * as Font from 'expo-font';

export default function loadFonts() {
  return Font.loadAsync({
    'Roboto-Black': require('./assets/fonts'),
    'Roboto-BlackItalic': require('./assets/fonts'),
    'Roboto-Bold': require('./assets/fonts'),
    'Roboto-BoldItalic': require('./assets/fonts'),
    'Roboto-Italic': require('./assets/fonts'),
    'Roboto-Light': require('./assets/fonts'),
    'Roboto-LightItalic': require('./assets/fonts'),
    'Roboto-Medium': require('./assets/fonts'),
    'Roboto-MediumItalic': require('./assets/fonts'),
    'Roboto-Regular': require('./assets/fonts'),
    'Roboto-Thin': require('./assets/fonts'),
    'Roboto-ThinItalic': require('./assets/fonts'),
    'Roboto-RobotoCondensed-Bold': require('./assets/fonts'),
    'Roboto-RobotoCondensed-Italic': require('./assets/fonts'),
    'Roboto-RobotoCondensed-Light': require('./assets/fonts'),
    'RobotoCondensed-LightItalic': require('./assets/fonts'),
    'RobotoCondensed-Regular': require('./assets/fonts'),
    'RobotoCondensed-BoldItalic': require('./assets/fonts'),
  });
}
