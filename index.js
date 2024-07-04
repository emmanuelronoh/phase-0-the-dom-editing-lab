// Import the necessary helper functions if needed
// require("./helpers.js");

describe("within index.html", () => {
    // Test for the <body> tag
    it("contains a <body> tag", () => {
      expect(document.querySelector("html").innerHTML).to.include("<body>");
    });
  
    // Test for the </body> tag
    it("contains a </body> tag", () => {
      expect(document.querySelector("html").innerHTML).to.include("</body>");
    });
  
    // Test for the <h1> tag
    it("contains an <h1> tag", () => {
      expect(document.querySelector("body").innerHTML).to.include("<h1>");
    });
  
    // Test for the <p> tag
    it("contains a <p> tag", () => {
      expect(document.querySelector("body").innerHTML).to.include("<p>");
    });
  
    // Test for <strong> tag within <p>
    it("within the <p>, it contains a <strong> tag", () => {
      expect(document.querySelector("p").innerHTML).to.include("<strong>");
    });
  
    // Test for <em> tag within <p>
    it("within the <p>, it contains an <em> tag", () => {
      expect(document.querySelector("p").innerHTML).to.include("<em>");
    });
  
    // Test for <a> tag within <p> with specific href
    it("within the <p>, it contains an <a> tag with correct href", () => {
      expect(document.querySelector("p").innerHTML).to.include(
        '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">'
      );
    });
  
    // Test for <table> tag within <body>
    it("within the <body>, it contains a <table> tag", () => {
      expect(document.querySelector("body").innerHTML).to.include("<table>");
    });
  });
  