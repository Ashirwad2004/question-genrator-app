import re
import string

def clean_text(text):
    """Clean and normalize input text."""
    # Convert to lowercase
    text = text.lower()
    
    # Remove punctuation
    text = text.translate(str.maketrans("", "", string.punctuation))
    
    # Remove extra whitespace
    text = " ".join(text.split())
    
    return text

def extract_keywords(text):
    """Extract potential keywords from text."""
    # Split text into words
    words = text.split()
    
    # Remove common stop words
    stop_words = {
        'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to',
        'for', 'of', 'with', 'by'
    }
    
    # Filter out short words and stop words
    keywords = [word for word in words 
               if len(word) > 3 
               and word not in stop_words]
    
    # Remove duplicates while preserving order
    return list(dict.fromkeys(keywords))