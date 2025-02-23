# Code Reviewer

## Overview
Code Reviewer is a web-based application that allows users to enter code in an editor and receive instant reviews powered by Google Gemini AI. The AI analyzes the code, provides corrections if needed, and suggests better approaches for optimization.

## Features
- **Code Review:** AI analyzes the code and suggests corrections.
- **Optimization Suggestions:** Provides a better way to write the code.
- **Syntax Highlighting:** Uses PrismJS for improved code readability.
- **Markdown Support:** Displays code reviews in a clean format.
- **Interactive UI:** Built with React for a seamless experience.
- **Backend API:** Uses Express and Axios to communicate with Google Gemini.

## Tech Stack
- **Frontend:** React, PrismJS, Axios, Markdown
- **Backend:** Express, CORS
- **AI Model:** Google Gemini

## Installation
### Prerequisites
- Node.js installed
- Google Gemini API Key (if required)

### Setup Instructions
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/code-reviewer.git
   cd code-reviewer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the backend server:**
   ```sh
   cd server
   npm install
   npm start
   ```

4. **Start the frontend:**
   ```sh
   cd client
   npm start
   ```

## Usage
1. Open the application in your browser.
2. Enter the code snippet in the editor.
3. Click the "Review Code" button.
4. View the AI-generated suggestions and corrected code.

## API Endpoints
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| POST   | `/review`    | Reviews the code and provides corrections |
| GET    | `/status`    | Checks server status |

## Future Enhancements
- Add support for more programming languages.
- Provide real-time collaborative code review.
- Implement user authentication for saving reviewed code.

## Contributing
Contributions are welcome! Feel free to fork the repo, open an issue, or submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or suggestions, reach out at [your-email@example.com].


