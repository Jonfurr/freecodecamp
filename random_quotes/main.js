var quotes = {
  0: {
    quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    author: "Princess Diana"
  },
  1: {

    quote: "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.",
    author: "Hellen Mirren"
  },
  2: {

    quote: "My style is unique and random. But I think it's important that it still makes sense.",
    author: "Jess Glynne"
  },
  3: {
    quote: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    author: "Sushant Singh Rajput"
  },
  4: {
  	quote: "Goals transform a random walk into a chase.",
  	author: "Mihaly Csikszentmihalyi"
  },
  5: {
  	quote: "The truth is that killing innocent people is always wrong - and no argument or excuse, no matter how deeply believed, can ever make it right. No religion on earth condones the killing of innocent people; no faith tradition tolerates the random killing of our brothers and sisters on this earth.",
  	author: "Feisal Abdul Rauf"
  },
  6: {
  	quote: "I believe life is an intelligent thing: that things aren't random.",
  	author: "Steve Jobs"
  },
  7: {
  	quote: "An Internet meme is a hijacking of the original idea. Instead of mutating by random change and spreading by a form of Darwinian selection, Internet memes are altered deliberately by human creativity. There is no attempt at accuracy of copying, as with genes - and as with memes in their original version.",
  	author: "Richard Dawkins"
  }
};

randomize = () => {
  changeColor();
  updateQuote();

}

changeColor = () => {
  let body = document.getElementById("body");
  let r = Math.round(Math.random() * (255 - 0) + 0);
  let g = Math.round(Math.random() * (255 - 0) + 0);
  let b = Math.round(Math.random() * (255 - 0) + 0);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  body.style.backgroundColor = rgb;
  body.style.transition = "all .3s ease-in-out";
}

updateQuote = () => {
  
  let id = Math.round(Math.random() * (3-0) + 0);
  $(".quote-wrap h4").html(quotes[id].quote);
  $(".quote-wrap h6").html("-"+quotes[id].author);
  setTweetContent(id);
  checkPrev(id);
}

setTweetContent = (id) => {
  let quote = quotes[id].quote+ ' | ' +quotes[id].author;
  quote = encodeURIComponent(quote);
  let href = "https://twitter.com/intent/tweet?text="+ quote;
  $('#tweet-quote').attr('href',href);
}

checkPrev = (id) => {
	objId = id;
}
$(document).ready(function(){
	randomize();
});
