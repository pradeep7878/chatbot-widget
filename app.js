const toggler = document.querySelector('.chatbot-toggler');
const chatBotIcon = document.querySelector('.chatbot-close-icon');
const body = document.querySelector('.body')
const chatBox = document.getElementById('chatbox');
const botWelcomeMessage = document.getElementById("bot-welcome-message")

const bodyPanel = document.querySelector('.body-panel');
const chatContainer = document.getElementById('chat-container');

const bottomChat = document.getElementById('bottom-chat');

const userInputText = document.getElementById('userInputText');

const timeSpan = document.querySelector('.incoming-timeFontSize');
// timeSpan.innerHTML = formatAMPM(new Date);



const handleToggler = async () => {
    // (async () => {
    //     await generateResponse("init")
    // })()
    body.classList.toggle('show-chatbot')
    if (body.className.includes("show-chatbot")) {
        (async () => {
            await welcomeMessage()
            
        })()
    }else{
        chatBox.innerHTML = ""
    }

}

toggler.addEventListener("click", handleToggler)
// chatBotIcon.addEventListener("click", () => {
//     body.classList.toggle('show-chatbot')
// })

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

const welcomeMessage = async () => {

        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                apiData = "Welcome message"

                const incomingMsgBox = document.createElement('div');
                incomingMsgBox.className = 'd-flex incoming-msg';
                const essenceImg = document.createElement('img');
                essenceImg.className = "essence-img";
                essenceImg.setAttribute('src', 'https://cdn.adraproductstudio.com/essence-logo.png');
                const incomingMsgText = document.createElement('p');
                incomingMsgText.className = 'incoming-msg-text';
                // incomingMsgText.innerHTML = "<img class='loader-image' width='40' src='https://cdn.adraproductstudio.com/loader.gif' >";
                incomingMsgText.innerHTML = `${apiData}`;
                const incomingMsgTime = document.createElement('i');
                incomingMsgTime.className = "outgoing-msg-time";
                incomingMsgTime.innerText = formatAMPM(new Date);
                incomingMsgText.append(incomingMsgTime)
                incomingMsgBox.append(essenceImg, incomingMsgText);

                chatBox.append(incomingMsgBox);


            } catch (err) {
                console.log(err)
            }
        }

        (async () => {
            await getData()
            console.log("apiData", apiData)
        })()

    
}


const generateResponse = async (value) => {
    var apiData;


        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                apiData = data[0].email
                const incomingMsgBox = document.createElement('div');
                incomingMsgBox.className = 'd-flex incoming-msg';
                const essenceImg = document.createElement('img');
                essenceImg.className = "essence-img";
                essenceImg.setAttribute('src', 'https://cdn.adraproductstudio.com/essence-logo.png');
                const incomingMsgText = document.createElement('p');
                incomingMsgText.className = 'incoming-msg-text';
                // incomingMsgText.innerHTML = "<img class='loader-image' width='40' src='https://cdn.adraproductstudio.com/loader.gif' >";
                incomingMsgText.innerHTML = `${apiData}`;
                const incomingMsgTime = document.createElement('i');
                incomingMsgTime.className = "outgoing-msg-time";
                incomingMsgTime.innerText = formatAMPM(new Date);
                incomingMsgText.append(incomingMsgTime)
                incomingMsgBox.append(essenceImg, incomingMsgText);
                const bottomChat1 = document.createElement('div');

                chatBox.append(incomingMsgBox,bottomChat1);
            
                bottomChat1.scrollIntoView({ behavior: "smooth" });
               

            } catch (err) {
                console.log(err)
            }
        }

        (async () => {
            await getData()
          
        })()
       

       





}

function handleSendClick() {



    const outgoingMsgBox = document.createElement('div');
    outgoingMsgBox.className = "d-flex outgoing-msg";
    const outgoingMsgText = document.createElement('p');
    const personImg = document.createElement('img');
    outgoingMsgText.className = 'outgoing-msg-text';
    outgoingMsgText.innerText = userInputText.value;
    const outgoingMsgTime = document.createElement('i');
    outgoingMsgTime.className = "outgoing-msg-time";
    outgoingMsgTime.innerText = formatAMPM(new Date);
    outgoingMsgText.append(outgoingMsgTime)
    personImg.id = "person-img";
    personImg.className = "person-img";
    personImg.setAttribute('src', 'https://cdn.adraproductstudio.com/person1.png')

    outgoingMsgBox.append(outgoingMsgText, personImg);
    console.log(outgoingMsgText)
    userInputText.value = "";
    const bottomChat1 = document.createElement('div');
    chatBox.append(outgoingMsgBox,bottomChat1)

    bottomChat1.scrollIntoView({ behavior: "smooth" });



    setTimeout(() => {
        generateResponse();
        bottomChat1.scrollIntoView({ behavior: "smooth" });
    

    }, 1000)

}

userInputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (userInputText.value.trim() === "") {
            e.preventDefault(); 
            return;
        } else {
            e.preventDefault(); 

            const outgoingMsgBox = document.createElement('div');
            outgoingMsgBox.className = "d-flex outgoing-msg";
            const outgoingMsgText = document.createElement('p');
            const personImg = document.createElement('img');
            outgoingMsgText.className = 'outgoing-msg-text';
            outgoingMsgText.innerText = userInputText.value;
            const outgoingMsgTime = document.createElement('i');
            outgoingMsgTime.className = "outgoing-msg-time";
            outgoingMsgTime.innerText = formatAMPM(new Date());
            outgoingMsgText.append(outgoingMsgTime);
            personImg.id = "person-img";
            personImg.className = "person-img";
            personImg.setAttribute('src', 'https://cdn.adraproductstudio.com/person1.png');

            outgoingMsgBox.append(outgoingMsgText, personImg);
            userInputText.value = ""; // Clear input after sending the message
            const bottomChat1 = document.createElement('div');
            chatBox.append(outgoingMsgBox, bottomChat1);

            bottomChat1.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                generateResponse();
                bottomChat1.scrollIntoView({ behavior: "smooth" });
            }, 1000);
        }
    }
});

