
# Chat UI Template  

A simple and customizable chat UI built with React, designed as a template for chatbot projects.  

## 🚀 Features  

- Clean and modern chat interface  
- Easily customizable for different chatbot projects  
- Built with React and styled with TailwindCSS  
- Open-source and ready for integration  

## 📦 Installation  

Clone the repository:  
```bash
git clone https://github.com/your-username/chat-ui-template.git
cd chat-ui-template
```

Install dependencies:  
```bash
npm install
```

## 💻 Usage  

Start the client:
```bash
cd client;
npm start;
```

Start the development server:  
```bash
npm run dev
```

To customize the UI, modify the `src/components` folder.  

## 🔧 Configuration  

- Update `src/config.js` to modify chatbot behavior and UI settings.  
- Style customization via TailwindCSS.  

## 📜 License  

This project is open-source under the [MIT License](LICENSE).  

---

Would you like me to add anything else, like a demo screenshot or deployment instructions? 🚀

### How to send a petition to the server

```javascript
$messages = @(
	@{ role = "system"; content = "You are a helpful assistant" },
	@{ role = "user"; content = "Hello, how are you?" }
)

$messages = @(
    @{ role = "system"; content = "You are a helpful assistant." },
    @{ role = "user"; content = "Hello, how are you?" }
)

$body = @{ messages = $messages } | ConvertTo-Json -Depth 10

$response = Invoke-RestMethod -Uri "http://localhost:3001/chat" `
                              -Method Post `
                              -Headers @{ "Content-Type" = "application/json" } `
                             -Body $body

```