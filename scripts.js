const button = document.getElementById(`button`)
const slecet = document.getElementById(`select`)

const bitcoin = 145153.61

const convertValue = async () => {
    const input = document.getElementById(`input`).value
    const realValue = document.getElementById(`real-value-text`)
    const currencyValuetext = document.getElementById(`currency-value-text`)

    const data = await fetch (' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    const dólar = data.USDBRL.high
    const euro = data.EURBRl.high
    realValue.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'BRL' }
    ).format(input);

    if (select.value === "US$ Dólar Americano") {
        currencyValuetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(input / dólar.toFixed(0));
    }

        if (select.value === "€ Euro") {
            currencyValuetext.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(input / euro.toFixed(0));
        }

        if (select.value === "Bitcoin") {
            currencyValuetext.innerHTML = (input / bitcoin.toFixed(1))
        }

    }
    const changeCurrency = () => {
        const text = document.getElementById(`p-dollar`)
        const imagem = document.getElementById(`bandeira-Eua`)

        if (select.value === `US$ Dólar Americano`) {
            text.innerHTML = `Dólar`
            imagem.src = `./assets/estados-unidos (1) 1.png`
        }

        if (select.value === "Bitcoin") {
            text.innerHTML = `Bitcoin`
            imagem.src = `./assets/bitcoin.png`
        }

        if (select.value === `€ Euro`) {
            text.innerHTML = `Euro`
            imagem.src = `./assets/europa.png`
        }
        convertValue()
    }
    button.addEventListener(`click`, convertValue)
    select.addEventListener(`change`, changeCurrency)
