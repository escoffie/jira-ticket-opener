# Jira Ticket Opener - Chrome Extension

A simple and efficient Chrome extension to quickly open Jira tickets by ID and keep track of your recent tickets.

## Features

- 🔗 **Open Jira Tickets**: Enter a ticket ID (e.g., `OO-1234`) and open it in a new browser tab.
- 🌐 **Configurable Base URL**: Set your Jira base URL (e.g., `https://yourcompany.atlassian.net`) in the options page.
- 🕑 **Recent Tickets History**: Automatically stores your last 5 opened tickets.
- 📋 **Clickable History**: Click any recent ticket to reopen it instantly.
- ⌨️ **Keyboard Friendly**: Press Enter to open a ticket without clicking the button.
- 🎯 **Auto-focus**: The input field is focused when the popup opens.
- 🎨 **Clean UI**: Styled with ellipsis to handle long ticket titles gracefully.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder where you extracted this extension.

## Usage

1. Click on the extension icon.
2. Enter a Jira ticket ID (e.g., `ABC-1001`) and hit **Enter** or click **Open Ticket**.
3. The ticket will open in a new tab.
4. Previously opened tickets appear as a clickable list in the popup.

## Configuration

To set your Jira base URL:

1. Right-click the extension icon and choose **Options**.
2. Enter your Jira base URL (e.g., `https://yourcompany.atlassian.net`).
3. Click **Save**.

## Notes

- The extension stores your recent ticket history locally (no data is sent anywhere).
- By default, it shows the ticket ID as the title in history. Title scraping can be added with additional permissions if needed.

## License

MIT
