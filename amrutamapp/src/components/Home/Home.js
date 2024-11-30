import React from 'react'
import {Link} from "react-router-dom"
import Header from '../Header/Header'
import Appointments from '../Appointments/Appointments';
import "./Home.css"
import {FaCheckCircle, FaStar,FaStarHalfAlt,FaPlus,FaFacebook, FaInstagram, FaYoutube, FaTwitter,FaRupeeSign } from 'react-icons/fa';

const profileDetails={
    profileImg:"https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ldXvjFcwKQjg8E~ra51qWbUNehpz6G7nCWVPGi3GRGKHB9MQuV1KrdRZX4yvBRpfwoIRvih16w4Te7B2nxSvo211JMdepAcphh-37o8SXpvN1gBECrlTIOyU4LDlgOH9-70uPw~6rWbbBnQdqAdc8264HarwhUkx0XkWAXdTvorTkwlFQ8FqFVhRgtFQv2vSi4yVejSGiB8pDZfyxIFt5N5BSSdERDsPclzdgsewlhY1YymkIPsi059BTFhPjMhw4mkjlz1hkSqJXna~EgzFr93BfXCO68IdsWrZQ3TrHWv9bdw4~P8fC5wb~Fcm19y0O8JPOaCnipdxbGkpyouICw__",
    name:"Dr.Bruce Willis",
    profession:"Gynecologist",
    rating:4.2,
    followers:850,
    following:"18K",
    posts:250
}



