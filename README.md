# Javascript Runner Safari Extension
with this Safari extension, Run defined javascript code on defined websites

- [x] DigitalOcean 2FA page autocomplate one-time-code

- [x] Udemy video player picture in picture

- [x] Instagram and Facebook 2FA page autocomplate one-time-code

- [ ] Dynamic code import for each domain and store it on local storage



### Also, It is a Chrome extension, Firefox Add-on, Edge Extension and Safari Web Extension 🎉 
The files in the path `"javascript-runner-safari-extension Extension/Resources/"` are standard files of the WebExtension (supports Chrome, Firefox, Edge, Safari).

Open the Extension Management page by navigating to `chrome://extensions`

![Load chrome extension](https://github.com/alikadir/javascript-runner-safari-extension/blob/main/chrome-extension-load.png?raw=true)

Click the Load unpacked button and select the above extension `/Resources` directory. 

Ta-da! The extension has been successfully installed.

#### Firefox

![Load firefox extension](https://github.com/alikadir/javascript-runner-safari-extension/blob/main/firefox-extension-load.png?raw=true)

#### Edge
![Load edge extension](https://github.com/alikadir/javascript-runner-safari-extension/blob/main/edge-extension-load.png?raw=true)

[WWDC2020 - Safari Web Extension](https://developer.apple.com/videos/play/wwdc2020/10665/)

https://www.tampermonkey.net

[video](https://www.youtube.com/watch?v=WtYPVLfGz8o)

## Convert chrome extension to safari extension 

[Converting a web extension for Safari](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari)

```bash
$ xcrun safari-web-extension-converter /path/to/extension
```

```bash
$ sudo xcrun safari-web-extension-converter /Users/alikadir/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.28.0_0/
```
Safari > Develop > Allow Unsigned Extensions
