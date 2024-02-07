import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myreactcapacitorapp',
  appName: 'my-react-capacitor-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: "https://my-react-capacitor-k8c5n61yn-bharath-sampath.vercel.app/",
    allowNavigation: ["my-react-capacitor-k8c5n61yn-bharath-sampath.vercel.app"]
  }
};

export default config;

