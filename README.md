This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Output Data

```json
/* Generic Output Data Format */
{   
    /* Generic Input Data, convert bytes to image_blob */
    "compression": "jpeg",
    "image_blob": <base64str>,
    "channel": 0,
    "timestamp": "2017-09-28T04:55:01.186Z",
    
    /* Generic Inference Result Format
     */
    "annotations": [
        {  
           "type": "detection",
           "label": "person",
           "confidence": 0.93,
           "top": 100,
           "bottom": 200,
           "left": 50,
           "right": 128
        },
        ...
        {  
           "type": "classification",
           "label": "fight",
           "confidence": 0.63
        },
        ...
    ]
}
```

settings.json

```json
{
  "0": {
    "input": {
      "codec": "H.264",
      "srcMode": "byte_stream",
      "name": "Input source #0",
      "src": "rtsp://10.0.0.43:8554/live.sdp",
      "width": 1920,
      "height": 1080
    },
    "output": {
      "threshold": 0,
      "resultServer": "http://192.168.101.1:8088"
    },
    "roi": {
      "roi": [
        {
          "left": 106,
          "overlap_threshold": 0,
          "bottom": 198,
          "right": 346,
          "top": 77
        }
      ]
    }
  }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
