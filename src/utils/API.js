import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getMessages: function() {
    return axios.get("http://localhost:3001/state");
  },
  sendMessage: function(data) {  
    let body = {
        sender: data.sender,
        message: data.message
    }
    console.log("Stuff", body);
    return axios.post("http://localhost:3001/txs", body);
  }
};
