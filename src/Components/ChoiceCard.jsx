import '../css/ChoiceCard.css'
import Radio from '@mui/material/Radio';

const ChoiceCard = ({choice,image,text,subtext,clickHandler,noImage,input}) => {

  const ImageStyle = {
    display: "block"
  }

  const NoImageStyle = {
    display: "none"
  }


  let val = (choice == text);
  return (
    <>
          <div className={`choice-card ${ val ? "selectStyle" : "deselectStyle"}`} 
          onClick={() => clickHandler(text)} name={text} >
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
                    color: "#CACACA",
                    '&.Mui-checked': {
                      color: "#975169",
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
              <div className={`three ${(choice == text) ? "selectTextStyle" : "deselectTextStyle"}`}>
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