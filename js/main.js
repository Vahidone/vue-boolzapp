

import { contacts } from "./cantacts.js";
const {createApp} = Vue;
const dt = luxon.DateTime;


createApp ({
  data(){
    return{

      contacts,
      actualIndex : 0,
      newMessage:'',
      research:'',

    }
  },

  methods:{
    cambioClick(index) {
      this.actualIndex = index
    },

    addMessage(){
      this.time = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT)
      if(this.newMessage.length > 0){
        const newMessageObj = {
          date:this.time,
          message : this.newMessage,
          status:'sent'
        }
        this.contacts[this.actualIndex].messages.push(newMessageObj)
        this.newMessage = '';

        setTimeout(() => {
          const newReceivedObj = {
            date:this.time,
            message : 'Ok!',
            status:'received'
          }
          this.contacts[this.actualIndex].messages.push(newReceivedObj)

        },1000)       
      }
    },

    deleteMessage(index){
       
        this.contacts[this.actualIndex].messages.splice(index,1);

    
      
    }


  },

  computed:{
    searchContacts () {
      const searched = this.research.toLowerCase();
      const result = this.contacts.filter(itemSearch => {
        return itemSearch.name.toLowerCase().includes(searched);
      });
      return result;
    }
    
  },
  
  mounted() {
    
  }



}).mount('#app')