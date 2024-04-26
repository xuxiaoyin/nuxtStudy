export default  defineNuxtPlugin((nuxtApp: _NuxtApp) => {
    return {
        provide: {
            hello: (msg: string) => console.log(`Hello ${msg}`)
        }
    };
})
