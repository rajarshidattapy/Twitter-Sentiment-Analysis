import pickle
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import re
from pathlib import Path

nltk.download('stopwords')

class SentimentModel:
    def __init__(self):
        base_path = Path(__file__).parent.parent.parent / 'model'
        
        try:
            self.model = pickle.load(open(base_path / 'sentiment_model.pkl', 'rb'))
            self.vectorizer = pickle.load(open(base_path / 'vectorizer.pkl', 'rb'))
        except FileNotFoundError as e:
            raise RuntimeError(
                "Model files not found. Please ensure 'sentiment_model.pkl' and 'vectorizer.pkl' "
                "are present in the 'backend/model' directory"
            ) from e
            
        self.ps = PorterStemmer()
        
    def preprocess_text(self, text):
        # Clean and preprocess the text
        review = re.sub('[^a-zA-Z]', ' ', text)
        review = review.lower()
        review = review.split()
        review = [self.ps.stem(word) for word in review if not word in set(stopwords.words('english'))]
        review = ' '.join(review)
        return review
    
    def predict(self, text):
        # Preprocess the text
        processed_text = self.preprocess_text(text)
        
        # Vectorize the text
        text_vector = self.vectorizer.transform([processed_text]).toarray()
        
        # Make prediction
        prediction = self.model.predict(text_vector)
        confidence = self.model.predict_proba(text_vector).max()
        
        return {
            "sentiment": int(prediction[0]),
            "confidence": float(confidence)
        }