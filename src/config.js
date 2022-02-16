import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  repositories: [
    { owner: "getsentry", repo: "sentry-cocoa" },
    { owner: "getsentry", repo: "sentry-java" },
    { owner: "getsentry", repo: "sentry-react-native" },
    { owner: "getsentry", repo: "sentry-unity" },
    { owner: "getsentry", repo: "sentry-dart" },
    { owner: "getsentry", repo: "sentry-android-gradle-plugin" },
    { owner: "getsentry", repo: "sentry-dart-plugin" },
    { owner: "getsentry", repo: "sentry-fastlane-plugin" },
    { owner: "getsentry", repo: "sentry-dotnet" },
    { owner: "getsentry", repo: "sentry-capacitor" },
    { owner: "getsentry", repo: "sentry-mobile" },
    { owner: "getsentry", repo: "sentry-cordova" },
    { owner: "getsentry", repo: "sentry-defenses" },
    { owner: "getsentry", repo: "dotnet-assembly-alias" },
    { owner: "getsentry", repo: "symbol-collector" },
    { owner: "getsentry", repo: "sentry-xamarin" },
    { owner: "getsentry", repo: "sentry-unity-lite" },
  ],
  githubProject: {
    githubUser: "getsentry",
    projectNumber: 19,
    type: "organization", // "user" or "organization"
  },
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  PAGE_LIMIT: 50,
};

export default CONFIG;
