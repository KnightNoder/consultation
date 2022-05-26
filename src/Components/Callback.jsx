import Header from "./Header"
import logo from '../images/mars-logo.png'
import doctor  from '../images/doctor-small.png'
import phone from '../images/call.png'
import GenericButton from './GenericButton';
import '../css/Recommendation.css'
import { useEffect, useState } from "react";
import '../css/ProceedTemplate.css'
const {getCategory,getProductId,getSendMailData} = require('./common/utils')
const axios = require('axios');

const Callback = ({saturn_choice}) => {
    const [image,Set_image] =  useState('');
    const [price,Set_price] = useState('');
    const [compare_at_price,Set_compare_at_price] = useState('')
    const [title,Set_title] = useState('');
    const [product_link,Set_link]= useState('');
    const [bmi,Set_bmi] = useState('')
    const [disp,Set_disp] = useState(true);
    const [variant_id,Set_variant_id] = useState('');
    // const [product_subtext,Set_product_subtext] = useState('')
    
  useEffect(()=>{
    const product_id = getProductId(saturn_choice);
    console.log(product_id,'prod id');
    // const weight = parseInt(saturn_choice.user_info.height);
    // const height = parseInt(saturn_choice.user_info.weight);
    // const BMI = parseInt((weight * 10000) / (height * height));
    // Set_bmi(BMI)
    setTimeout(() => {
        Set_disp(false)
      }, 4000);
    const getData = async () => {
        var config = {
            method: 'get',
            url: `https://${process.env.REACT_APP_GET_PRODUCTS_BASE_URL}/${saturn_choice.category}/products.json`,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': "https://stagingappapi.ghc.health/api/device/consultation",
              "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Max-Age": 86400
            }
        };
        await axios(config)
        .then(response => {
            const product_recommended = (response.data["products"].filter((item) => item.id == product_id));
            console.log(product_recommended,'reco prod')
            let product_title = product_recommended[0]["title"];
            const product_price = product_recommended[0]["variants"][0]["price"]
            const compare_price = product_recommended[0]["variants"][0]["compare_at_price"]
            const img_src = product_recommended[0]["images"][0]["src"]
            const variant_id =  product_recommended[0]["variants"][0]["id"]
            console.log(variant_id,'variant_id');
            Set_link(`${variant_id}:1?checkout[shipping_address][first_name]=${saturn_choice.user_info.first_name}&
             checkout[shipping_address][last_name]=${saturn_choice.user_info.last_name}&
             checkout[shipping_address][phone]=${saturn_choice.user_info.phone_number}`
            )
            // checkout[contact_email]=${saturn_choice.user_info.email}
            console.log(product_link,'prod link');
            // Set_product_subtext(subtext)
            Set_title(product_title);
            Set_image(img_src)
            Set_price(product_price)
            Set_compare_at_price(compare_price)
            // Set_link(product_recommended[0]["handle"])
        }).catch((error)=>{
            console.log(error)
        });
    }

    getData();

    const data = getSendMailData(saturn_choice);
    const config = {
        method: 'post',
        url: `https://${process.env.REACT_APP_SEND_MAIL_API_BASE_URL}/api/device/consultation`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config).then((response) => {
        console.log('success')
      }).catch(function (error) {
        console.log(error);
      }); 

  },[])

    
  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            Our best minds are curating a personalized wellness plan for you
            <div className="progress-bar-saturn">
                <div class="in"></div>
            </div>
        </div>
        <Header/>
        <div className="recommendation-section">
            <div className="doctor-info2" style={{marginTop:"0%"}}>
                <div className="logo">
                    <img src={logo} className='image' alt="" />
                </div>  
                <div className="details2">
                    {/* <div className="image-section">
                        <img src={doctor} className='image' alt="" />
                    </div> */}
                    <div className="name-designation">
                        <div className="name">
                            Thank you for filling out the assessment!
                        </div>
                        { (saturn_choice.appointment_type == 'FREE Consultation call') ? <div className="designation">
                            One of our physician’s assistants will call you shortly.
                        </div> : <div className="designation"> </div> }
                        <div className="designation">
                            {(saturn_choice.appointment_type == 'FREE Consultation call') ? "Meanwhile," : ""} Check out our recommended products.
                        </div>
                    </div>
                </div>
                {/* <h2>
                    Audio Consultation
                </h2> */}
                {/* <div className="details" style={{marginTop:"10%"}}> 
                    <div className="image-section">
                        <img src={phone} className='image-call' alt="" />
                    </div>
                    <div className="name-designation">
                        <div className="booking" style={{color: "#12B435"}}>
                            Booking confirmed
                        </div>
                        <div className="booking">
                            Date: 7 May 2022
                        </div>
                        <div className="booking">
                            Time: 12:30 p.m
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="shown-h3">
                        We Recommend only the best for you
                    </h3>
                    <h3 className="hidden-h3">
                         Our Recommendation
                    </h3>
                   { saturn_choice.category === 'weight-management' ?  <div className="bmi">
                        <div className="bmi-text">
                            Your BMI
                        </div>
                        <div className="bmi-number">
                            {bmi}
                        </div> 
                    </div>: ""}
                </div>
               
                <div className="product-card">
                    <div className="image-section">
                        <img src={image} className="image" alt="Product1" srcset="" />
                    </div>
                    <div className="details">
                        <div className="reco-1">
                            Highly Recommended
                        </div>
                        <div className="heading">
                            {title}
                            {/* Completete Hair Treatment */}
                        </div>
                        {/* <div className="subtext"> */}
                            {/* {product_subtext} */}
                            {/* Treats all hair concerns and improves overall hair growth */}
                        {/* </div> */}
                        <div className="price">
                           Rs.{price} <span className="strike-text">&nbsp;&nbsp;<strike>Rs.{compare_at_price}</strike> </span>
                        </div>
                        <div className="buy-button product-checkout-button">
                            <GenericButton productNavigate="true" productLink={product_link} radiusBottom="true" text={"Buy Now"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-checkout">
                <div className="proceed-container">
                    <div className='proceed-button'>
                        <GenericButton text="BUY NOW"  productNavigate="true" productLink={product_link}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}




export default Callback