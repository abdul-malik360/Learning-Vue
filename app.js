const app = Vue.createApp({
  // data, functions
  //   template: "<h2> I am the template</h2>"

  data() {
    return {
      showBooks: true,
      //   title: "The Final Empire",
      //   author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,

      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/book1.png",
        },
        {
          title: "the way of kings",
          author: "Brandon Sanderson",
          img: "assets/book2.png",
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "assets/book3.png",
        },
      ],

      url: "http://www.thenetninja.co.uk",
    };
  },
  methods: {
    // changeTitle(title) {
    //   //   console.log("you clicked me");
    //   //   this.title = "Words of Radiance";
    //   this.title = title;
    // },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      //   console.log("event");
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },

    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
