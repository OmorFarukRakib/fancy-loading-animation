import React, { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import FancyLoadingAnimation from 'fancy-loading-animation'
import 'fancy-loading-animation/dist/index.css'

const App = () => {
  const [loadingAnimationVarient, setLoadingAnimationVarient] = useState('bug')
  const [loadingCharacterDirection, setLoadingCharacterDirection] =
    useState('left')
  const [loadingContainerVisibility, setLoadingContainerVisibility] =
    useState(true)
  const [loadingDotShow, setLoadingDotShow] = useState(true)
  const [loadingText, setLoadingText] = useState('LOADING')
  const [loadingSize, setLoadingSize] = useState(1)
  const [loadingAnimationDelay, setLoadingAnimationDelay] = useState(0.2)

  const handleChangeVarient = (event) => {
    setLoadingAnimationVarient(event.target.value)
  }
  const handleChangeDirection = (event) => {
    setLoadingCharacterDirection(event.target.value)
  }
  const handleChangeContainerVisibility = (event) => {
    setLoadingContainerVisibility(event.target.value)
  }
  const handleChangeLoadingDotShow = (event) => {
    setLoadingDotShow(event.target.value)
  }
  const handleChangeLoadingText = (event) => {
    setLoadingText(event.target.value)
  }
  const handleChangeLoadingSize = (event) => {
    setLoadingSize(event.target.value)
  }
  const handleChangeLoadingAnimationDelay = (event) => {
    setLoadingAnimationDelay(event.target.value)
  }
  return (
    <>
      <div className='input-props-div-left'>
        <Box sx={{ width: '180px' }}>
          <FormControl fullWidth style={{ width: '180px' }}>
            <InputLabel id='demo-simple-select-label'>
              loadingAnimationVarient
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={loadingAnimationVarient}
              label='loadingAnimationVarient'
              onChange={handleChangeVarient}
            >
              <MenuItem value={'bee'}>bee</MenuItem>
              <MenuItem value={'bug'}>bug</MenuItem>
              <MenuItem value={'blue-bat'}>blue-bat</MenuItem>
              <MenuItem value={'ghost'}>ghost</MenuItem>
              <MenuItem value={'green-monster'}>green-monster</MenuItem>
              <MenuItem value={'hairy-monster'}>hairy-monster</MenuItem>
              <MenuItem value={'puppy'}>Puppy</MenuItem>
              <MenuItem value={'robot-ball'}>robot-ball</MenuItem>
              <MenuItem value={'paper-bird'}>Paper-bird</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth style={{ width: '180px', marginTop: '20px' }}>
            <InputLabel id='demo-simple-select-label'>
              loadingCharacterDirection
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={loadingCharacterDirection}
              label='loadingCharacterDirection'
              onChange={handleChangeDirection}
            >
              <MenuItem value={'left'}>left</MenuItem>
              <MenuItem value={'right'}>right</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth style={{ width: '180px', marginTop: '20px' }}>
            <InputLabel id='demo-simple-select-label'>
              loadingContainerVisibility
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={loadingContainerVisibility}
              label='loadingContainerVisibility'
              onChange={handleChangeContainerVisibility}
            >
              <MenuItem value={true}>true</MenuItem>
              <MenuItem value={false}>false</MenuItem>
            </Select>
          </FormControl>
          {/* dot  */}
          <FormControl fullWidth style={{ width: '180px', marginTop: '20px' }}>
            <InputLabel id='demo-simple-select-label'>
              loadingDotShow
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={loadingDotShow}
              label='loadingDotShow'
              onChange={handleChangeLoadingDotShow}
            >
              <MenuItem value={true}>true</MenuItem>
              <MenuItem value={false}>false</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className='input-props-div-right'>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '180px' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-name'
            label='loadingText'
            value={loadingText}
            onChange={handleChangeLoadingText}
            multiline
          />
          <br />
          <TextField
            id='outlined-name'
            label='loadingSize'
            value={loadingSize}
            onChange={handleChangeLoadingSize}
            type='number'
            inputProps={{ min: '0', max: '10', step: '0.1' }}
          />
          <br />
          <TextField
            id='outlined-name'
            label='loadingAnimationDelay'
            value={loadingAnimationDelay}
            onChange={handleChangeLoadingAnimationDelay}
            type='number'
            inputProps={{ min: '0', max: '10', step: '0.1' }}
          />
        </Box>
      </div>

      <div className='example-div'>
        <FancyLoadingAnimation
          loadingAnimationVarient={loadingAnimationVarient}
          loadingCharacterDirection={loadingCharacterDirection}
          // loadingTextStyle={{ color: 'Red' }}
          loadingContainerVisibility={loadingContainerVisibility}
          loadingDotShow={loadingDotShow}
          loadingText={loadingText}
          loadingSize={loadingSize}
          loadingAnimationDelay={loadingAnimationDelay}
        />
      </div>
      <div className='footer-div'>
        To explore all the props, please see the full documentation.{' '}
        <a href='https://github.com/omorfarukrakib/fancy-loading-animation'>Here!</a>{' '}
      </div>
    </>
  )
}
export default App


//    ALL the DEFAULT VALUES
//   _______________________________
//    loadingSize: 1, // Done
//   loadingContainerVisibility: true, // DONE
//   loadingContainerWidth: 280, // Done
//   loadingContainerHeight: 280, // Done
//   loadingContainerBorder: '1px solid rgb(0, 0, 0, 0.3)', // Done
//   loadingContainerRadius: 50, //Done
//   loadingContainerColor: '#d8d8d8', // Done
//   loadingContainerShadow: 'inset 15px 15px 10px #999', // Done
//   loadingAnimationVarient: 'puppy', // Done
//   loadingCharacterDirection: 'left', // Done
//   loadingAnimationDelay: 1, // Done
//   loadingText: 'Loading', // Done
//   loadingDotShow: true //Done
//   _______________________________
