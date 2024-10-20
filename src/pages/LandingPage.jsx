import styles from "./LandingPage.module.css";
import {Link} from "react-router-dom"
// function LandingPage(){
//   return(
//     <>
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
//   />
//   <div className="scrollContainer w-full max-w-4xl">
//     <div className="scrollItem rounded-lg p-6 max-w-md mx-auto mr-4">
//       <div className="flex items-start space-x-2">
//         <i className="fas fa-quote-left text-blue-500 text-2xl" />
//         <div>
//           <p className="font-semibold text-lg">
//             “Clients are also really happy to use it”
//           </p>
//           <p className="text-gray-600 mt-2">
//             The automated reminders that go out to clients, helps reduce no
//             shows. All my clients are also really happy to use it and think it
//             looks professional. It has reduced so much admin, as it allows
//             clients to book, reschedule and cancel their appointments
//             themselves, without having to contact me.
//           </p>
//           <p className="font-semibold mt-4">Anneli H</p>
//           <div className="flex mt-2">
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="scrollItem rounded-lg p-6 max-w-md mx-auto mr-4">
//       <div className="flex items-start space-x-2">
//         <i className="fas fa-quote-left text-blue-500 text-2xl" />
//         <div>
//           <p className="font-semibold text-lg">“Very user friendly”</p>
//           <p className="text-gray-600 mt-2">
//             I have been looking to streamline my appointment booking system and
//             Appointy has managed to exceed my expectations. Very user friendly
//             for me and the clients find it easy to book too. The support team is
//             excellent and was very patient and helpful.
//           </p>
//           <p className="font-semibold mt-4">Dave T</p>
//           <div className="flex mt-2">
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-gray-300" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="scrollItem rounded-lg p-6 max-w-md mx-auto mr-4">
//       <div className="flex items-start space-x-2">
//         <i className="fas fa-quote-left text-blue-500 text-2xl" />
//         <div>
//           <p className="font-semibold text-lg">“Excellent service”</p>
//           <p className="text-gray-600 mt-2">
//             The service provided by Appointy has been excellent. It has made
//             managing appointments so much easier and more efficient. The user
//             interface is intuitive and easy to navigate.
//           </p>
//           <p className="font-semibold mt-4">John D</p>
//           <div className="flex mt-2">
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="scrollItem rounded-lg p-6 max-w-md mx-auto mr-4">
//       <div className="flex items-start space-x-2">
//         <i className="fas fa-quote-left text-blue-500 text-2xl" />
//         <div>
//           <p className="font-semibold text-lg">“Highly recommend”</p>
//           <p className="text-gray-600 mt-2">
//             I highly recommend Appointy for anyone looking to streamline their
//             appointment scheduling process. The features are robust and the
//             support team is always ready to help.
//           </p>
//           <p className="font-semibold mt-4">Sarah K</p>
//           <div className="flex mt-2">
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-yellow-500" />
//             <i className="fas fa-star text-gray-300" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="flex justify-center mt-4 space-x-2">
//     <div className="dot active" onclick="scrollToItem(0)" />
//     <div className="dot inactive" onclick="scrollToItem(1)" />
//     <div className="dot inactive" onclick="scrollToItem(2)" />
//   </div>
// </>

//   )
// }
// export default LandingPage
import React, { useRef, useState } from "react";
// import './App.css';
const features = [
  {
    title: "Omnichannel Scheduling",
    description:
      "Accept bookings from Google/social media, or integrate our 24x7 online enterprise scheduler on your client-facing application/website to provide a seamless booking experience",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/w2KSHTyK2i6gGJBvYgEIeLjVQi42nshx2QVeT6J8Lc8F0moTA.jpg",
    alt: "Calendar icon with 24x7 text",
  },
  {
    title: "User  Roles & Rights",
    description:
      "With role-based access you can control which feature or how much information is available to different users depending on their role within the organization",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/ruvSbO2gjeVPOqR0dMpxwkdvgM3qYfx06MlDOJT9ZB68zmoTA.jpg",
    alt: "User  roles icon",
  },
  {
    title: "Organizational Hierarchy",
    description:
      "Easily manage cross functional teams, multiple locations and users spread across different geographies from a single interface",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/gue4etrLfEax3puTsFLVC9psvniXS90DEWv2GVrzowACoNRnA.jpg",
    alt: "Organizational hierarchy icon",
  },
  {
    title: "Database Management",
    description:
      "Store important client data like appointment details, purchase history, etc. under dedicated user profiles to collect insights and deliver personalized services",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/j2SQuMJNe4x5HiATee3gl6yUIALtDTnX7pEt41fqS4j6PbiOB.jpg",
    alt: "Database management icon",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Keep a track of your bookings, users, and other important metrics with the option to print and export data in various formats",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/gYsCafU9eVsfKIKQftK7JFkN4OstFurycWoJMcStgcpPQbiOB.jpg",
    alt: "Reporting and analytics icon",
  },
  {
    title: "Reminders & Notifications",
    description:
      "Receive sms, email, or in-app notifications for booking updates. Automated reminders are also sent to attendees before appointments to reduce no shows",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/N2yhXUrkA75rDZl1ReMwJx7SJbpoS9X6MvBYTssCUyefnNRnA.jpg",
    alt: "Reminders and notifications icon",
  },
  {
    title: "Mobile App",
    description:
      "Stay on top of your upcoming appointments and schedule no matter where you are with Appointy's Android & iOS mobile app",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/OVA7YAR8eBxHcKHfvDnoRwXbBfec3P7jlBOCnP9ksw9IQbiOB.jpg",
    alt: "Mobile app icon",
  },
  {
    title: "Online Payments",
    description:
      "Accept full or partial prepayments for your services using our integration with popular payment gateways like Stripe, Square, and PayPal",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/mNKI0Xf9AKx7T6gg6Yh27mcndaheyVReNCJ1c6WeyGDbQbiOB.jpg",
    alt: "Online payments icon",
  },
];

