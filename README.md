
# Fancy-Loading-Animation

> The package contains some fancy looking loading animation components to use in react project. There are many usefull props to easily customize the component to meet any need.

[![NPM](https://img.shields.io/npm/v/fancy-loading-animation.svg)](https://www.npmjs.com/package/fancy-loading-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Demo

[DEMO](https://omorfarukrakib.github.io/fancy-loading-animation/)

## Installation

Install my component with npm

```bash
  npm i fancy-loading-animation
```
    
## Screenshots

![fancy-loading-animation-demo](https://user-images.githubusercontent.com/38896577/148423937-dfa764a4-8de9-4630-8769-77b7f68fe3d5.gif)


## Usage/Examples
Import my component and use where you want to show the loading animation.
```javascript
import React from 'react'
import FancyLoadingAnimation from 'fancy-loading-animation'
import 'fancy-loading-animation/dist/index.css'

const App = () => {
  return (
    <FancyLoadingAnimation
      loadingAnimationVarient='bee'
      loadingAnimationDelay={0.3}
      loadingCharacterDirection='right'
      loadingTextStyle={{ color: 'orange' }}
      
    />
  )
}
export default App
```


## API Reference

#### These are the props to customize the component.



| Props     | Type     | Description                | Default   |
| :--------: | :-------: | :------------------------- | :------:    |
| `loadingAnimationVarient`   | `string`  | It will choose the varient of the loading animation among [`bug`, `bee`, `blue-bat`, `ghost`, `green-monster`, `hairy-monster`, `paper-bird`, `puppy` and `robot-ball`] | `bug`   |
| `loadingCharacterDirection`   | `string`  | It will choose the direction of the loading animation among [`left` and `right`] | `left`   |
| `loadingAnimationDelay`   | `number`  | It will slow/fast the loading animation among  | `1`   |
| `loadingSize`   | `number` | It will increase/decrease the whole animation size  | `1`  |
| `loadingSize`   | `number` | It will increase/decrease the whole animation size  | `1`  |
| `loadingContainerVisibility`   | `boolean` | Control the visibility of the container of the animation  | `true`  |
| `loadingContainerWidth`   | `number` | Control the width of the background container of the animation  | `280`  |
| `loadingContainerHeight`   | `number` | Control the height of the background container of the animation  | `280`  |
| `loadingContainerBorder`   | `string` | Modify the border of the background container of the animation [css property of border] | `1px solid rgb(0, 0, 0, 0.3)`  |
| `loadingContainerColor`   | `color` | Modify the color of the background container of the animation [css property of background-color] | `#d8d8d8`  |
| `loadingContainerShadow`   | `string` | Modify the shadow property of the background container of the animation [css property of box-shadow] | `inset 15px 15px 10px #999`  |
| `loadingText`   | `string` | Sets the loading text | `Loading`  |
| `loadingDotShow`   | `boolean` | Select whether to show dots after loading text | `true`  |

### Advance
#### If one wants to dive deeper and modify all the CSS property of all the animation elements [Container, Animation Character, Loading Text] then below props will help

| Props     | Type     | Description                | Default   |
| :--------: | :-------: | :------------------------- | :------:    |
| `loadingContainerStyle` | `CSS style Object` | Value pass through this props will set the style property of the container of the loading animation| `{}`    |
| `loadingAnimationStyle` | `CSS style Object` | Value pass through this props will set the style property of the loading animation character| `{}`    |
| `loadingTextStyle` | `CSS style Object` | Value pass through this props will set the style property of the loading text| `{}`    |

# Acknowledgements
#### I would like to show my gratitude towards below free sources/ assets/ tutorials to help me making this component.

 - [Frankslaboratory](https://www.youtube.com/c/Frankslaboratory)
 - [Free assets](https://bevouliin.com/)
 


## License

[MIT](https://choosealicense.com/licenses/mit/) © [OmorFarukRakib](https://github.com/OmorFarukRakib)


## Support

For support, please mail me at omorfarukrakib@gmail.com.




## Links

[![Github](https://img.shields.io/badge/-Github-000?style=flat&logo=Github&logoColor=white)](https://github.com/OmorFarukRakib)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/omorfarukrakib/)
[![Gmail](https://img.shields.io/badge/-Gmail-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:omorfarukrakib@gmail.com)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=flat&logo=facebook&logoColor=white)](https://www.facebook.com/OmorFarukRakib/)
