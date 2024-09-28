This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



## Project Structure

This React Native project follows a modular structure to enhance organization and maintainability. Here's an overview of the main directories and their purposes:

### `/src`
The main source code directory.

- `/components`: Reusable UI components used across the app.
- `/modules`: Feature-specific modules, each containing its own components, screens, and logic.
  - `/home`: Home module, including the list of films.
    - `/list`: Components and logic for the film list.
- `/navigation`: Navigation-related files, including the root navigator.
- `/store`: Redux store configuration and reducers.
- `/core`: Core utilities, types, and constants.

### `/e2e`
End-to-end tests using Detox.

### Root Files
- `index.js`: The entry point of the application.
- `App.tsx`: The root component that sets up the Redux provider and navigation.

This structure promotes separation of concerns, making it easier to locate and maintain different parts of the application. Each module can be developed and tested independently, improving scalability and collaboration among team members.


## Running Detox Tests

To run end-to-end tests using Detox, follow these steps:

1. Ensure you have Detox installed globally:
   ```
   npm install -g detox-cli
   ```

2. Build the app for testing:
   - For iOS:
     ```
     detox build --configuration ios.sim.debug
     ```
   - For Android:
     ```
     detox build --configuration android.emu.debug
     ```

3. Run the tests:
   - For iOS:
     ```
     detox test --configuration ios.sim.debug
     ```
   - For Android:
     ```
     detox test --configuration android.emu.debug
     ```

Make sure you have the necessary emulators or simulators set up before running the tests. Refer to the `.detoxrc.js` file for configuration details.

For more information on Detox and its capabilities, visit the [official Detox documentation](https://wix.github.io/Detox/).

