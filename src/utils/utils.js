export function cleanText(text) {
  // Convert to lowercase
  text = text.toLowerCase();
  
  // Remove punctuation
  text = text.replace(/[^\w\s]/g, '');
  
  // Remove extra whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

export function extractKeywords(text) {
  // Split text into words
  const words = text.split(' ');
  
  // Common stop words to filter out
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to',
    'for', 'of', 'with', 'by'
  ]);
  
  // Filter out short words and stop words
  const keywords = words.filter(word => 
    word.length > 3 && !stopWords.has(word)
  );
  
  // Remove duplicates while preserving order
  return [...new Set(keywords)];
}