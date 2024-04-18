# Reactive to Sound

## (AI generated) Description

This p5.js sketch creates an interactive audio-visual experience using microphone input and a playable song. It visually represents the audio input's volume level with dynamic visuals. Here's a concise summary of the outcome:

- Initializes with a black background and a clickable message "press to play" centered on the canvas.
- Pressing the mouse starts playing a loaded song ("assets/lucky-dragons_power-melody.mp3") and changes the background color to indicate the song is playing.
- Continuously captures live audio input volume through the microphone.
- Dynamically adjusts the visuals based on the audio input volume:
  - Draws an ellipse in the center of the canvas.
  - The ellipse's vertical position and size change relative to the current volume level, oscillating in size and vertical position from the center.
- Pressing the mouse while the song is playing stops the music and alters the background color again as feedback.
- The program adjusts for the minimum and maximum volume levels experienced to ensure visual responsiveness.

Key Features:

- Press interaction to play or stop the song.
- Real-time audio input analysis for visual responsiveness.
- Visual feedback for song play state and audio levels through ellipse size and position adjustments.

## Known Issues

- Does currently not work in Firefox `TypeError: arraySequence[channel] is undefined`

## License

Power Melody by Lucky Dragons is licensed under a Attribution-NonCommercial-ShareAlike 3.0 International License. https://freemusicarchive.org/music/Lucky_Dragons/Open_Power/04_Power_Melodymp3/
