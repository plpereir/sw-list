import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

import ContactCard from '../components/ContactCard';


class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
  }

  handleSearch(searchText) {
   
    this.setState({searchResult: [], searchText: searchText});
    this.state.contactList.map(contact => {

      if(searchContact(contact, searchText)) {
         this.setState( prevState => ({
           searchResult: [...prevState.searchResult, contact]
         }), () => console.log(this.state.searchResult))
      }
    })
  }
  

    componentDidMount() {
      const total = 1;
      var page;
      
      for (page = 1; page <= total ; page++) {
        var contactsAPI = 'https://swapi.co/api/people/?page='+page;
        let init = {
          method: 'GET',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default' 
       };
  
          axios.get(contactsAPI, init)
           .then((response) => {
               console.log(response.data);
              this.setState({

                /* Concat function */
                contactList: response.data.results
             })
            })
      }
  
     }

  returnContactList() {
   return this.state.searchText ? this.state.searchResult :this.state.contactList
  }

  render() {

    return (
    	<div>

     		<SearchBar onSearch={this.handleSearch} />
     		<br />
          	<ul className="list-group" id="contact-list">
           		{ this.returnContactList().map(
                  (contact) => 
                  <li key={contact.name} className="list-group-item"> 
                    <ContactCard contact = {contact}/>
                  </li>
              	)}
            </ul>
        </div>
    );
  }
}

const searchContact = (contact, searchText) => (
 contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1
)


export default Contact;