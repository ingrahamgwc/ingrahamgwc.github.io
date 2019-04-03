// Our data and methods that can be seen directly on the web 
// page go here.  Other objects can go elsewhere

// Main App 
new Vue({
  el: '#myVueApp',
  
  // update these values, rather than update the DOM directly
  data: {
    newQuote:" ",
    quotes: ["The past cannot be changed. The future is in your power", "It always seems impossible until it's done", "Don't downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny", "Don't limit your challenges, challenge your limits", "Whatever the mind can concieve and believe it can also achieve", "It does not matter how slowly you go as long as you do not stop", "Only you can change your life, no one can do it for you", "Don't stop when you're tired, stop when you're done", "If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you", "Intergrity is the most valuable and respected quality of leadership. Always keep your word", "Don't be afraid to give up the good to go for the great"],
    
    // message: "Hello Vue.js! It's " + now.toDateString(),
   // states: ["WA","OR","CA"]
  }, 
  
  // processed data
  computed: {
    oneQuote: function() {
      //return this.quotes.join(", ");
      var q = Math.random() * this.quotes.length;
 return this.quotes[Math.floor(q)];
    },
    welcomeMessage: function() {
      var now = new Date();
      return "Hello Vue.js! It's " + now.toDateString();
    }
  },
  
  
  // event handlers accessible from the web page
  methods: {
    addQuote: function() {
      this.quotes.push( this.newQuote );
      this.newQuote = "";
      console.log( this.quotes );
    } 
  }
})
