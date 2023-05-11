const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Update UI to notify the user they can install the PWA
  butInstall.style.display = 'block';
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide the install button, show the install prompt
    deferredPrompt.prompt();
  
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
  
    // Log the user's choice (either "accepted" or "dismissed")
    console.log(`User ${outcome === 'accepted' ? 'accepted' : 'dismissed'} the install prompt`);
    butInstall.style.display = 'none';
  });
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
    deferredPrompt= null;
  });
