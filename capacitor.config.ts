import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.test',
  appName: 'test',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      "launchShowDuration": 0
    },
    PushNotifications: {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  },
};

export default config;
