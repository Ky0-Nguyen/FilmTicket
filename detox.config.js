module.exports = {
    testRunner: 'jest',
    runnerConfig: 'e2e/config.json',
    configurations: {
      "ios.sim.debug": {
        "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/FilmTicket.app",
        "build": "xcodebuild -scheme FilmTicket -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
        "device": {
          "type": "iPhone 14"
        }
      },
      "android.emu.debug": {
        "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
        "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
        "device": {
          "avdName": "Pixel_3_API_30"
        }
      }
    }
  };