<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Muolingo Expo app. Here's a summary of what was done:

- **Installed** `posthog-react-native` and `react-native-svg` (required peer dependency).
- **Created** `app.config.js` from `app.json`, adding an `extra` block that reads `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from environment variables via `expo-constants`.
- **Created** `src/lib/posthog.ts` — the PostHog client singleton, configured with lifecycle event capture, batching, and dev debug mode.
- **Updated** `src/app/_layout.tsx` — wrapped the app in `PostHogProvider` with autocapture (touch events) and added screen tracking via `posthog.screen()` in a `useEffect` tied to the Expo Router pathname.
- **Added event captures** across 5 screens covering the full user journey from onboarding through active engagement.
- **Added `posthog.identify()`** in the sign-up flow to link new users to their Clerk user ID.
- **Added `posthog.captureException()`** error tracking on auth failure paths.

| Event | Description | File |
|---|---|---|
| `get_started_tapped` | User taps "Get Started" on the onboarding screen | `src/app/onboarding.tsx` |
| `sign_up_initiated` | User submits email on the sign-up screen | `src/app/(auth)/sign-up.tsx` |
| `sign_up_completed` | User successfully verifies email and creates account | `src/app/(auth)/sign-up.tsx` |
| `sign_up_via_google` | User signs up using Google SSO | `src/app/(auth)/sign-up.tsx` |
| `sign_up_via_apple` | User signs up using Apple SSO | `src/app/(auth)/sign-up.tsx` |
| `sign_in_initiated` | User submits email on the sign-in screen | `src/app/(auth)/sign-in.tsx` |
| `signed_in` | User successfully verifies email and signs in | `src/app/(auth)/sign-in.tsx` |
| `sign_in_via_google` | User signs in using Google SSO | `src/app/(auth)/sign-in.tsx` |
| `sign_in_via_apple` | User signs in using Apple SSO | `src/app/(auth)/sign-in.tsx` |
| `language_selected` | User confirms their chosen learning language | `src/app/language-selection.tsx` |
| `continue_learning_tapped` | User taps "Continue" on the home screen | `src/app/(tabs)/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/199342/dashboard/740047)
- [Sign-up Funnel](https://eu.posthog.com/project/199342/insights/oIm3XKg5) — Conversion from Get Started → Email submitted → Account created
- [Daily Sign-ups & Sign-ins](https://eu.posthog.com/project/199342/insights/4cUOX6UF) — Daily trend of new accounts and returning sign-ins
- [Languages Selected](https://eu.posthog.com/project/199342/insights/rZMlUkS0) — Which languages users are choosing, broken down by name
- [Auth Method Breakdown](https://eu.posthog.com/project/199342/insights/edvqBxPj) — Email vs Google vs Apple sign-up comparison
- [Full Onboarding Funnel](https://eu.posthog.com/project/199342/insights/aU65XB5D) — End-to-end funnel: Get Started → Sign up → Language picked → Continue learning tapped

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-expo/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
