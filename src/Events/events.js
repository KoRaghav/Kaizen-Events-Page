// "id":{
//     "title": "",
//     "description": "",
//     "image": ,
//     "date": "",
//     "content": "",
// 
//     "sections": [
//          {"type":"",
//           "title":"Section Title",         
//           "data":[
//              card,
//              card,
//              ...
//          ]},
//          ...
//     ]
// 
//      if type=="TS" : card = { title , tubtitle }
//      if type=="PTS": card = { picture , title , subtitle }


import sociopreneurs from './banners/socio_poster.jpeg'
import aurora from './banners/aurora_poster.jpeg'
import tamasha from './banners/tamasha_poster.jpeg'
import bazinga from './banners/bazinga_poster.jpeg'
import resolved from './banners/404_resolved.jpeg'
import all_rise from './banners/allrise_poster.jpeg'
import ingenious_geeks from './banners/ig_poster.jpeg'
import samrat from './cardPictures/samrat.png'
import seshan from './cardPictures/seshan.jpeg'

export const events = 
    {
        "sociopreneurs":{
            "title": "SOCIOPRENEURS",
            "description": "A platform to motivate aspiring social entrepreneurs to develop their ideas and inspire them for social change",
            "image": sociopreneurs,
            "date": "19th April, 2pm - 4pm\n Zoom",
            "content": "B-plan event to provide a platform to aspiring social entrepreneurs. It aims to encourage change-makers provide them mentorship from renowned experts.",

            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
                {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},                
            ]
        },
        "aurora":{
            "title": "AURORA",
            "description": "Beginning Kaizen with the best of speakers and a fun-filled evening with talented performers, this is the platform to propel social change",
            "image": aurora,
            "date": "18th April, 6:45pm - 8:45pm\n Seminar Hall, and Live Streaming on Zoom",
            "content": "Knowledge and delight converge in Aurora - the inaugural ceremony of Kaizen '22, studded with esteemed guests and making way for change to happen.",
            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
                
            ]
        },
        "tamasha":{
            "title": "TAMASHA",
            "description": "Beginning Kaizen with the best of speakers and a fun-filled evening with talented performers, this is the platform to propel social change",
            "image": tamasha,
            "date": "19th April, 5pm - 7pm\nLH 114 and Live Streaming on Zoom",
            "content": "Drama competition for the movie buffs who are tired of troublesome depictions shown in movies, giving them an opportunity to present their perfect story, in the form of a 5-minute-Act!",
            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        },     
        "bazinga":{
            "title": "BAZINGA",
            "description": "A Social Stand Up Comedy Event for all the young comedians out there.",
            "image": bazinga,
            "date": "20th April, 5pm - 7pm\nLH 114 and Live Streaming on Zoom",
            "content": "A platform for all the young comedians out there to tickle the audience with their greatest comic skills and shoot their punchlines on the social issues around. Be the source of all the guffaws and chuckles to become the best of them all.",
            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        },
        "resolved":{
            "title": "404 RESOLVED",
            "description": "A design-based, sprint where participants compete to find the best technical solution to a social problem",
            "image": resolved,
            "date": "20th April, 10am - 12pm\nZoom",
            "content": "A design sprint hackathon aimed to devise technical scalable solutions for burning social nodus persisting in society.",
            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        }        ,
        "all_rise":{
            "title": "ALL RISE",
            "description": "A mock courtroom setup over a fictitious case to educate people about basic laws and rights",
            "image": all_rise,
            "date": "20th April, 2pm - 4pm\nZoom",
            "content": "It emulates a courtroom and captures the thrill of a real court hearing, to raise awareness on common laws to protect oneself with!",
            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        },        
        "ingenious_geeks":{
            "title": "INGENIOUS GEEKS",
            "description": "An event to promote individual thinking and innovative ideas among school kids through application-based learning",
            "image": ingenious_geeks,
            "date": "20th April, 2pm - 4pm\nZoom",
            "content": "A pan-India virtual science exhibition, providing the students a platform to develop efcient solutions to the problems existing in the society by creating innovative science models",
            
            "sections": [
                {"type": "PTS",
                "title":"OUR ESTEEMED PANEL OF JUDGES",
                "data":[
                    {
                        "title": "Prof. Samrat Mukhopadhyay",
                        "subtitle": "Associate Professor, IIT Delhi",
                        "picture": samrat,
                    },
                    {
                        "title": "Prof. Seshan Srirangarajan",
                        "subtitle": "Assistant Professor, IIT Delhi",   
                        "picture": seshan,

                    },
                ]},                  
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
              
            ]
        }        

    }
