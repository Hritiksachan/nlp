document.getElementById('translate-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const languagePair = document.getElementById('language-select').value;
    
    // Mock translation function - replace with actual API call
    function mockTranslate(text, langPair) {
        if (langPair === 'en-hi') {
            return 'यह एक डमी अनुवाद है'; // Mock Hindi translation
        } else if (langPair === 'hi-en') {
            return 'This is a dummy translation'; // Mock English translation
        }
    }

    const translatedText = mockTranslate(inputText, languagePair);
    document.getElementById('output-text').innerText = translatedText;
});
