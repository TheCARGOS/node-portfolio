const state = {
    messages: []
}

const getters = {
    allMessages: state => state.messages = this.setMessages()
}

const mutations = {
    setMessages: (state, messages) => state.messages = messages,
    postMessage: (state) => console.log("this is from mutation")
}

const actions = {
    setMessages: async (ctx) => {
        const messages = await (await fetch("/message")).json()
        if ( messages.length > 0 ) {
            ctx.commit("setMessages", messages)
        }
    },
    postMessage: async (ctx, newMessage) => {
        console.log("postmessage from ACTIONS")
        const response = await fetch("/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })

        const res = await response.json()
        console.log(res)
    }
}

module.exports = {
    state,
    getters,
    mutations,
    actions
}