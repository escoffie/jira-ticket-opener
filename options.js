document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('jiraBaseUrl', ({ jiraBaseUrl }) => {
    if (jiraBaseUrl) {
      document.getElementById('baseUrl').value = jiraBaseUrl;
    }
  });

  document.getElementById('saveBtn').addEventListener('click', () => {
    const baseUrl = document.getElementById('baseUrl').value.trim();
    if (!baseUrl) return;

    chrome.storage.sync.set({ jiraBaseUrl: baseUrl }, () => {
      document.getElementById('status').textContent = 'Saved!';
      setTimeout(() => document.getElementById('status').textContent = '', 2000);
    });
  });
});