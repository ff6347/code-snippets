# AI Image Classify Drawing on Canvas

Draw curly hair and see what type it is.

Initial training with Google Teachable Machine was done byhttps://github.com/Diane1931.

## AI genereated Description

This p5js sketch creates an interactive canvas where users can draw with their mouse. It includes machine learning functionality to classify the drawings. Below are the features and outcomes of the sketch:

- **Canvas Setup**: A 200x200 pixel drawing canvas is initialized where users can create drawings.
- **Drawing Mechanism**: Users can draw freehand on the canvas with varying stroke weights based on the speed of the mouse movement.
- **Clear Button**: A button to clear the canvas and reset the drawing space.
- **Classify Button**: Initiates the classification of the current canvas drawing using a preloaded machine learning model from Teachable Machine. The result shows the label and confidence score.
- **Dynamic Feedback**: Provides users with real-time feedback on the status of model loading, readiness for drawing, classifying process, and results of the classification including the label and confidence percentage.
- **Machine Learning Integration**: Utilizes the ml5.js library to integrate a Teachable Machine image classifier model, offering an interactive way to test machine learning classification on drawings.

The sketch combines interactive drawing with the application of machine learning for image classification, offering a hands-on experience with AI.
