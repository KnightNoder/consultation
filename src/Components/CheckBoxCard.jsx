import { useState } from 'react'
import '../css/ChoiceCard.css'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const CheckBoxCard = ({text,input}) => {
  const [clicked,SetClicked] = useState(false)
  const selectStyle = {
    background: "#FFF1EF",
    border: "1px solid #FE8276",
    boxSizing: "border-box",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.12)",
    borderRadius: "6px",
    margin: "6% 0%",
    // padding: "2% 2%",
    // padding: "3% 0%",
    height: "64px",
    cursor:"pointer",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#FF8277",
  }
  const deselectStyle = {
    border: "1px solid #CACACA",
    boxSizing: "border-box",
    filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.12))",
    borderRadius: "6px",
    margin: "6% 0%",
    background: "white",
    // padding: "2% 2%",
    height: "64px",
    cursor:"pointer",
    fontFamily: "Roboto",
    fontStyle:" normal",
    fontWeight:" 400",
    fontSize:" 20px",
    lineHeight:" 23px",
    color: "#000000",
  }

  const selectTextStyle = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "19px",
    color: "#FF8277",
  }

  const deselectTextStyle = {
    fontFamily: "Roboto",
    fontStyle:" normal",
    fontWeight:" 400",
    fontSize: "19px",
    lineHeight: "19px",
    color: "#000000",
  }

  const ImageStyle = {
    display: "block"
  }

  const NoImageStyle = {
    display: "none"
  }
  return (
    <>
          <div className={`choice-card ${ input ? "semi": "full"}` } onClick={() => SetClicked(!clicked)}  
          name={text} style={(clicked) ? selectStyle : deselectStyle }
          >
              {/* <div className='radio-button'>
                  <img src={ cardSelected ? selectImage : deselectImage} name={text} alt="" />
                  </div>
                  <div className='image' >
                  <img src={image} name={text} className='image-section' alt="" />
                  </div>
                  <div className='text'style={cardSelected ? selectTextStyle : deselectTextStyle } >
                  {text}
                </div> */}
              <div className='one'>
                  <Checkbox  icon={<RadioButtonUncheckedIcon fontSize="small" />} disableRipple
                  checkedIcon={ <CheckCircleOutlineIcon backgroundColor="white" fontSize='small'/>}
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
              <div className='three' style={clicked ? selectTextStyle: deselectTextStyle}>
                {text}
              </div>
          </div>
    </>
  )
}

export default CheckBoxCard