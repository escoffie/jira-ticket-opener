function openTicket(ticketId) {
  chrome.storage.sync.get(['jiraBaseUrl', 'recentTickets'], ({ jiraBaseUrl, recentTickets }) => {
    if (!jiraBaseUrl) {
      alert('Start by configuring the base Jira URL. Right click the extension icon and hit Options.');
      return;
    }

    const url = `${jiraBaseUrl.replace(/\/$/, '')}/browse/${ticketId}`;
    chrome.tabs.create({ url });

    recentTickets = recentTickets || [];
    recentTickets = recentTickets.filter(t => t !== ticketId);
    recentTickets.push(ticketId);
    if (recentTickets.length > 5) recentTickets.shift();

    chrome.storage.sync.set({ recentTickets });
  });
}

document.getElementById('openBtn').addEventListener('click', () => {
  const ticketId = document.getElementById('ticketId').value.trim();
  if (ticketId) openTicket(ticketId);
});

document.getElementById('ticketId').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('openBtn').click();
  }
});

function renderRecentTickets() {
  chrome.storage.sync.get('recentTickets', ({ recentTickets }) => {
    const list = document.getElementById('recentList');
    list.innerHTML = '';
    (recentTickets || []).forEach(ticket => {
      const li = document.createElement('li');
      li.textContent = ticket;
      li.style.cursor = 'pointer';
      li.addEventListener('click', () => openTicket(ticket));
      list.appendChild(li);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecentTickets();
  document.getElementById('ticketId').focus();
});