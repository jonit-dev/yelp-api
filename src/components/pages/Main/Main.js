import React, {Component} from 'react';
import Search from "./Search/Search";
import BusinessList from "./BusinessList/BusinessList";
import API from "../../../classes/API";
import axios from "axios";

class Main extends Component {

    state = {
        keyword: "",
        response: {
            businesses: [],

        }
    };

    onYelpAPISearch = async (params) => {

        this.setState({keyword: params.keyword});

        console.log('Params received');
        console.log(params);
        console.log('Initing request, using these configs');
        console.log(API.getConfig());

        const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
            params: {
                term: params.keyword,
                categories: params.categories,
                location: params.city_location,
                sort_by: params.sort_by,
                open_now: params.open_now,
                locale: params.locale
            },
            headers: {
                Authorization: `Bearer ${API.getConfig().apiKey}`
            }
        });

        this.setState({response: {businesses: response.data.businesses}}, () => {
            console.log('Response loaded');
            console.log(this.state.response);
        });
    };

    onHandleResponse() {

        if(this.state.response.businesses !== undefined) {
            if (this.state.response.businesses.length === 0) { //if there's no response
                //check if user typed something

                console.log('Your keyword is '+this.state.keyword);
                if (this.state.keyword && this.state.keyword !== "") {
                    return <React.Fragment>
                        <div className="ui negative message">
                            <i className="close icon"></i>
                            <div className="header">
                                Oops!
                            </div>
                            <p>No results were found for {this.state.keyword}. Please try again using a different
                                keyword.</p></div>
                    </React.Fragment>
                } else {
                    return <React.Fragment>
                        <div className="ui info message">
                            <i className="close icon"></i>
                            <div className="header">
                                Do your first search
                            </div>
                            <p>Fill the form above</p>
                        </div>
                    </React.Fragment>
                }
            } else {
                return <BusinessList businesses={this.state.response.businesses}/>
            }
        }



    }


    render() {
        return (
            <React.Fragment>
                <div className="ui main text app-main">
                    <h1 className="ui header">React Restaurant App</h1>

                    <Search onGetBusinesses={(params) => this.onYelpAPISearch(params)}/>

                    <hr/>

                    {this.onHandleResponse()}

                </div>
            </React.Fragment>
        );
    }
}

export default Main;