function Home() {
  return (
    <>
    <div>
        <div>
            <Header/>
        </div>

        <div className="fullContainer">

            <div className="profileDetails">
                <div className='profileDetails1'>
                    <img src={profileDetails.profileImg} alt={profileDetails.name} className="profileimg"/>
                    <div className='profileLists'>
                        <ul className="profileList">
                            <li className="listProfile1">{profileDetails.name} <FaCheckCircle className="checkIcon"/></li>
                            <li className="listProfile2">{profileDetails.profession}</li>
                            <li className="listProfile3">{profileDetails.rating} <FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/><FaStarHalfAlt className='starcolor'/></li>
                        </ul>
                    </div>
                    <div className="followerProfile">
                        <ul className='followerList'>
                            <li className="followerListHead">Followers</li>
                            <li className="followerListNo">{profileDetails.followers}</li>
                        </ul>
                        <ul className='followerList'>
                            <li className="followerListHead">Following</li>
                            <li className="followerListNo">{profileDetails.following}</li>
                        </ul>                        
                        <ul className='followerList'>
                            <li className="followerListHead">Posts</li>
                            <li className="followerListNo">{profileDetails.posts}</li>
                        </ul>
                    </div>
                    <div className="appointmentButton">
                    <button className="appBtn"><Link to="/findDoctors" className="bookApp">Book an Appointment</Link></button>
                    </div>
                </div>
            </div>


  

            

        <div className="containers">

        <div className="sideContainer">

            <div className="profileDetails2">
                <div className="details1">
                    <h1 className='littlehead'>A Little About me</h1>
                    <div>
                        <button className="followBtn">Follow <FaPlus/></button>
                    </div>
                </div>
                <div className="cont1">
                <p>Hello I am Dr.Bruce Wills a Gynacologist in Sanjivini Hospital Surat. 
                    Love to work with all my hospital staffs and senior doctors. Completed my 
                    graduation in Gynacologist medicine from the 
                </p>
                <div className="line">
                <hr className="hrline"/> <span>Read More</span>
                </div>
                <div className="cont2">
                    <h2>Language Spoken</h2>
                    <ul className="langList">
                        <li className="langSm">English</li>
                        <li className="langSm">Hindi</li>
                        <li className="langSm">Telugu</li>
                    </ul>
                </div>
                </div>
                <div>
                    <ul className='socialIcons'>
                        <li><FaFacebook className='socialList'/></li>
                        <li><FaInstagram className='socialList'/></li>
                        <li><FaYoutube className='socialList'/></li>
                        <li><FaTwitter className='socialList'/></li>                                      
                    </ul>
                </div>
            </div>



            <div className="profileDetailsside2">
                <div className="detailsside">
                    <div className="details4">
                    <h1 className='littlehead littleheadside'>Appointment Fee</h1>
                    <div>
                        <p className="followBtn followBtnside">
                            <FaRupeeSign/>699.00</p>
                    </div>
                    </div>
                </div>

                <h2 className="littleheadside1">Select your mode of session<hr/></h2>

                <Appointments/>
                
            </div>

            </div>




            <div className="profileDetails2 profileDetails3">
                <div className="details1 details2">
                    <h1 className='littlehead littlehead1'>I Specialize In</h1>
                </div>
                <div className="details3">
                    <ul className="listDetails details3">
                        <li className="specialList"><img src="https://png.pngtree.com/background/20240309/original/pngtree-women-s-health-text-concept-periods-provide-pink-photo-picture-image_8013264.jpg" className="womenHealth"/><p className='socialList'>Women's Health</p></li>
                        <li className='specialList'><img src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2019_20/1435573/overdoing-skincare-today-main-190509.jpg" className="womenHealth"/><p  className='socialList'>Skin Care</p></li>
                        <li className='specialList'><img src="https://media.istockphoto.com/id/1253708865/photo/man-fighting-covid-19-virus.jpg?s=612x612&w=0&k=20&c=ZAsnChLU3lRQTk60eTyEFWRTVPMzvXRvY_lElZP4Kxc=" className="womenHealth"/><p  className='socialList'>Immunity</p></li>
                        <li className='specialList'><img src="https://cdn.shopify.com/s/files/1/0648/0278/3418/files/StockCake-Stylish_Hair_Care_1718782744.jpg?v=1718782905" className="womenHealth"/><p className='socialList'>Hair Care</p></li>
                    </ul>
                </div>
            </div>


            <div className="profileDetails2 profileDetails3">
                <div className="details1 details2">
                    <h1 className='littlehead littlehead1'>The Concerns I Treat</h1>
                </div>
                <div className="cont2">
                    <ul className="langList1">
                        <li className="langSm1">Skin Treatment</li>
                        <li className="langSm1">Pregnancy</li>
                        <li className="langSm1">Period Doubts</li>
                        <li className="langSm1">Endometriosis</li>
                        <li className="langSm1">Pelvic Pain</li>
                        <li className="langSm1">Ovarian Cysts</li>
                        <li className="langSm1">+5 More</li>
                    </ul>
                </div>
            </div>


            <div className="profileDetails2 profileDetails3">
                <div className="details1 details2">
                    <h1 className='littlehead littlehead1'>My Work Experience</h1>
                </div>
                <div>
                    <h3  className='littlehead littlehead2'>I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</h3>
                    <hr/>
                <div className='medicalExp'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3140/3140366.png" className="hospitalImg"/>
                <div>
                    <p className='medicalExp1'>Midtown Medical Clinic <span>2016-Present</span></p>
                    <p className='socialList'>Senior Doctor</p>
                </div> 
                </div>

                <div className='medicalExp'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3140/3140366.png" className="hospitalImg"/>
                <div>
                    <p className='medicalExp1'>Midtown Medical Clinic <span>2010-2015</span></p>
                    <p className='socialList'>Senior Doctor</p>
                </div> 
                </div>
                </div> 
            </div>


            <div className="profileDetails2 profileDetails3">
                <div className="details1 details2">
                    <h1 className='littlehead littlehead1'>Featured Reviews (102)</h1>
                </div>

                <div className='medicalExp medicalExp3'>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRaIeOEVGPLN5Yg-4zICuaGPRyZePwY_wyxsbZMQLsXME7B2HQPKH-KP8tFsCbVUD73nK_0qgUbW1ZteBUqvElCQ" className="reviewProfile"/>
                <div>
                    <p className='socialList1'>Alicent Hightower <span>20January 2023</span></p>
                    <p className='socialList2'>Consulted for Skin care</p>
                </div> 
                </div>

                <div className="startAlign">
                    <FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/>
                    <p>Might be little earlier to confirm, but yes I can see noticeable difference in my hairfall. Will write againafter using it for longer periods</p>
                </div>
                
                <div className='medicalExp medicalExp3'>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRaIeOEVGPLN5Yg-4zICuaGPRyZePwY_wyxsbZMQLsXME7B2HQPKH-KP8tFsCbVUD73nK_0qgUbW1ZteBUqvElCQ" className="reviewProfile"/>
                <div>
                    <p className='socialList1'>Alicent Hightower <span>20January 2023</span></p>
                    <p className='socialList2'>Consulted for Skin care</p>
                </div> 
                </div>

                <div className="startAlign">
                    <FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/><FaStar className='starcolor'/>
                    <p>Might be little earlier to confirm, but yes I can see noticeable difference in my hairfall. Will write againafter using it for longer periods</p>
                </div>

            </div>




        </div>

        </div>

    </div>
    </>
  )
}

export default Home