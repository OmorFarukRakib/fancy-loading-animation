import React, { useState, useEffect } from 'react'

import styles from './index.css'

const loadingAnimationCharacterArray = [
  'bug',
  'puppy',
  'ghost',
  'green-monster',
  'bee',
  'hairy-monster',
  'robot-ball',
  'blue-bat',
  'paper-bird'
]

const LoadingAnimation = (props) => {
  const [selectedLoadingCharacter, setSelectedLoadingCharacter] =
    useState('bug')
  const [loadingContainerStyleFromProps, setLoadingContainerStyleFromProps] =
    useState({})
  const [loadingCharacterStyle, setLoadingCharacterStyle] = useState({})

  useEffect(() => {
    if (
      loadingAnimationCharacterArray.includes(props.loadingAnimationVarient)
    ) {
      setSelectedLoadingCharacter(props.loadingAnimationVarient)
    } else {
      setSelectedLoadingCharacter('bug')
    }
    if (props.loadingContainerVisibility) {
      setLoadingContainerStyleFromProps({
        background: props.loadingContainerColor,
        width: `${props.loadingContainerWidth}px`,
        height: `${props.loadingContainerHeight}px`,
        border: props.loadingContainerBorder,
        borderRadius: `${props.loadingContainerRadius}%`,
        boxShadow: props.loadingContainerShadow,
        transform: `scale(${props.loadingSize})`
      })
    } else {
      setLoadingContainerStyleFromProps({
        background: 'transparent',
        transform: `scale(${props.loadingSize})`
      })
    }
    console.log(selectedLoadingCharacter)
    if (props.loadingCharacterDirection === 'right') {
      setLoadingCharacterStyle({
        transform: `translate(-50%, -50%) rotateY(180deg)`,
        animationDuration: `${props.loadingAnimationDelay}s`
      })
    } else {
      setLoadingCharacterStyle({
        transform: `translate(-50%, -50%)`,
        animationDuration: `${props.loadingAnimationDelay}s`
      })
    }
  }, [props])
  console.log(styles)
  const dcd = () => {
    if (selectedLoadingCharacter === 'bug') return styles.bug
    else if (selectedLoadingCharacter === 'puppy') return styles.puppy
    else if (selectedLoadingCharacter === 'ghost') return styles.ghost
    else if (selectedLoadingCharacter === 'green-monster')
      return styles.green_monster
    else if (selectedLoadingCharacter === 'robot-ball') return styles.robot_ball
    else if (selectedLoadingCharacter === 'blue-bat') return styles.blue_bat
    else if (selectedLoadingCharacter === 'paper-bird') return styles.paper_bird
    else if (selectedLoadingCharacter === 'bee') return styles.bee
    else if (selectedLoadingCharacter === 'hairy-monster')
      return styles.hairy_monster
  }

  return (
    <React.Fragment>
      {/* <div className='loading-container'> */}
      <div
        className={styles.loading_container}
        style={{
          ...loadingContainerStyleFromProps,
          ...props.loadingContainerStyle
        }}
      >
        <div
          className={`${styles.character} 
          
         ${dcd()}
        
          `}
          style={{ ...loadingCharacterStyle, ...props.loadingAnimationStyle }}
        ></div>
        <p className={styles.loading_text} style={props.loadingTextStyle}>
          {props.loadingText}
          {props.loadingDotShow && (
            <React.Fragment>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </React.Fragment>
          )}
        </p>
      </div>
    </React.Fragment>
  )
}

LoadingAnimation.defaultProps = {
  loadingSize: 1, // Done
  loadingContainerVisibility: true, // DONE
  loadingContainerWidth: 280, // Done
  loadingContainerHeight: 280, // Done
  loadingContainerBorder: '1px solid rgb(0, 0, 0, 0.3)', // Done
  loadingContainerRadius: 50, //Done
  loadingContainerColor: '#d8d8d8', // Done
  loadingContainerShadow: 'inset 15px 15px 10px #999', // Done
  loadingAnimationVarient: 'bug', // Done
  loadingCharacterDirection: 'left', // Done
  loadingAnimationDelay: 1, // Done
  loadingText: 'Loading', // Done
  loadingDotShow: true, //Done
  loadingTextStyle: {},
  loadingAnimationStyle: {},
  loadingContainerStyle: {}
}

export default LoadingAnimation
