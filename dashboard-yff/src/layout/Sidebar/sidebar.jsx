import "./sidebar.css";
import { iconsImgs} from "../../utils/images";
import { navigationLinks } from "../../data/data";

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    <img src={iconsImgs.logo} alt="profile-image" />
                </div>
                <span className="info-name">YFF CELL</span>
            </div>
            <nav className="navigation">
                <ul className="nav-list">
                    {
                        navigationLinks.map((navigationLink) => (
                            <li className="nav-item" key={
                                navigationLink.id
                            }>
                                <a href="#" className={'nav-link'}>
                                    <img src={ navigationLink.image}
                                    className="nav-link-icon" alt={navigationLink.title} />
                                    <span className="nav-link-text">
                                        { navigationLink.title }
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar