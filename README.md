# Cognify

Cognify is a powerful Chrome extension that allows you to instantly explain and translate text from any webpage. With a sleek chat interface, you can ask follow-up questions and get context-aware responses powered by ChatGPT.

![Cognify Extension](https://i.imgur.com/YOUR_IMAGE_URL.png)

## Features

- **Instant Explanation**: Select any text on a webpage and get a detailed explanation with just one click
- **Smart Translation**: Translate selected text with contextual understanding
- **Chat Interface**: Ask follow-up questions in a modern chat interface
- **Context Awareness**: Use surrounding text to improve results
- **Two Operation Modes**:
  - API Mode: Get responses directly within the extension (requires OpenAI API key)
  - ChatGPT Mode: Open results in ChatGPT website
- **Entire Page Context**: Option to use the full page content as context for better understanding
- **Draggable Interface**: Move the results window anywhere on the screen
- **Error Recovery**: Retry failed requests with a single click

## Installation

### From Chrome Web Store

_(Coming soon)_

### Manual Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top right)
4. Click "Load unpacked" and select the folder containing the extension files
5. The extension is now installed and ready to use

## Usage

1. Select any text on a webpage
2. A floating menu will appear near your selection with two options:
   - **Explain**: Get a detailed explanation of the selected text
   - **Translate**: Translate the selected text
3. Choose your preferred option and view the results in the chat interface
4. Ask follow-up questions using the input field at the bottom of the chat window

### API Mode

If you choose to use the API mode (which provides faster results directly in the extension):

1. Toggle the mode switch to "API"
2. Enter your OpenAI API key when prompted
3. Your API key will be stored locally for future use

## Configuration

- **Mode Selection**: Choose between API mode and ChatGPT mode
- **Context Awareness**: Enable "Entire Page Context" to use the full page content for better understanding

## Privacy

- Your API key is stored locally in your browser and is never sent to any server other than OpenAI
- Selected text is processed directly through the OpenAI API or ChatGPT

## Technical Details

- Built with vanilla JavaScript
- Uses OpenAI's GPT-4o model for explanations and translations
- Supports markdown formatting in responses
- Designed with a clean, modern UI that adapts to any website

## License

MIT

## Credits

Created by [Sociopacific](https://github.com/Sociopacific)
