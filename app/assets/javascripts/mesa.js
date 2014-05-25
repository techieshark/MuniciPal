// mesa.js
// code specific to the mesa app

function toggleCards(event) {
	$('#contact-card').toggle();
	$('#twitter-card').toggle();
	console.log("toggling visibility of contacts/tweets")
	event.preventDefault();
}

$('#controls-contact').click(toggleCards);

$('#controls-twitter').click(toggleCards);


// example code from https://github.com/jsoma/tabletop

// window.onload = function() { init() };

// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';

// function init() {
// 	Tabletop.init( 
// 		{ key: '16XlcsycmfTtTed-5HAPN0LMcMxIEYiWl7pJvCQTm6x4',
// 	         callback: showInfo,
// 	         simpleSheet: true 
// 	    });
// }

// function showInfo(data, tabletop) {
// 	alert("Successfully processed!")
// 	console.log(data);
// }


var people = [
    {
        "name": "Dave Richins",
        "district": 1,
        "bio": "Elected to the Mesa City Council in June of 2008 and re-elected in August of 2012, Dave Richins serves as the councilmember for District 1. His term on the Mesa City Council runs until January 2017.\nRichins is the principal government affairs advisor for Resolution Copper Mining, LLC. His duties include engaging federal, state and local officials for legal clearances that would allow the company to mine for copper just east of Superior, Arizona.\nHe is Chair of the Mesa City Council Community and Cultural Development committee and serves on the Council Economic Development committee and the Council Government Affairs committee as well as Chair of the City of Mesa Employee Benefits Advisory committee.  He is Board Liaison for the Mesa Chamber of Commerce and is also one of the Council representatives to the West Mesa Community Development Corporation (ex Officio).",
        "phone": "480-644-4002",
        "email": "District1@mesaaz.gov",
        "fax": "480-644-2175",
        "facebook": "http://www.facebook.com/pages/Councilmember-Dave-Richins/81014664076",
        "twitter": "NA",
        "address": "P.O. Box 1466 Mesa, AZ 85211-1466",
        "assistant": "Alicia White",
        "assistantphone": "480-644-5296",
        "assistantemail": "alicia.white@mesaaz.gov"
    },
    {
        "name": "Terry Benelli",
        "district": 2,
        "bio": "Benelli has lived in Mesa for 28 years and is the owner of a Home Owners Association management company. She also spent seven years as the Executive Director of the Neighborhood Economic Development Corporation (NEDCO) in downtown Mesa. Benelli has a Bachelor of Arts in Political Science from Arizona State University and earned a Flinn-Brown Civic Leadership Fellowship from the Arizona Center for Civic Leadership. She is also a 2001 graduate of the Mesa Leadership Training and Development program.",
        "phone": "480-644-3772",
        "email": "councilmember.benelli@Mesaaz.gov",
        "fax": "480-644-2175",
        "facebook": "https://www.facebook.com/CouncilmemberBenelli",
        "twitter": "https://twitter.com/MesaDistrict2",
        "address": "P.O. Box 1466\nMesa, AZ 85211-1466",
        "assistant": "Ian Linssen",
        "assistantphone": "480-644-5295",
        "assistantemail": "ian.linssen@mesaaz.gov"
    },
    {
        "name": "Dennis Kavanaugh ",
        "district": 3,
        "bio": "Elected to the Mesa City Council in June of 2008 and re-elected in August of 2012, Dennis Kavanaugh serves as the councilmember for District 3. Kavanaugh is the founder of the law firm Dennis Kavanaugh, P.C., one of Arizona's leading social security and worker's compensation law firms. His term on the Mesa City Council runs until January of 2017. Kavanaugh was also a member of the City Council from 1996 to 2004, serving as Vice Mayor from 2002 until 2004.",
        "phone": "480-644-3003",
        "email": "District3@mesaaz.gov",
        "fax": "480-644-2175",
        "facebook": "http://www.facebook.com/pages/Councilmember-Dennis-Kavanaugh/99119583737",
        "twitter": "http://twitter.com/mesadistrict3",
        "address": "P.O. Box 1466 \nMesa, AZ 85211-1466",
        "assistant": "Jared Archambault",
        "assistantphone": "480-644-6275",
        "assistantemail": "jared.archambault@Mesaaz.gov"
    },
    {
        "name": "Christopher Glover ",
        "district": 4,
        "bio": "Serving his first term representing Mesa's District 4, Vice Mayor Chris Glover became the youngest person ever to serve on the Mesa City Council following his election in 2011. He was named Vice Mayor on April 21, 2014. Glover is a native of Mesa, attending Mesa Public Schools, graduating with honors from Mesa High School and he was a member of the Mayor's Youth Committee. While at Arizona State as an undergrad, Glover earned certificates in both Latin American Studies and International Studies and was a Capitol Scholar and Junior Fellow. He also studied at Universidad de Torcuato di Tella in Buenos Aires, Argentina. Glover earned a degree in Political Science with minors in History and Spanish from Arizona State University. He also spent a summer in Washington, D.C. as an intern for Senator John Ensign (R-Nevada). He also earned a Master of Science in Management from the W.P. Carey School of Business at Arizona State University. He currently serves as an adjunct professor of Business Communications at Mesa Community College.",
        "phone": "480-644- 3004",
        "email": "councilmember.glover@Mesaaz.gov",
        "fax": "480-644- 3004",
        "facebook": "http://www.facebook.com/pages/Councilmember-Chris-Glover/222867401057327#!/pages/Councilmember-Chris-Glover/222867401057327?sk=wall",
        "twitter": "http://www.twitter.com/mesadistrict4",
        "address": "P.O. Box 1466\nMesa, AZ 85211-1466",
        "assistant": "Andrew Calhoun",
        "assistantphone": "480-644-2190",
        "assistantemail": "andrew.calhoun@mesaaz.gov"
    },
    {
        "name": "David Luna",
        "district": 5,
        "bio": "Appointed to fill the vacancy on the Mesa City Council in September of 2013, David Luna serves as the councilmember for District 5. Luna has worked as the Director of Education Television for Mesa Public Schools since 1988, directing and managing channel 99 and edtv99.org. He is also an adjunct faculty member at Mesa Community College, teaching communications. His term on the Mesa City Council runs until January of 2015.\nLuna represents Mesa nationally as a member of the National League of Cities' Information Technology and Steering Committee.",
        "phone": "480-644-3771",
        "email": "councilmember.luna@Mesaaz.gov",
        "fax": "480-644-2175",
        "facebook": "https://www.facebook.com/CouncilmemberDavidLuna",
        "twitter": "https://twitter.com/MesaDistrict5",
        "address": "P.O. Box 1466\nMesa, AZ 85211-1466",
        "assistant": "Charlotte McDermott",
        "assistantphone": "480-644-5294",
        "assistantemail": "District5@mesaaz.gov"
    },
    {
        "name": "Scott Somers",
        "district": 6,
        "bio": "Councilmember Scott Somers was first elected to the Mesa City Council in 2006, and re-elected in 2010. He spent two years serving Mesa as Vice Mayor from 2011 to 2013. He works to accomplish his District's priorities: ensuring fiscal stability, improving public safety, and strategic planning to make the Mesa Gateway Area a high-wage job hub.\nCouncilmember Somers currently represents Mesa as the Chair of the Regional Public Transportation Authority and on the Board of Directors for the Chamber of Commerce and East Valley Partnership. ",
        "phone": "480-644-4003",
        "email": "councilmember.somers@Mesaaz.gov",
        "fax": "480-644-2175",
        "facebook": "http://www.facebook.com/pages/Councilmember-Scott-Somers/143770445743",
        "twitter": "http://twitter.com/MesaDistrict6",
        "address": "P.O. Box 1466\nMesa, AZ 85211-1466",
        "assistant": "Matt Clark",
        "assistantphone": "480-644-4745",
        "assistantemail": "matthew.clark@mesaaz.gov"
    }
];
