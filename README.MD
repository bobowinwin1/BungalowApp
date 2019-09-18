-How to run
1. run "npm install" in terminal
2. for iOS, in terminal, run npm run ios
    or the following commands,
   cd ios && pod install && cd .. , then "react-native run-ios"
3. for Android,
    a. copy the provided .keystore file into $root/android/app/
    b. in terminal, run npm run android
        or react-native run-android

-Choice of Technical stack:

1. The project is using React Native version 0.60.5

2. "axios": for making remote HTTP request. 
    Chose it over fetch is for axios': 
    a. easier JSON parsing, 
    b. better error handling, 
    c. and build-in Cross Site Forgery (XSRF) protection. 

3. "react-native-image-zoom-viewer": this package is used for the Multi-Image viewer which opens up when the main image is clicked on the PropertyDetailsSceen

4. "react-native-webview": this one is for the inline WebView on PropertyDetailsSceen.

5. "react-navigation": main navigator for the App

-Didn't use Redux, or even Context, because the App's structure is not complex enough to justify the overhead of introducing them.
