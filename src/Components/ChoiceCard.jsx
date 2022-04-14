import '../css/ChoiceCard.css'
import Radio from '@mui/material/Radio';

const ChoiceCard = ({choice,image,text,subtext,clickHandler,noImage}) => {
  const selectStyle = {
    background: "#FFF1EF",
    border: "1px solid #FE8276",
    boxSizing: "border-box",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.12)",
    borderRadius: "6px",
    margin: "6% 0%",
    // padding: "2% 2%",
    // padding: "3% 0%",
    height: "57px",
    cursor:"pointer",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
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
    height: "57px",
    cursor:"pointer",
    fontFamily: "Roboto",
    fontStyle:" normal",
    fontWeight:" 400",
    fontSize:" 16px",
    lineHeight:" 23px",
    color: "#000000",
  }

  const selectTextStyle = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "17px",
    lineHeight: "17px",
    color: "#FF8277",
  }

  const deselectTextStyle = {
    fontFamily: "Roboto",
    fontStyle:" normal",
    fontWeight:" 400",
    fontSize:"17px",
    lineHeight:" 17px",
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
          <div className="choice-card" onClick={() => clickHandler(text)}  
          name={text} style={(choice == text) ? selectStyle : deselectStyle }
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
                  <Radio 
                  sx={{
                    color: "#FF8277",
                    '&.Mui-checked': {
                      color: "#FF8277",
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 15 ,
                    }
                  }}
                  checked={choice == text}
                />
              </div>
              <div className='two' style={ (noImage) ? NoImageStyle : ImageStyle }>
                <img src={image} className='image-section' alt="" />
              </div>
              <div className='three' style={(choice == text) ? selectTextStyle : deselectTextStyle }>
                <div className='text'>
                  {text}
                </div>
                <div className='subText'>
                  {subtext}
                </div>
              </div>
          </div>
    </>
  )
}

export default ChoiceCard