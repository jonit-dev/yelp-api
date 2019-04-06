import React, {Component} from 'react';


class Search extends Component {

    state = {
        keyword: "",
        categories: "",
        city_location: "",
        sort_by: "rating", //hardcoded for now
        open_at: "",
        locale: "en_CA",
        open_now: true,
        response: {
            businesses: []
        }
    };
    



    onFormSubmit(e) {

        e.preventDefault();
        console.log('submitting form');
        console.log('state');
        console.log(this.state);

        /* Validation =========================================== */

        //make city location required

        if (!this.state.city_location) {
            window.alert('Please, fill your search City / Location before submitting');
            return false;
        }

        //execute function on parent component
        this.props.onGetBusinesses(this.state)
    }

    onHandleOpenAt() {
        return (this.state.open_now ? <div className="field">
            <label>Open at:</label>
            <input type="date" name="open-at"/>
        </div> : null);
    }


    render() {
        return (
            <React.Fragment>

                <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="field">
                        <label>Search Term:</label>
                        <input type="text" name="search-term" placeholder="Search term"
                               value={this.state.keyword}
                               onChange={(e) => this.setState({keyword: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Categories:</label>
                        <input type="text" name="categories" placeholder="Categories"
                               value={this.state.categories}
                               onChange={(e) => this.setState({categories: e.target.value})}
                        />
                    </div>

                    <div className="field">
                        <label>City / Location:</label>
                        <input type="text" name="city-location" placeholder="City / Location"
                               value={this.state.city_location}
                               onChange={(e) => this.setState({city_location: e.target.value})}
                        />
                    </div>

                    <div className="field">
                        <label>Sort By</label>
                        <div className="ui selection dropdown">
                            <input type="hidden" name="sort_by"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">Sort by Dropdown</div>
                            <div className="menu">
                                <div className="item" data-value="1">ASC</div>
                                <div className="item" data-value="0">DESC</div>
                            </div>
                        </div>
                    </div>


                    {this.onHandleOpenAt()}


                    <div className="field">

                        <div className="ui checkbox" onClick={() => this.setState({open_now: !this.state.open_now})}>
                            <input type="checkbox" name="open_now"/>
                            <label>Open Now</label>
                        </div>
                    </div>


                    <button className="ui button black" type="submit">Search</button>
                </form>

            </React.Fragment>
        );
    }
}

export default Search;