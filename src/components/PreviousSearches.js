import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function PreviousSearches(){
    
    const searches =['pizza', 'burger', 'noodles', 'cookies', 'walnut bread', 'jalebi', 'tomato soup', 'Hummus salad', 'mixed fruit juice']
    
    return(
        <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {searches.map( search => (
                        <div className="search-item">
                            {search}
                        </div>
                    ))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="search..."></input>
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
    )
}