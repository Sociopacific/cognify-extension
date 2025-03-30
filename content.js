document.addEventListener("mouseup", function (event) {
  // Skip processing if the click was on an element with id "chatgpt-buttons" or "chatgpt-result-container"
  if (
    event.target.closest("#chatgpt-buttons") ||
    event.target.closest("#chatgpt-result-container")
  ) {
    return;
  }

  const selectedText = window.getSelection().toString().trim();

  // Remove previous buttons if they exist
  const existingButtons = document.getElementById("chatgpt-buttons");
  if (existingButtons) {
    existingButtons.remove();
  }

  if (selectedText.length > 0) {
    // Create a container for buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "chatgpt-buttons";
    buttonsDiv.style.cssText = `
      position: absolute;
      background: rgba(255, 255, 255, 0.98);
      border: none; 
      border-radius: 32px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03);
      padding: 12px;
      z-index: 10000;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      backdrop-filter: blur(10px);
      animation: fadeIn 0.2s ease-out;
      width: max-content;
    `;

    // Add animation styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      #chatgpt-result-container {
        position: fixed;
        bottom: 30px;
        top: 30px;
        right: 30px;
        width: 380px;
        height: auto;
        max-height: calc(100% - 60px);
        background: white;
        border-radius: 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03);
        z-index: 10001;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        animation: slideIn 0.3s ease-out;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      @keyframes slideIn {
        from { transform: translateY(100px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .result-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        background: white;
        color: #202123;
        font-weight: 600;
        font-size: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        height: 60px;
        box-sizing: border-box;
      }
      .result-header-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .result-content {
        padding: 16px 20px;
        overflow-y: auto;
        line-height: 1.6;
        font-size: 15px;
        color: #353740;
        /* Hide scrollbar for different browsers */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      /* Hide scrollbar for Chrome, Safari and Opera */
      .result-content::-webkit-scrollbar {
        display: none;
      }
      .chat-message {
        padding: 12px 16px;
        margin: 6px 0;
        border-radius: 12px;
        max-width: 85%;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        animation: fadeInMessage 0.3s ease-out;
      }
      @keyframes fadeInMessage {
        from { transform: translateY(10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .user-message {
        background: hsla(0,0%,91%,.5);
        color: #202123;
        align-self: flex-end;
        margin-left: auto;
        box-shadow: none;
      }
      .assistant-message {
        background: transparent;
        color: #202123;
        align-self: flex-start;
        margin-right: 0;
        max-width: 100%;
        width: 100%;
        box-shadow: none;
      }
      .assistant-message .loading-spinner {
        border: 2px solid rgba(32, 33, 35, 0.3);
        border-top-color: #202123;
      }
      .result-content p {
        margin-bottom: 15px;
      }
      .result-content p:last-child {
        margin-bottom: 0;
      }
      .result-content code {
        background: #f7f7f8;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        font-size: 13px;
        color: #353740;
      }
      .result-content pre {
        background: #f7f7f8;
        padding: 15px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 15px 0;
      }
      .result-content pre code {
        background: transparent;
        padding: 0;
      }
      .result-content a {
        color: #202123;
        text-decoration: none;
      }
      .result-content a:hover {
        text-decoration: underline;
      }
      .result-content ul, .result-content ol {
        margin: 15px 0;
        padding-left: 25px;
      }
      .result-content li {
        margin-bottom: 6px;
      }
      .close-btn {
        background: none;
        border: none;
        color: #202123;
        cursor: pointer;
        font-size: 24px;
        line-height: 1;
        opacity: 0.8;
        transition: opacity 0.2s;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
      }
      .close-btn:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.04);
      }
      .chatgpt-logo {
        width: 20px;
        height: 20px;
      }
      .chat-container {
        display: flex;
        flex-direction: column;
        height: calc(100% - 120px);
        max-height: 100%;
        flex-grow: 1;
      }
      .chat-input {
        flex-grow: 1;
        border: 1px solid #e0e0e0;
        border-radius: 24px;
        padding: 10px 16px;
        font-size: 14px;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        transition: all 0.2s ease;
        height: 42px;
        box-sizing: border-box;
      }
      chatInput.onfocus = function() {
        this.style.borderColor = "#202123";
        this.style.borderWidth = "2px";
        this.style.boxShadow = "none";
      };
    `;
    document.head.appendChild(styleSheet);

    // Переменная для хранения текущего режима (API или ChatGPT)
    let useApi = true;
    let apiKey = null;
    let useWideContext = false; // Переменная для режима широкого контекста

    // Загружаем сохраненный режим и API-ключ
    chrome.storage.local.get(
      ["useApi", "apiKey", "useWideContext"],
      function (result) {
        if (result.useApi !== undefined) {
          useApi = result.useApi;
        }
        if (result.apiKey) {
          apiKey = result.apiKey;
        }
        if (result.useWideContext !== undefined) {
          useWideContext = result.useWideContext;
        }

        // Создаем интерфейс после загрузки настроек
        createExtensionInterface();
      }
    );

    // Function to request API key from user
    function requestApiKey() {
      return new Promise((resolve, reject) => {
        // Create modal window for key input
        const modal = document.createElement("div");
        modal.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10001;
        `;

        const modalContent = document.createElement("div");
        modalContent.style.cssText = `
          background-color: white;
          padding: 24px;
          border-radius: 12px;
          width: 400px;
          max-width: 90%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        `;

        const title = document.createElement("h3");
        title.style.cssText = `
          margin: 0 0 16px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 18px;
          color: #202123;
        `;
        title.textContent = "Enter OpenAI API Key";

        const description = document.createElement("p");
        description.style.cssText = `
          margin: 0 0 16px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        `;
        description.textContent =
          "To use the API mode, please enter your OpenAI API key. Your key will be saved in your browser for future use.";

        const input = document.createElement("input");
        input.type = "password";
        input.placeholder = "sk-...";
        input.style.cssText = `
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          box-sizing: border-box;
          margin-bottom: 16px;
        `;

        const buttonContainer = document.createElement("div");
        buttonContainer.style.cssText = `
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        `;

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.style.cssText = `
          padding: 8px 16px;
          background: #f1f1f1;
          color: #666;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
        `;
        cancelButton.onclick = () => {
          modal.remove();
          reject(new Error("API key input cancelled"));
        };

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.style.cssText = `
          padding: 8px 16px;
          background: #202123;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
        `;
        saveButton.onclick = () => {
          const key = input.value.trim();
          if (key && key.startsWith("sk-")) {
            // Save key in chrome.storage
            chrome.storage.local.set({ apiKey: key }, function () {
              apiKey = key;
              modal.remove();
              resolve(key);
            });
          } else {
            input.style.borderColor = "#ff4d4f";
            const errorMsg = document.createElement("p");
            errorMsg.textContent =
              'Please enter a valid API key starting with "sk-"';
            errorMsg.style.cssText = `
              color: #ff4d4f;
              margin: 4px 0 12px 0;
              font-size: 12px;
            `;
            if (!modalContent.querySelector(".error-msg")) {
              input.insertAdjacentElement("afterend", errorMsg);
              errorMsg.className = "error-msg";
            }
          }
        };

        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(saveButton);

        modalContent.appendChild(title);
        modalContent.appendChild(description);
        modalContent.appendChild(input);
        modalContent.appendChild(buttonContainer);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Focus on input field
        input.focus();

        // Handle Enter for save
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            saveButton.click();
          }
        });
      });
    }

    // Store message history for each chat
    let chatHistory = [];

    // Function to display the result on the page as a chat
    function showResultOnPage(title, content) {
      // Remove previous result container if it exists
      const existingContainer = document.getElementById(
        "chatgpt-result-container"
      );
      if (existingContainer) {
        existingContainer.remove();
      }

      // If content is empty, this is the initial state waiting for a response
      // Don't add an empty assistant message in this case
      if (chatHistory.length === 0) {
        chatHistory = [{ role: "user", content: selectedText }];
      } else if (content && chatHistory.length === 1) {
        // Add assistant response only if it exists and the chat only has a user message
        chatHistory.push({ role: "assistant", content: content });
      }

      // Create a container for the result
      const resultContainer = document.createElement("div");
      resultContainer.id = "chatgpt-result-container";

      // Create a header
      const header = document.createElement("div");
      header.className = "result-header";

      // Add the left part of the header (logo + text)
      const headerLeft = document.createElement("div");
      headerLeft.className = "result-header-left";

      // Add logo to the header depending on the operation type
      const logo = document.createElement("img");
      logo.className = "chatgpt-logo";
      if (title === "Explanation") {
        logo.src = chrome.runtime.getURL("explane.svg");
      } else if (title === "Translation") {
        logo.src = chrome.runtime.getURL("translate.svg");
      } else {
        logo.src = chrome.runtime.getURL("icon.png");
      }
      logo.alt = title;
      logo.style.filter = "brightness(0)"; // Make the icon black

      // Add header text
      const titleText = document.createElement("span");
      titleText.textContent = title;

      // Assemble the left part of the header
      headerLeft.appendChild(logo);
      headerLeft.appendChild(titleText);

      // Close button
      const closeButton = document.createElement("button");
      closeButton.className = "close-btn";
      closeButton.textContent = "×";
      closeButton.onclick = () => resultContainer.remove();

      // Add components to the header
      header.appendChild(headerLeft);
      header.appendChild(closeButton);

      // Create a container for the chat
      const chatContainer = document.createElement("div");
      chatContainer.className = "chat-container";
      chatContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        height: calc(100% - 120px);
        max-height: 100%;
        flex-grow: 1;
      `;

      // Chat content
      const chatContent = document.createElement("div");
      chatContent.className = "result-content";
      chatContent.style.cssText += `
        flex-grow: 1;
        overflow-y: auto;
      `;

      // Display chat messages
      displayChatMessages(chatContent);

      // Create input for questions
      const chatInputContainer = document.createElement("div");
      chatInputContainer.className = "chat-input-container";
      chatInputContainer.style.cssText = `
        display: flex;
        padding: 16px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        background: white;
        box-sizing: border-box;
        align-items: center;
      `;

      const chatInput = document.createElement("input");
      chatInput.type = "text";
      chatInput.placeholder = "Enter your question...";
      chatInput.className = "chat-input";
      chatInput.style.cssText = `
        flex-grow: 1;
        border: 1px solid #e0e0e0;
        border-radius: 24px;
        padding: 10px 16px;
        font-size: 14px;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        transition: all 0.2s ease;
        height: 42px;
        box-sizing: border-box;
      `;

      chatInput.onfocus = function () {
        this.style.borderColor = "#202123";
        this.style.borderWidth = "2px";
        this.style.boxShadow = "none";
      };

      chatInput.onblur = function () {
        this.style.borderColor = "#e0e0e0";
        this.style.boxShadow = "none";
      };

      const sendButton = document.createElement("button");
      sendButton.className = "chat-send-button";
      sendButton.style.cssText = `
        margin-left: 8px;
        padding: 0;
        background: #202123;
        color: white;
        font-weight: 500;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        transition: all 0.2s ease;
        height: 42px;
        width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      // Add icon for the send button
      const sendIcon = document.createElement("span");
      sendIcon.innerHTML = `
        <img src="${chrome.runtime.getURL(
          "send.svg"
        )}" width="20" height="20" style="filter: brightness(0) invert(1);">
      `;

      sendButton.appendChild(sendIcon);

      sendButton.onmouseover = function () {
        this.style.background = "#353740";
        this.style.transform = "translateY(-1px)";
      };

      sendButton.onmouseout = function () {
        this.style.background = "#202123";
        this.style.transform = "translateY(0)";
      };

      // Function to handle message sending
      const handleSendMessage = async () => {
        const message = chatInput.value.trim();
        if (!message) return;

        // Clear input field
        chatInput.value = "";

        // Button click animation
        sendButton.style.transform = "scale(0.95)";
        setTimeout(() => {
          sendButton.style.transform = "translateY(0)";
        }, 150);

        // Add user message to history
        chatHistory.push({ role: "user", content: message });

        // Display updated history
        displayChatMessages(chatContent);

        // Scroll chat down
        chatContent.scrollTop = chatContent.scrollHeight;

        // Show loading indicator
        const loadingMessage = document.createElement("div");
        loadingMessage.className = "chat-message assistant-message";
        loadingMessage.innerHTML =
          '<div class="loading-spinner" style="margin: 10px;"></div>';
        chatContent.appendChild(loadingMessage);
        chatContent.scrollTop = chatContent.scrollHeight;

        // Send request to API
        try {
          // Prepare messages for API
          const apiMessages = chatHistory.map((msg) => ({
            role: msg.role,
            content: msg.content,
          }));

          // Request response from API
          let response;
          if (useApi) {
            response = await fetchChatOpenAI(apiMessages);
          } else {
            // If API is not used, simply open ChatGPT with the query
            const promptText = `Previous context: ${chatHistory
              .slice(0, -1)
              .map((msg) => `${msg.role}: ${msg.content}`)
              .join("\n")}\n\nNew question: ${message}`;
            const encodedText = encodeURIComponent(promptText);
            window.open("https://chat.openai.com/?q=" + encodedText, "_blank");
            return;
          }

          // Remove loading indicator
          chatContent.removeChild(loadingMessage);

          // Add response to history
          chatHistory.push({ role: "assistant", content: response });

          // Update display
          displayChatMessages(chatContent);

          // Scroll chat down
          chatContent.scrollTop = chatContent.scrollHeight;
        } catch (error) {
          // Remove loading indicator
          chatContent.removeChild(loadingMessage);

          // Show error
          chatHistory.push({
            role: "assistant",
            content: `Error: ${error.message}`,
          });
          displayChatMessages(chatContent);
          chatContent.scrollTop = chatContent.scrollHeight;
        }
      };

      // Event handlers for sending message
      sendButton.onclick = handleSendMessage;
      chatInput.onkeypress = (e) => {
        if (e.key === "Enter") handleSendMessage();
      };

      chatInputContainer.appendChild(chatInput);
      chatInputContainer.appendChild(sendButton);

      // Assemble chat components
      chatContainer.appendChild(chatContent);
      chatContainer.appendChild(chatInputContainer);

      // Put everything together
      resultContainer.appendChild(header);
      resultContainer.appendChild(chatContainer);
      document.body.appendChild(resultContainer);

      // Scroll chat down to see the latest message
      chatContent.scrollTop = chatContent.scrollHeight;

      // Make the container draggable
      makeElementDraggable(resultContainer, header);
    }

    // Function to display chat messages
    function displayChatMessages(container) {
      // Clear the container
      container.innerHTML = "";

      // Display each message
      chatHistory.forEach((message, index) => {
        const messageElement = document.createElement("div");
        messageElement.className = `chat-message ${message.role}-message`;

        // Process markdown in content
        const formattedContent = formatMarkdown(message.content);

        // Check if this is an error message
        if (
          message.role === "assistant" &&
          message.content.startsWith("Error:")
        ) {
          // Create error message with retry button
          messageElement.innerHTML = formattedContent;

          // Add retry button if this is the last message
          if (index === chatHistory.length - 1) {
            const retryButton = document.createElement("button");
            retryButton.textContent = "Retry";
            retryButton.style.cssText = `
              margin-top: 10px;
              padding: 6px 12px;
              background: #202123;
              color: white;
              font-weight: 500;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-size: 13px;
              transition: all 0.2s ease;
            `;

            retryButton.onmouseover = function () {
              this.style.background = "#353740";
            };

            retryButton.onmouseout = function () {
              this.style.background = "#202123";
            };

            // Add click handler for retry
            retryButton.onclick = function () {
              // Remove the error message
              chatHistory.pop();

              // Find the last user message
              const lastUserMessage = [...chatHistory]
                .reverse()
                .find((msg) => msg.role === "user");

              if (lastUserMessage) {
                // Show loading indicator
                const chatContent = document.querySelector(".result-content");
                displayChatMessages(chatContent);

                const loadingMessage = document.createElement("div");
                loadingMessage.className = "chat-message assistant-message";
                loadingMessage.innerHTML =
                  '<div class="loading-spinner" style="margin: 10px;"></div>';
                chatContent.appendChild(loadingMessage);
                chatContent.scrollTop = chatContent.scrollHeight;

                // Retry the request
                const apiMessages = chatHistory.map((msg) => ({
                  role: msg.role,
                  content: msg.content,
                }));

                fetchChatOpenAI(apiMessages)
                  .then((response) => {
                    // Remove loading indicator
                    loadingMessage.remove();

                    // Add response to history
                    chatHistory.push({ role: "assistant", content: response });

                    // Update display
                    displayChatMessages(chatContent);

                    // Scroll chat down
                    chatContent.scrollTop = chatContent.scrollHeight;
                  })
                  .catch((error) => {
                    // Remove loading indicator
                    loadingMessage.remove();

                    // Show error
                    chatHistory.push({
                      role: "assistant",
                      content: `Error: ${error.message}`,
                    });
                    displayChatMessages(chatContent);
                    chatContent.scrollTop = chatContent.scrollHeight;
                  });
              }
            };

            messageElement.appendChild(retryButton);
          }
        } else {
          messageElement.innerHTML = formattedContent;
        }

        // Add additional styles for assistant messages
        if (message.role === "assistant") {
          messageElement.style.borderRadius = "12px 12px 12px 0";
          messageElement.style.width = "calc(100% - 24px)";
          messageElement.style.boxSizing = "border-box";
        }

        // Add message to container
        container.appendChild(messageElement);
      });
    }

    // Function to request OpenAI API with chat history
    async function fetchChatOpenAI(messages) {
      try {
        // If we don't have an API key, request it
        if (!apiKey) {
          try {
            apiKey = await requestApiKey();
          } catch (err) {
            return "Cannot complete request: API key not provided.";
          }
        }

        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4o",
              messages: messages,
              max_tokens: 1000,
            }),
          }
        );

        if (!response.ok) {
          // If we get 401, it means the API key is invalid
          if (response.status === 401) {
            // Remove invalid key
            apiKey = null;
            chrome.storage.local.remove("apiKey");
            throw new Error("API key is invalid. Please provide a valid key.");
          }
          throw new Error(`API request failed with error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
      } catch (error) {
        console.error("Error when requesting API:", error);
        throw error;
      }
    }

    // Function for formatting markdown
    function formatMarkdown(text) {
      // Replace headers
      text = text.replace(/^### (.*$)/gm, "<h3>$1</h3>");
      text = text.replace(/^## (.*$)/gm, "<h2>$1</h2>");
      text = text.replace(/^# (.*$)/gm, "<h1>$1</h1>");

      // Replace code blocks
      text = text.replace(/```([^`]+)```/g, "<pre><code>$1</code></pre>");

      // Replace inline code
      text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

      // Replace bold text
      text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

      // Replace italics
      text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");

      // Convert line breaks to paragraphs
      text = "<p>" + text.replace(/\n\n/g, "</p><p>") + "</p>";

      // Replace single line breaks with <br>
      text = text.replace(/<p>(.+)\n(.+)<\/p>/g, "<p>$1<br>$2</p>");

      return text;
    }

    // Function to make an element draggable
    function makeElementDraggable(element, handle) {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

      handle.style.cursor = "move";
      handle.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e.preventDefault();
        // Get the cursor position at start
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Get current position values
        const computedStyle = window.getComputedStyle(element);
        let topValue = parseInt(computedStyle.top) || element.offsetTop;
        let leftValue = parseInt(computedStyle.left) || element.offsetLeft;

        // Set the element's new position
        element.style.top = topValue - pos2 + "px";
        element.style.left = leftValue - pos1 + "px";

        // Make sure position is controlled by top/left only
        element.style.bottom = "auto";
        element.style.right = "auto";
      }

      function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    // Function to create a styled button
    function createStyledButton(text, icon, bgColor, clickHandler) {
      const button = document.createElement("button");
      button.style.cssText = `
        margin: 0;
        padding: 10px 16px;
        background: #202123;
        color: white;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 14px;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 180px;
        height: 42px;
        box-shadow: none;
        white-space: nowrap;
        width: auto;
      `;

      const iconSpan = document.createElement("span");
      iconSpan.innerHTML = icon;
      iconSpan.style.marginRight = "10px";

      button.appendChild(iconSpan);
      button.appendChild(document.createTextNode(text));

      // Hover effects
      button.onmouseover = function () {
        this.style.background = "#353740";
      };

      button.onmouseout = function () {
        this.style.background = "#202123";
      };

      // Click handler
      button.addEventListener("click", clickHandler);

      return button;
    }

    // Icons for buttons
    const explainIconUrl = chrome.runtime.getURL("explane.svg");
    const translateIconUrl = chrome.runtime.getURL("translate.svg");

    // Create HTML for icons
    const explainIcon = `<img src="${explainIconUrl}" width="18" height="18" style="filter: brightness(0) invert(1);">`;
    const translateIcon = `<img src="${translateIconUrl}" width="18" height="18" style="filter: brightness(0) invert(1);">`;

    const apiIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.61 17C7.2 17 6.77 16.83 6.4 16.52C5.93 16.05 5.84 15.27 6.17 14.7C6.76 13.67 7.4 12.6 8.1 11.6C7.73 10.87 7.39 10.14 7.09 9.43C6.84 8.81 7.05 8.11 7.56 7.73C8.21 7.24 9.12 7.4 9.58 8.07C9.87 8.53 10.14 9 10.39 9.47C10.92 8.51 11.49 7.54 12.13 6.57C12.46 6.04 13.1 5.83 13.66 6.04C14.43 6.33 14.69 7.28 14.27 7.95C13.59 9.07 13 10.21 12.5 11.37C13.21 12.26 13.87 13.19 14.5 14.16C14.89 14.75 14.83 15.54 14.33 16.04C13.93 16.44 13.33 16.56 12.8 16.34C12.23 16.11 11.67 15.83 11.12 15.54C10.58 16.06 10.05 16.56 9.5 17H9.48C9.18 17 8.87 17 8.56 17H7.61ZM16 11.75H18.5V13.25H16V15.75H14.5V13.25H12V11.75H14.5V9.25H16V11.75Z" fill="white"/>
    </svg>`;

    // Get text with context, if it's a single word
    function getTextWithContext(selectedText) {
      // Check if the selected text is a single word
      const isOneWord = selectedText.split(/\s+/).length === 1;
      let contextSentence = "";

      if (isOneWord) {
        const selection = window.getSelection();
        if (selection.rangeCount === 0)
          return { word: selectedText, context: "" };

        const range = selection.getRangeAt(0);
        const node = range.startContainer;

        // Look for text node containing the selected word
        if (node.nodeType === Node.TEXT_NODE) {
          let parentNode = node.parentNode;
          let fullText = "";

          // Try to find the containing element with the sentence text
          while (parentNode && parentNode.textContent.length < 500) {
            if (
              parentNode.textContent.includes(selectedText) &&
              (parentNode.tagName === "P" ||
                parentNode.tagName === "DIV" ||
                parentNode.tagName === "SPAN" ||
                parentNode.tagName === "LI" ||
                parentNode.tagName === "TD")
            ) {
              fullText = parentNode.textContent.trim();
              break;
            }
            parentNode = parentNode.parentNode;
          }

          // If we found the containing element
          if (fullText) {
            // Try to extract the sentence containing the selected word
            const sentenceRegex = new RegExp(
              `[^.!?]*\\b${selectedText.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
              )}\\b[^.!?]*[.!?]`,
              "i"
            );
            const sentenceMatch = fullText.match(sentenceRegex);

            if (sentenceMatch) {
              contextSentence = sentenceMatch[0];
              return { word: selectedText, context: contextSentence };
            }

            // If we couldn't find a sentence by regex, return part of the text with the selected word
            if (fullText.length > 200) {
              const wordIndex = fullText.indexOf(selectedText);
              if (wordIndex !== -1) {
                const start = Math.max(0, wordIndex - 100);
                const end = Math.min(
                  fullText.length,
                  wordIndex + selectedText.length + 100
                );
                contextSentence = fullText.substring(start, end);
                return { word: selectedText, context: contextSentence };
              }
            }

            // If the text is not too large, just use it all
            contextSentence = fullText;
            return { word: selectedText, context: contextSentence };
          }
        }
      }

      // If it's not a single word or we couldn't get context, return only the word
      return { word: selectedText, context: "" };
    }

    // Function to get page text
    function getPageText() {
      // Get text from body, excluding scripts, styles and other technical elements
      const bodyEl = document.body;

      // Create a clone of the document body to avoid modifying the original
      const clone = bodyEl.cloneNode(true);

      // Remove scripts, styles, forms, inputs and other unnecessary elements
      const elementsToRemove = clone.querySelectorAll(
        "script, style, noscript, iframe, img, svg, form, input, button, #chatgpt-buttons, #chatgpt-result-container"
      );
      elementsToRemove.forEach((el) => el.remove());

      // Get text from all visible elements
      let text = clone.textContent || clone.innerText || "";

      // Clean up text from extra spaces and line breaks
      text = text.replace(/\s+/g, " ").trim();

      // Limit text length (for example, take the first 2000 characters)
      const maxLength = 2000;
      if (text.length > maxLength) {
        text = text.substring(0, maxLength) + "...";
      }

      return text;
    }

    // Function to handle Explain request
    async function handleExplain(e) {
      e.preventDefault();
      e.stopPropagation();

      // Animation on click
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);

      // Get text with context if it's a single word
      const { word, context } = getTextWithContext(selectedText);

      let promptText = "";
      if (useWideContext) {
        // If wide context mode is enabled, add entire page text
        const pageText = getPageText();
        promptText = `Explain "${selectedText}" in the context of this page: "${pageText}"`;
      } else if (context && word.split(/\s+/).length === 1) {
        // If it's one word and there's context
        promptText = `Explain "${word}" in this context: "${context}"`;
      } else {
        // If it's a phrase or there's no context
        promptText = `Explain this: ${selectedText}`;
      }

      if (useApi) {
        // API mode
        // Create chat interface immediately and initialize it with the user request
        // Initialize chat with only the user message
        chatHistory = [{ role: "user", content: selectedText }];

        // Show chat with user request and loading indicator
        showResultOnPage("Explanation", "");

        // Get the chat container
        const chatContent = document.querySelector(".result-content");

        // Show loading indicator
        const loadingMessage = document.createElement("div");
        loadingMessage.className = "chat-message assistant-message";
        loadingMessage.innerHTML =
          '<div class="loading-spinner" style="margin: 10px;"></div>';
        chatContent.appendChild(loadingMessage);

        // Request explanation from API
        try {
          const result = await fetchChatOpenAI([
            { role: "user", content: promptText },
          ]);

          // Remove loading indicator
          loadingMessage.remove();

          // Add response to history
          chatHistory.push({ role: "assistant", content: result });

          // Update display
          displayChatMessages(chatContent);

          // Scroll chat down
          chatContent.scrollTop = chatContent.scrollHeight;
        } catch (error) {
          // Remove loading indicator
          loadingMessage.remove();

          // Show error
          chatHistory.push({
            role: "assistant",
            content: `Error: ${error.message}`,
          });
          displayChatMessages(chatContent);
          chatContent.scrollTop = chatContent.scrollHeight;
        }
      } else {
        // ChatGPT mode
        const encodedText = encodeURIComponent(promptText);
        window.open("https://chat.openai.com/?q=" + encodedText, "_blank");
        buttonsDiv.remove();
      }
    }

    // Function to handle Translate request
    async function handleTranslate(e) {
      e.preventDefault();
      e.stopPropagation();

      // Animation on click
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);

      // Get text with context if it's a single word
      const { word, context } = getTextWithContext(selectedText);

      let promptText = "";
      if (useWideContext) {
        // If wide context mode is enabled, add entire page text
        const pageText = getPageText();
        promptText = `Translate "${selectedText}" in the context of this page: "${pageText}"`;
      } else if (context && word.split(/\s+/).length === 1) {
        // If it's one word and there's context
        promptText = `Translate "${word}" in this context: "${context}" and provide other meanings of this word (numbered, with each meaning in a separate paragraph)`;
      } else {
        // If it's a phrase or there's no context
        promptText = `Translate: "${selectedText}"`;
      }

      if (useApi) {
        // API mode
        // Create chat interface immediately and initialize it with the user request
        // Initialize chat with only the user message
        chatHistory = [{ role: "user", content: selectedText }];

        // Show chat with user request and loading indicator
        showResultOnPage("Translation", "");

        // Get the chat container
        const chatContent = document.querySelector(".result-content");

        // Show loading indicator
        const loadingMessage = document.createElement("div");
        loadingMessage.className = "chat-message assistant-message";
        loadingMessage.innerHTML =
          '<div class="loading-spinner" style="margin: 10px;"></div>';
        chatContent.appendChild(loadingMessage);

        // Request translation from API
        try {
          const result = await fetchChatOpenAI([
            { role: "user", content: promptText },
          ]);

          // Remove loading indicator
          loadingMessage.remove();

          // Add response to history
          chatHistory.push({ role: "assistant", content: result });

          // Update display
          displayChatMessages(chatContent);

          // Scroll chat down
          chatContent.scrollTop = chatContent.scrollHeight;
        } catch (error) {
          // Remove loading indicator
          loadingMessage.remove();

          // Show error
          chatHistory.push({
            role: "assistant",
            content: `Error: ${error.message}`,
          });
          displayChatMessages(chatContent);
          chatContent.scrollTop = chatContent.scrollHeight;
        }
      } else {
        // ChatGPT mode
        const encodedText = encodeURIComponent(promptText);
        window.open("https://chat.openai.com/?q=" + encodedText, "_blank");
        buttonsDiv.remove();
      }
    }

    // Function to create mode switch
    function createModeSwitch() {
      const switchContainer = document.createElement("div");
      switchContainer.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0 0 0;
        padding: 0 12px 8px 12px;
        background: transparent;
        border-radius: 24px;
        width: 100%;
      `;

      const switchLabel = document.createElement("label");
      switchLabel.className = "switch";
      switchLabel.style.cssText = `
        position: relative;
        display: inline-block;
        width: 46px;
        height: 24px;
      `;

      const switchInput = document.createElement("input");
      switchInput.type = "checkbox";
      switchInput.checked = useApi;
      switchInput.style.cssText = `
        opacity: 0;
        width: 0;
        height: 0;
      `;

      const switchSlider = document.createElement("span");
      switchSlider.className = "slider";
      switchSlider.style.cssText = `
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
      `;

      // Create round part of the switch
      const switchKnob = document.createElement("span");
      switchKnob.className = "knob";
      switchKnob.style.cssText = `
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
      `;

      // Set initial state of the switch
      switchSlider.style.backgroundColor = "#202123";
      if (useApi) {
        switchKnob.style.transform = "translateX(22px)";
      } else {
        switchKnob.style.transform = "translateX(0)";
      }

      // Text labels for modes
      const apiLabel = document.createElement("span");
      apiLabel.textContent = "API";
      apiLabel.style.cssText = `
        margin-left: 10px;
        font-size: 14px;
        font-weight: ${useApi ? "600" : "400"};
        color: ${useApi ? "#202123" : "#666"};
        cursor: pointer;
        transition: all 0.2s ease;
      `;

      const chatgptLabel = document.createElement("span");
      chatgptLabel.textContent = "ChatGPT";
      chatgptLabel.style.cssText = `
        margin-right: 10px;
        font-size: 14px;
        font-weight: ${!useApi ? "600" : "400"};
        color: ${!useApi ? "#202123" : "#666"};
        cursor: pointer;
        transition: all 0.2s ease;
      `;

      // Click handler for the switch
      switchInput.addEventListener("change", function () {
        useApi = this.checked;

        // Save selected mode
        chrome.storage.local.set({ useApi: useApi });

        // Check that we have an API key when switching to API mode
        if (useApi && !apiKey) {
          // Request API key if there isn't one
          requestApiKey()
            .then((key) => {
              apiKey = key;
            })
            .catch((err) => {
              console.error("Failed to get API key:", err);
              // If user canceled key input, return the switch to ChatGPT position
              useApi = false;
              this.checked = false;
              chrome.storage.local.set({ useApi: false });
            });
        }

        // Update styles based on mode
        if (useApi) {
          switchSlider.style.backgroundColor = "#202123";
          switchKnob.style.transform = "translateX(22px)";
          apiLabel.style.fontWeight = "600";
          apiLabel.style.color = "#202123";
          chatgptLabel.style.fontWeight = "400";
          chatgptLabel.style.color = "#666";
        } else {
          switchSlider.style.backgroundColor = "#202123";
          switchKnob.style.transform = "translateX(0)";
          apiLabel.style.fontWeight = "400";
          apiLabel.style.color = "#666";
          chatgptLabel.style.fontWeight = "600";
          chatgptLabel.style.color = "#202123";
        }
      });

      // Click handlers for text labels
      apiLabel.addEventListener("click", function () {
        switchInput.checked = true;
        switchInput.dispatchEvent(new Event("change"));
      });

      chatgptLabel.addEventListener("click", function () {
        switchInput.checked = false;
        switchInput.dispatchEvent(new Event("change"));
      });

      // Assemble the switch
      switchSlider.appendChild(switchKnob);
      switchLabel.appendChild(switchInput);
      switchLabel.appendChild(switchSlider);

      switchContainer.appendChild(chatgptLabel);
      switchContainer.appendChild(switchLabel);
      switchContainer.appendChild(apiLabel);

      return switchContainer;
    }

    // Function to create wide context switch
    function createWideContextSwitch() {
      const checkboxContainer = document.createElement("div");
      checkboxContainer.style.cssText = `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 10px 0 0 0;
        padding: 0 12px 4px 12px;
        background: transparent;
        border-radius: 24px;
        width: 100%;
      `;

      const labelWrapper = document.createElement("label");
      labelWrapper.style.cssText = `
        display: flex;
        align-items: center;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = useWideContext;
      checkbox.style.cssText = `
        appearance: none;
        -webkit-appearance: none;
        margin: 0;
        margin-right: 8px;
        width: 24px;
        height: 24px;
        border: 2px solid #999;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        background-color: ${useWideContext ? "#202123" : "white"};
        transition: all 0.2s ease;
      `;

      // Add checkmark symbol for active state
      if (useWideContext) {
        checkbox.style.setProperty(
          "background-image",
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")"
        );
        checkbox.style.setProperty("background-position", "center");
        checkbox.style.setProperty("background-size", "18px");
        checkbox.style.borderColor = "#202123";
      }

      const label = document.createElement("span");
      label.textContent = "Entire Page Context";
      label.style.cssText = `
        font-size: 14px;
        font-weight: ${useWideContext ? "600" : "400"};
        color: ${useWideContext ? "#202123" : "#666"};
        transition: all 0.2s ease;
      `;

      // Click handler for checkbox
      checkbox.addEventListener("change", function () {
        useWideContext = this.checked;

        // Save selected mode
        chrome.storage.local.set({ useWideContext: useWideContext });

        // Update styles
        if (useWideContext) {
          checkbox.style.backgroundColor = "#202123";
          checkbox.style.borderColor = "#202123";
          checkbox.style.setProperty(
            "background-image",
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")"
          );
          checkbox.style.setProperty("background-position", "center");
          checkbox.style.setProperty("background-size", "18px");
          label.style.fontWeight = "600";
          label.style.color = "#202123";
        } else {
          checkbox.style.backgroundColor = "white";
          checkbox.style.borderColor = "#999";
          checkbox.style.backgroundImage = "none";
          label.style.fontWeight = "400";
          label.style.color = "#666";
        }
      });

      // Assemble components
      labelWrapper.appendChild(checkbox);
      labelWrapper.appendChild(label);
      checkboxContainer.appendChild(labelWrapper);

      return checkboxContainer;
    }

    // Function to create main interface
    function createExtensionInterface() {
      // Explain button
      const explainButton = createStyledButton(
        "Explain",
        explainIcon,
        "linear-gradient(135deg, #10a37f 0%, #0A8A6B 100%)",
        handleExplain
      );

      // Translate button
      const translateButton = createStyledButton(
        "Translate",
        translateIcon,
        "linear-gradient(135deg, #444BEA 0%, #3339cc 100%)",
        handleTranslate
      );

      // Create mode switch for API/ChatGPT
      const modeSwitch = createModeSwitch();

      // Create wide context switch
      const contextSwitch = createWideContextSwitch();

      // Add buttons to container, then switches
      buttonsDiv.appendChild(explainButton);
      buttonsDiv.appendChild(translateButton);
      buttonsDiv.appendChild(contextSwitch);
      buttonsDiv.appendChild(modeSwitch);

      // Position container next to selected text
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Set position
      buttonsDiv.style.top = window.scrollY + rect.bottom + 10 + "px";
      buttonsDiv.style.left = window.scrollX + rect.left + "px";

      // Add container to DOM
      document.body.appendChild(buttonsDiv);

      // Close buttons when clicking elsewhere
      document.addEventListener("mousedown", function closeButtonsHandler(e) {
        if (
          !buttonsDiv.contains(e.target) &&
          !e.target.closest("#chatgpt-result-container")
        ) {
          buttonsDiv.remove();
          document.removeEventListener("mousedown", closeButtonsHandler);
        }
      });
    }
  }
});
