import PostHog from 'posthog-react-native';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.posthogProjectToken as string | undefined;
const host = Constants.expoConfig?.extra?.posthogHost as string | undefined;
const isConfigured = !!apiKey && apiKey !== 'phc_your_project_token_here';

if (!isConfigured) {
  console.warn('PostHog: project token not configured. Set POSTHOG_PROJECT_TOKEN in your .env file.');
}

const appVersion = Constants.expoConfig?.version ?? '1.0.0';
const appBuild =
  Constants.expoConfig?.ios?.buildNumber ??
  String(Constants.expoConfig?.android?.versionCode ?? '1');

export const posthog = new PostHog(apiKey || 'placeholder_key', {
  host,
  disabled: !isConfigured,
  captureAppLifecycleEvents: true,
  customAppProperties: {
    $app_version: appVersion,
    $app_build: appBuild,
  },
  flushAt: 20,
  flushInterval: 10000,
});

if (__DEV__) {
  posthog.debug();
}
