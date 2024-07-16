// hali la sa chatgpt inin js kay di ako maaram haha
document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const textParts = [
      "Hello! I'm ",
      "<span class='colored-text'>Keith</span>",
      "."
    ];
    const fullText = textParts.join('');
    const delay = 100; // delay between each letter in milliseconds
    const loopDelay = 2000; // delay before restarting the loop
  
    let index = 0;
  
    function displayText() {
      if (index < fullText.length) {
        // Check if the current character is the start of a span tag
        if (fullText.slice(index, index + 6) === '<span ') {
          const spanEndIndex = fullText.indexOf('</span>', index) + 7;
          textContainer.innerHTML += fullText.slice(index, spanEndIndex);
          index = spanEndIndex;
        } else {
          textContainer.innerHTML += fullText.charAt(index);
          index++;
        }
        setTimeout(displayText, delay);
      } else {
        setTimeout(resetText, loopDelay);
      }
    }
  
    function resetText() {
      textContainer.innerHTML = '';
      index = 0;
      setTimeout(displayText, delay);
    }
  
    displayText();
  });
  