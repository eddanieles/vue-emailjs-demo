module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-emailjs-demo/' :
        '/',
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    prependData: `
                  @import "@/scss/variables.scss";
                  @import "@/scss/mixins.scss";
                  @import "@/scss/functions.scss";
                `
                }
            }
        }
    }
}