
# Chat UI Template  

A simple and customizable chat UI built with React, designed as a 
template for chatbot projects.  

## 📸 Preview  
![Chat Example](./docs/imgs/print_example.jpg)

## 🚀 Features  

- Ready-to-use chat interface  
- Clean and simple interface
- Mock backend included for easy testing  
- Easily customizable for different chatbot projects  
- Built with React and styled with CSS 
- Open-source and ready for integration  

## 📦 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone git@github.com:franciscosanchezoliver/chatai.git
cd chatai
```

### 2️⃣ Start the Mock Backend  
```bash
cd server
npm install
node server.js
```

This will start a simple mock server that provides example responses.  

### 3️⃣ Start the Chat UI  
In a separate terminal:  
```bash
cd client
npm install
npm start
```

## 🔧 Customization  

- Modify `server/server.js` to change mock responses.  
- Point the frontend to a real API by updating the request logic in `client/src/api.js`.  
- Customize UI styles in `client/src/components`.  



### How to test the Mock Backend


#### Powershell
```powershell
$messages =@{ role = "user"; "userMessage" = "Hello, what do you do?" }
$body = $messages | ConvertTo-Json 
$response = Invoke-RestMethod -Uri "http://localhost:3001/chat" `
                              -Method Post `
                              -Headers @{ "Content-Type" = "application/json" } `
                             -Body $body

Write-Output($response)
```

#### bash
```bash
echo '{"userMessage": "Hello, what do you do?"}' > data.json

curl -X POST http://localhost:3001/chat \
     -H "Content-Type: application/json" \
     --data @data.json
```


## 📜 License  

This project is open-source under the [MIT License](LICENSE).  

---