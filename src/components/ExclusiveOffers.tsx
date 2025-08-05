import { assets } from "../assets/assets"
import Title from "./Title"

const ExclusiveOffers = () => {
  return (
    <div>
        <div>
            <Title title="Exclusive Offers" subTitle="" align="left" />
            <button>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow icon" />
            </button>
        </div>
    </div>
  )
}

export default ExclusiveOffers