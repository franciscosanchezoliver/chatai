
export const sendMessageToBackend = async (message) => {

    let userMessage = `${JSON.stringify(message)}"`
    let userRole = "user"

    const requestBody = {
      "role": userRole,
      "userMessage": userMessage  
    };

    const response = await fetch(
      "http://localhost:3001/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.statusText}`);
    }

    let data = await response.json();
    data = JSON.parse(data);

    const responseRole = data.role;
    const responseContent = data.content;
    console.log(`Data Received form backend: 
        - role: [${responseRole}] 
        - message: [${responseContent}]
    `);

    return data;
}