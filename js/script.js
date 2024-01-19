const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            message: 'Hello Vue!',
            image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F854%2F555%2Fpng-transparent-vue-js-hd-logo-thumbnail.png&tbnid=DpF-zvhu8YN4sM&vet=12ahUKEwjtvLvgt-mDAxUCi_0HHQFqCZUQMygFegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dvue%2BJs&docid=nem61MmGUA-_tM&w=360&h=270&q=logo%20vuejs&ved=2ahUKEwjtvLvgt-mDAxUCi_0HHQFqCZUQMygFegQIARBV'
        }
    }
})

app.mount('#root')