async function newQuote() {
  try {
    const response = await fetch("/quote"); // calls your backend
    const data = await response.json();
    const quoteObj = data[0];
    document.getElementById("quote").innerText = `${quoteObj.q} — ${quoteObj.a}`;
  } catch (error) {
    document.getElementById("quote").innerText = "Oops! Couldn't fetch a quote.";
  }
}



function copyQuote() {
  const quoteText = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(quoteText).then(() => {
    alert("Quote copied to clipboard!");
  });
}

// Show a quote on page load
window.onload = newQuote;
