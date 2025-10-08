import React, { useRef } from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  console.log(props)
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        color: '#1976d2',
        height: 6,
        '& .MuiSlider-thumb': {
          height: 22,
          width: 22,
          backgroundColor: '#fff',
          border: '2px solid #42e732',
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#42e732',
          },
        },
        '& .MuiSlider-rail': {
          opacity: 1,
          backgroundColor: '#b0b0b0',
          borderRadius: 3,
          // width: '200px', // длинна всего трека
          width: '20%', // длинна всего трека
        },
        '& .MuiSlider-track': {
          backgroundColor: '#42e732',
          borderColor: '#42e732',
          borderRadius: 3,
          // maxWidth: '200px', // длинна зеленого распространения
          maxWidth: '20%', // длинна зеленого распространения
        },

      }}

      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
