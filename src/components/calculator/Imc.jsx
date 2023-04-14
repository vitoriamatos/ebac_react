import { useState } from "react"

import styles from './Imc.module.css';
import styles2 from './Imc.module.css';

const Calculo_imc = () => {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const [message, setMessage] = useState("");
    const [imcMessage, setImcMessage] = useState("");

    function calcule_imc(event) {
        event.preventDefault();

        let weight = parseFloat(event.target.weight.value);
        console.log(weight);


        let height = parseFloat(event.target.height.value);

        console.log(height);

        console.log(height);
        const hg = height;
        const imc = weight / (hg * hg);

        if (height === "" && weight === "") {
            alert("Por favor preencha os dois campos");
        } else if (!hg) {
            alert("Por favor preencha o dois campos");
        } else if (imc < 16.9) {
            setMessage(`Você está muito abaixo do peso!`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 17 && imc < 18.4) {
            setMessage(`Você está abaixo do peso!`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 18.5 && imc < 24.9) {
            setMessage(`Você está com o peso normal`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 25 && imc < 29.9) {
            setMessage(`Você está acima do peso!`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 30 && imc < 34.9) {
            setMessage(`Você está com obesidade Grau I`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 35 && imc < 40) {
            setMessage(`Você está com obesidade Grau II`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 40) {
            setMessage(`Você está com obesidade Grau III`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        }

        setWeight("");
        setHeight("");
    }


    const handleChangeHeight = (event) => {
        let input = event.target.value.replace(/\D/g, '');

        if (input.length == 3) {
            input = input.replace(/(\d{1})(\d)/, "$1.$2");
        }
        setHeight(input);
    };

    const handleChange = (event) => {
        let input = event.target.value.replace(/\D/g, '');

        if (input.length <= 4) {
            input = input.replace(/(\d{2})(\d)/, "$1.$2");
        } else if (input.length > 4) {
            input = input.replace(/(\d{3})(\d)/, "$1.$2");
        }
        setWeight(input);
    };

    return (
        <form onSubmit={calcule_imc} className={styles.Imc}>
            <div class="content">
                <input
                    type="text"
                    value={weight}
                    maxLength={6}
                    onChange={handleChange}
                    name="weight"
                    placeholder="Peso em kg"
                />

                <input
                    type="text"
                    value={height}
                    maxLength={4}
                    onChange={handleChangeHeight}
                    name="height"
                    placeholder="Altura em m"
                />

                <button type="submit">CALCULAR</button>

                <div class="result" className={styles2.result}>
                    <h2>Resultado</h2><br></br>
                    {imcMessage}<br></br>
                    {message}
                </div>
            </div>
        </form>

    )
}

export default Calculo_imc