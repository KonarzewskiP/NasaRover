import spirit from "../img/spirit-opportunity/main_image.jpg"
import opportunity from "../img/spirit-opportunity/main_image_2.jpg"
import curiosity from "../img/curiosity/main_img.jpg"

const RoversData = () => {
    return [
        {
            name:"Spirit",
            id: "0",
            description: "",
            main_img: spirit,
            mission: "Mars surface exploration",
            spacecraft_mass_kg: "1062",
            dry_mass_rover_only_kg: "185",
            lunch_date: "2003-07-10T17:58:47",
            end_date: "2011-05-25T00:00:00",
            driving_distance_km: "7.7",
            rover_cameras: "FHAZ,RHAZ,NAVCAM,PANCAM,MINITES"
        },
        {
            name:"Opportunity",
            id: "1",
            description: "",
            main_img: opportunity,
            mission: "Mars surface exploration",
            spacecraft_mass_kg: "1062",
            dry_mass_rover_only_kg: "185",
            lunch_date: "2003-07-08T03:18:15",
            end_date: "2018-06-10T00:00:00",
            driving_distance_km: "45.16",
            rover_cameras: "FHAZ,RHAZ,NAVCAM,PANCAM,MINITES"
        },
        {
            name:"Curiosity",
            id: "2",
            description: "",
            main_img: curiosity,
            mission: "study the ancient habitability and the potential for life on Mars.",
            spacecraft_mass_kg: "3893",
            dry_mass_rover_only_kg: "899",
            lunch_date: "2011-11-26T15:02:00",
            end_date: "",
            driving_distance_km: "20.4",
            rover_cameras: "FHAZ,RHAZ,MAST,CHEMCAM,MAHLI,MARDI,NAVCAM"
        }
    ]
};

export default RoversData;