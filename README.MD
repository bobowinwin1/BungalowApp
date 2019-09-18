- Choice of Technical stack:

1. "axios": for making remote HTTP request. 
    Chose it over fetch is for axios': 
    a. easier JSON parsing, 
    b. better error handling, 
    c. and build-in Cross Site Forgery (XSRF) protection. 

2. "react-native-image-zoom-viewer": this package is used for the Multi-Image viewer which opens up when the main image is clicked on the PropertyDetailsSceen

3. "react-native-webview": this one is for the inline WebView on PropertyDetailsSceen.

4. "react-navigation": main navigator for the App

- Didn't use Redux, or even Context, because the App's structure is not complex enough to justify the overhead of introducing them.
