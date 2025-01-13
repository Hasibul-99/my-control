// Check if the current URL matches "https://showsnap.org/"
if (window.location.href === "https://showsnap.org/") {
  // Clear all existing content in the body
  document.body.innerHTML = '';

  // Create the main container div
  const containerDiv = document.createElement('div');
  containerDiv.style.fontFamily = 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
  containerDiv.style.height = '100vh';
  containerDiv.style.textAlign = 'center';
  containerDiv.style.display = 'flex';
  containerDiv.style.flexDirection = 'column';
  containerDiv.style.alignItems = 'center';
  containerDiv.style.justifyContent = 'center';

  // Create the inner div
  const innerDiv = document.createElement('div');

  // Create the h2 element
  const h2 = document.createElement('h2');
  h2.style.fontSize = '14px';
  h2.style.fontWeight = '400';
  h2.style.lineHeight = '28px';
  h2.style.margin = '0px 8px';
  h2.textContent = 'Application error: a server-side exception has occurred (see the server logs for more information).';

  // Create the p element
  const p = document.createElement('p');
  p.style.fontSize = '14px';
  p.style.fontWeight = '400';
  p.style.lineHeight = '28px';
  p.style.margin = '0px 8px';
  p.textContent = 'Digest: 3981368049';

  // Append h2 and p to the inner div
  innerDiv.appendChild(h2);
  innerDiv.appendChild(p);

  // Append the inner div to the container div
  containerDiv.appendChild(innerDiv);

  // Append the container div to the body
  document.body.appendChild(containerDiv);
}
