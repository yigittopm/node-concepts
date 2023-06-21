const SUPPORTED_LANGUAGES = ["el", "en","pl","tr"]
const selectedLanguage = process.argv[2]

if(!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
    console.error("The specified language is not supported")
    process.exit(1)
}

const translationModule = `./strings-${selectedLanguage}.js`
import(translationModule)
    .then(strings => {
        console.log(strings.HELLO)
    })
