import sys
import json
import matplotlib.pyplot as plt
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
# nltk.data.path.append("C:\FinalYearProject\PythonScript\nltk_data\sentiment\vader_lexicon.zip\vader_lexicon\vader_lexicon.txt")
import logging
# Configure logging
logging.basicConfig(filename='sentiment_analysis.log', level=logging.DEBUG)

def sentiment_analyze(sentiment_text):
    if not sentiment_text.strip():
        return "Input text is empty"

    sia = SentimentIntensityAnalyzer()
    score = sia.polarity_scores(sentiment_text)
    logging.info(f"Score: {score}")
    return score


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: main.py <text>")
        sys.exit(1)

    input_text = sys.argv[1]
    result = sentiment_analyze(input_text)
    # Convert the result dictionary to a JSON string
    result_json = json.dumps(result)

    print(result)  # Print the result
# Example usage:
# sent_text = "This is a sample text with positive sentiment."
# result = sentiment_analyze(sent_text)
# print(result)





