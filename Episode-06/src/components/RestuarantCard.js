import {RES_IMAGE} from "../utils/constants"

const RestuarantCard=(props)=>{
    const {resObj}=props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=resObj?.info
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src={RES_IMAGE+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestuarantCard;