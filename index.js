
    const quotes = [
      { text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ", author: "― Bernard M. Baruch" },
      { text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", author: "― Dr. Seuss" },
      { text: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
      { text: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
      { text: "“In three words I can sum up everything I've learned about life: it goes on.”.", author: "― Robert Frost" }
    ];

    function generateQuote() {
      var randomIndex = Math.floor(Math.random() * quotes.length);
      var quote = quotes[randomIndex];
      document.getElementById("quote").textContent = quote.text;
      document.getElementById("author").textContent = "- " + quote.author;
      
    }
    