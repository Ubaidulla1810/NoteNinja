# NoteNinja

NoteNinja is a simple, single-page web application designed for quickly creating, viewing, editing, and managing text-based notes or code snippets directly within your browser. It provides a clean interface and stores all your notes locally in the browser's `localStorage`.

---

## 🌐 Live Demo

You can try the application live here:

  NoteNinja Live Demo https://note-ninja-uk.vercel.app

---

## ✨ Features

* **Create Notes:** Easily add new notes with a title and content.
* **View Notes:** See the full content of individual notes on a dedicated page.
* **Edit Notes:** Update existing notes using the creation form interface.
* **Delete Notes:** Remove unwanted notes from your list.
* **Search:** Quickly find notes by searching through their titles.
* **Copy to Clipboard:** Copy the content of a note directly from the view page.
* **Local Storage:** All your data persists locally in your browser, no backend required.
* **Sorting:** Notes list is ordered with the newest notes shown first.
* **Responsive Design:** Simple layout that works across different screen sizes.
* **Custom Styling:** Clean user interface built with Tailwind CSS.

---

## 💻 Technologies Used

* **React:** For building the user interface.
* **React Router DOM:** For handling navigation between different views (Home, Pastes, View Paste).
* **Redux Toolkit:** For managing the application's state.
* **Tailwind CSS:** For rapid and consistent styling.
* **`react-toastify`:** For displaying notifications (e.g., success messages).
* **`uuid` (Optional but Recommended):** For generating truly unique identifiers for notes.
* **Vite:** As the build tool for the React application.
* **Browser APIs:** Utilizing `localStorage` for data persistence and `navigator.clipboard` for copy functionality.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) (or [yarn](https://yarnpkg.com/)) installed on your computer.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Ubaidulla1810/NoteNinja.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd noteninja
    ```

3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your web browser and visit the address provided by Vite (usually `http://localhost:5173`).

---

## 💡 Usage

* **Home Page (`/`):** Use the form to create a new note or load an existing note for editing by clicking "Edit" on the Pastes page.
* **Pastes Page (`/pastes`):** View a list of all your notes. Use the search bar to filter notes by title. Click on "View" to see the full content, "Edit" to modify the note (opens on the Home page), or "Delete" to remove the note.
* **View Page (`/pastes/:id`):** See the title and content of a specific note. Use the "Copy Content" button above the textarea to copy the note's content to your clipboard.

---

## 👤 Authorship

Made with 🤍 by Ubaidulla khan. NoteNinja.

---

## 📞 Contact

Connect with the Me:

* If you have any feedback or suggestions, feel free to reach out:
* Email: ubaidullacse01@gmail.com
* GitHub: [Ubaidulla1810](https://github.com/Ubaidulla1810)

---

## 🔒 License

All Rights Reserved. Standard Copyright Applies.

This project is copyrighted by Ubaidulla khan. You may view the code publicly on GitHub, but copying, distribution, or modification requires explicit permission from the author.

---

---
