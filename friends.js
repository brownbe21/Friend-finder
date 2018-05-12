// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendLists = [
    {
        friendName: "John",
        phone: "https://commons.wikimedia.org/wiki/File:Biophoto_headshot-JW-linkedin-old.jpeg",
        scores: [5, 4, 3, 4, 4, 5, 3, 4, 4, 5]
    },

    {
        friendName: "Musa",
        photo: "",
        scores: [4, 3, 2, 1, 5, 5, 4, 3, 5, 4]
    },

    {
        friendName: "Shenin",
        photo: "https://www.pexels.com/photo/man-in-crew-neck-shirt-555790/",
        scores: [4, 3, 2, 4, 5, 3, 4, 5, 2, 4] 
    },

    {

        friendName: "Carnetta",
        photo: "https://wtop.com/wp-content/uploads/2014/09/361584-355x485.jpg",
        scores: [5, 3, 2, 4, 5, 3, 4, 5, 5, 4] 


    },

    {

        friendName: "Marelene",
        photo: "https://thumbs.dreamstime.com/t/japanese-man-headshot-young-handsome-65446035.jpg",
        scores: [4, 3, 2, 2, 4, 3, 4, 1, 3, 4] 
    }

];
       
        



  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  