const testimonials = [
  {
    quote: "Clients are also really happy to use it",
    feedback:
      "The automated reminders that go out to clients help reduce no shows. All my clients are also really happy to use it and think it looks professional. It has reduced so much admin, as it allows clients to book, reschedule and cancel their appointments themselves, without having to contact me.",
    name: "Anneli H",
    rating: 5,
  },
  {
    quote: "Very user friendly",
    feedback:
      "I have been looking to streamline my appointment booking system and Appointy has managed to exceed my expectations. Very user friendly for me and the clients find it easy to book too. The support team is excellent and was very patient and helpful.",
    name: "Dave T",
    rating: 4,
  },
  {
    quote: "Excellent service",
    feedback:
      "The service provided by Appointy has been excellent. It has made managing appointments so much easier and more efficient. The user interface is intuitive and easy to navigate.",
    name: "John D",
    rating: 5,
  },
  {
    quote: "Highly recommend",
    feedback:
      "I highly recommend Appointy for anyone looking to streamline their appointment scheduling process. The features are robust and the support team is always ready to help.",
    name: "Sarah K",
    rating: 4,
  },
];

const LandingPage = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToItem = (index) => {
    if (scrollContainerRef.current) {
      const items = scrollContainerRef.current.children;
      scrollContainerRef.current.scrollTo({
        left: items[index].offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (

    <div class={styles.hloo}>
      <div className={styles.hlooooo}>
      <div className={styles.hy}>Welcome to</div>
      <div className={styles.hx}>
        <span className={styles.highlight}>Service</span><span className={styles.scribe}>Scribe.</span>
      </div>
      <p>
        <h3>Unlock Seamless Solutions with Service Scribe </h3>
        – Your Partner in Success!
      </p>
      <br />
      <div className=" flex items-center justify-center ">
      <div className="relative text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="relative z-10 rounded-full border-4 border-yellow-400 overflow-hidden w-24 h-24 hover-zoom">
            <img 
              alt="Person cleaning a washroom" 
              className="w-full h-full object-cover"
              class={styles.hoverZoom} 
              height="96" 
              src="https://storage.googleapis.com/a1aa/image/RVs2qbaZohqpOhUTre7oRu7ymzK7vscqaipWytuc1052hT0JA.jpg" 
              width="96" 
            />
          </div>
          <div className="relative z-20 rounded-full border-4 border-yellow-400 overflow-hidden w-36 h-36 hover-zoom">
            <img 
              alt="Electrician working" 
              className="w-full h-full object-cover" 
              class={styles.hoverZoom}
              height="144" 
              src="https://storage.googleapis.com/a1aa/image/93myMJIFXX55OVZbWAkWYIdDZpYPRUyS8XKTcucVnbr6wJ6E.jpg" 
              width="144" 
            />
          </div>
          <div className="relative z-10 rounded-full border-4 border-yellow-400 overflow-hidden w-24 h-24 hover-zoom">
            <img 
              alt="Plumber fixing a pipe" 
              className="w-full h-full object-cover"
              class={styles.hoverZoom} 
              height="96" 
              src="https://storage.googleapis.com/a1aa/image/JWrFeHhM7RQud6FQ3fzzO26A5qMY9IZwd1Br1EAUfQ3dHORnA.jpg" 
              width="96" 
            />
          </div>
          <div className="relative z-20 rounded-full border-4 border-yellow-400 overflow-hidden w-36 h-36 hover-zoom">
            <img 
              alt="Carpenter working with wood" 
              className="w-full h-full object-cover" 
              class={styles.hoverZoom}
              height="144" 
              src="https://storage.googleapis.com/a1aa/image/Cpe38rqcMN2mEKNxs1UhxqaXKaut5eVgNizKi76oPnNrDnoTA.jpg" 
              width="144" 
            />
          </div>
          <div className="relative z-10 rounded-full border-4 border-yellow-400 overflow-hidden w-24 h-24 hover-zoom">
            <img 
              alt="Person painting a wall" 
              className="w-full h-full object-cover" 
              class={styles.hoverZoom}
              height="96" 
              src="https://storage.googleapis.com/a1aa/image/3Mg6VXY7fPSBdCMvkF7CceuHveZftiMM9pX0jTnN9c3V9biOB.jpg" 
              width="96" 
            />
          </div>
        </div>
      </div>
    </div>
      <div className={styles.titleContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <a href="#">Button1</a>
          </button>
          <span className={styles.seperator}>|</span>
          <button className={styles.button}>
            <a href="#">Button2</a>
          </button>
        </div>
        <div className={styles.break}></div>
        <div className={styles.buttonContainer2}>
          <button className={styles.button2}>
            <Link to="/subs" className="text-black">Subs</Link>
            <div className={styles.dropdown}>
              <a href="#">Option1</a>
              <a href="#">Option2</a>
              <a href="#">Option3</a>
            </div>
          </button>
          <span lassName={styles.seprator}>|</span>
          <button className={styles.button2}>
              button4
            <div className={styles.dropdown}>
              <a href="#">OptionA</a>
              <a href="#">OptionB</a>
              <a href="#">OptionC</a>
            </div>
          </button>
        </div>
      </div>
      </div>
      {/* <div className=" flex items-center justify-center ">
      <div className="relative text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="relative z-10 rounded-full border-4 border-yellow-400 overflow-hidden w-24 h-24 hover-zoom">
            <img 
              alt="Person cleaning a washroom" 
              className="w-full h-full object-cover"
              class={styles.hoverZoom} 
              height="96" 
              src="https://storage.googleapis.com/a1aa/image/RVs2qbaZohqpOhUTre7oRu7ymzK7vscqaipWytuc1052hT0JA.jpg" 
              width="96" 
            />
          </div>
          <div className="relative z-20 rounded-full border-4 border-yellow-400 overflow-hidden w-36 h-36 hover-zoom">
            <img 
              alt="Electrician working" 
              className="w-full h-full object-cover" 
              class={styles.hoverZoom}
              height="144" 
              src="https://storage.googleapis.com/a1aa/image/93myMJIFXX55OVZbWAkWYIdDZpYPRUyS8XKTcucVnbr6wJ6E.jpg" 
              width="144" 
            />
          </div>
          <div className="relative z-10 rounded-full border-4 border-yellow-400 overflow-hidden w-24 h-24 hover-zoom">
            <img 
              alt="Plumber fixing a pipe" 
              className="w-full h-full object-cover"
              class={styles.hoverZoom} 
              height="96" 
              src="https://storage.googleapis.com/a1aa/image/JWrFeHhM7RQud6FQ3fzzO26A5qMY9IZwd1Br1EAUfQ3dHORnA.jpg" 
              width="96" 
            />
          </div>
          <div className="relative z-20 rounded-full border-4 border-yellow-400 overflow-hidden w-36 h-36 hover-zoom">
            <img 
              alt="Carpenter working with wood" 
              className="w-full h-full object-cover" 
              class={styles.hoverZoom}
              height="144" 
              src="https://storage.googleapis.com/a1aa/image/Cpe38rqcMN2mEKNxs1UhxqaXKaut5eVgNizKi76oPnNrDnoTA.jpg" 
              width="144" 
            />
          </div>
          <div className="relative z-10 rounded-full border-4 border-yellow-400 overflow-hidden w-24 h-24 hover-zoom">
            <img 
              alt="Person painting a wall" 
              className="w-full h-full object-cover" 
              class={styles.hoverZoom}
              height="96" 
              src="https://storage.googleapis.com/a1aa/image/3Mg6VXY7fPSBdCMvkF7CceuHveZftiMM9pX0jTnN9c3V9biOB.jpg" 
              width="96" 
            />
          </div>
        </div>
      </div>
    </div> */}
      <div className="flex justify-center items-center">
        
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font -semibold text-center mb-12">
            Key features in our enterprise appointment scheduling software
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <img
                  alt={feature.alt}
                  className="mx-auto mb-4 hover:zoom rounded-lg"
                  class={styles.hoverZoom}
                  height="100"
                  src={feature.imgSrc}
                  width="100"
                />
                <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="src/assets/img/01 (5).jpg"
          height="1800px"
          width="700px"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div
          className="scroll-container w-full max-w-4xl flex overflow-x-hidden scroll-snap-x mandatory"
          ref={scrollContainerRef}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className="scroll-item rounded-lg p-6 max-w-md mx-auto mr-4"
              key={index}
            >
              <div className="flex items-start space-x-2">
                <i className="fas fa-quote-left text-blue-500 text-2xl"></i>
                <div>
                  <p className="font-semibold text-lg">“{testimonial.quote}”</p>
                  <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                  <p className="font-semibold mt-4">{testimonial.name}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeIndex === index ? "active" : "inactive"}`}
              onClick={() => scrollToItem(index)}
            ></div>
          ))}
        </div>

        <style jsx>{`
          .scroll-container {
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
          .scroll-item {
            scroll-snap-align: start;
            flex: none;
            width: 100%;
            border: 2px solid #3b82f6;
            margin-right: 1rem;
          }
          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            cursor: pointer;
          }
          .dot.active {
            background-color: #3b82f6;
          }
          .dot.inactive {
            background-color: #d1d5db;
          }
        `}</style>
      </div>
    </div>
  );
};

export default LandingPage;
