import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myreactcapacitorapp',
  appName: 'my-react-capacitor-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
