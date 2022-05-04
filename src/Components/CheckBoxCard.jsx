import { useState } from 'react'
import '../css/ChoiceCard.css'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const CheckBoxCard = ({text, onChange,value}) => {
  const [clicked,SetClicked] = useState(false)

  return (
    <>
          <div className={`choice-card ${ (clicked) ? "selectStyle" : "deselectStyle"}` }
           onClick={() => {SetClicked(!clicked); onChange(text,!clicked)}} 
          >

              <div className='one'>
                  <Checkbox  icon={<RadioButtonUncheckedIcon fontSize="small" />} disableRipple
                  checkedIcon={ <CheckCircleOutlineIcon backgroundcolor="white" fontSize='small'/>}
                  sx={{
                    color: "#CACACA",
                    '&.Mui-checked': {
                      color: "#FE8276",
                    },
                  }}
                  checked={clicked}
                  fontSize="small"
                  />
              </div>
              <div className={`three ${(clicked) ? "selectTextStyle" : "deselectTextStyle"}`}>
                {text}
              </div>
          </div>
    </>
  )
}

export default CheckBoxCard