import React, {Component} from 'react';

class BusinessList extends Component {

    state = {businesses: []};


    renderBusinessesList() {

        let tenresults = this.props.businesses.filter((e,i) => i < 10);

        console.log('showing 10 results');

        console.log(tenresults);

        return tenresults.map(business => {
            return (
                <div key={business.id} className="card">
                    <div className="image">
                        <img src={business.image_url}/>
                    </div>
                    <div className="content">
                        <div className="header">{business.name}</div>
                        <div className="meta">
                            <a>Open: {!business.is_closed}</a>
                        </div>
                        <div className="description">
                            <p><strong>Price:</strong> {business.price}</p>
                            <p><strong>No. of Reviews:</strong> {business.review_count}</p>
                            {/*<p><strong>Address:</strong> {business.location.address1}</p>*/}
                            <p><strong>Phone:</strong> {business.phone}</p>
                            <p><strong>Yelp Link:</strong> <a href={business.url}>Click here</a></p>
                        </div>
                    </div>
                    <div className="extra content">
      <span className="right floated">
        {/*Joined in 2013*/}
      </span>
                        <span>
        <i className="user icon"></i>
                            {/*75 Friends*/}
      </span>
                    </div>
                </div>
            )
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="ui link cards app-cards">
                    {this.renderBusinessesList()}
                </div>
            </React.Fragment>
        );
    }
}

export default BusinessList;