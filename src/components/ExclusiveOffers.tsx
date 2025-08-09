import { assets } from "../assets/assets"
import Title from "./Title"

const ExclusiveOffers = () => {
  return (
    <div>
        <div className="" >
            <Title title="Exclusive Offers" subTitle="" align="left" />
            <button>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow icon" className='group-hover:translate-x-1 transition-all' />
            </button>
        </div>
    </div>
  )
}

export default ExclusiveOffers