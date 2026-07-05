# 👶 Baby Learnmate

**Overall Description:** An engaging, completely hands-free early learning web platform designed to turn screen time into a foundational learning experience for infants and toddlers.



## 📌 Project Description
**Baby Learnmate** is built to provide a **safe, ad-free, and effortless environment** where young children can explore the essential building blocks of languages and math at their own gentle pace. 

Clicking the **"Start Learning"** button seamlessly opens a dedicated dashboard page where users select an educational category. Once a category is clicked, the platform handles the rest by automatically cycling through vibrant flashcards—rendering **two images, one text element, and synchronized audio** simultaneously—completely hands-free.



## 🚀 Features

*   **Multi-Page Dashboard Flow:** Clicking **"Start Learning"** navigates the user from the landing page to a clean, focused learning dashboard.
*   **Vibrant Learning Categories:** Quick-access buttons for foundational development topics including **ABC, 123, COLOUR, and FRUITS**.
*   **Rich Media Flashcards:** Each flashcard step dynamically displays **2 images**, **1 text element**, and plays **synchronized audio** narration all at once.
*   **Hands-Free Auto-Cycle:** Automatically transitions to the next rich-media card after a few seconds, removing the need for manual clicking.
*   **Full Playback Controls:** Equipped with **Forward**, **Previous**, and **Stop** buttons, giving parents or children the ability to manually skip ahead, review a card, or freeze the automated cycle instantly.
*   **Safe & Ad-Free:** Structured to ensure an effortless environment entirely free from disruptive ad-popups or external links.

---

## 🌐 Live Demo
🔗 https://priyakumari-hub.github.io/baby_learnmate/

## 🛠️ Technology Used

| Category | Technologies |
| :--- | :--- |
| **Frontend Core** | HTML5, CSS3 |
| **Logic & Automation** | JavaScript (DOM Manipulation, Interval Timers, Audio Playback Control) |
| **Data Storage** | **JSON** (Acts as a lightweight database storing text labels, image paths, and audio file references) |
| **Hosting & Deployment** | GitHub Pages |


## 🛑 Challenges Faced & Solutions

### 1. Structuring and Managing Multi-Asset Data Records
   **The Challenge:** Managing a large database of flashcards—where each single card requires referencing two separate image URLs, a text label, and an audio file path—without cluttering the JavaScript code.
   **The Solution:** Stored all educational data inside a structured `data.json` file. JavaScript dynamically fetches this JSON file, parsing the asset paths on the fly based on the chosen category, keeping the codebase modular and easily scalable.

### 2. Synchronizing Manual Controls (Forward/Prev) with the Auto-Cycle Timer
 **The Challenge:** When a user clicks the "Forward" or "Previous" buttons, the automatic cycling timer would conflict with manual navigation, causing cards to skip too quickly or overlap audio files.
   **The Solution:** Implemented a timer reset pattern. Clicking the **Forward**, **Previous**, or **Stop** buttons instantly clears the active JavaScript interval (`clearInterval`), handles the manual card change or audio pause, and safely restarts the countdown loop from zero for the next card.
