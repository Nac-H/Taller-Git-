//1. Contenga un arreglo con al menos 5 frases motivacionales o chistes.
//2. Al presionar un botón en la página, muestre una frase aleatoria en pantalla.


export const frases = [
    'Rodéate de personas que crean en tus sueños, animen tus ideas, apoyen tus ambiciones, y saquen lo mejor de ti',
    'Nunca eres demasiado viejo para marcarte otra meta o tener un nuevo sueño',
    'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito',
    'No cuentes los días, haz que los días cuenten',
    'La única manera de hacer un gran trabajo es amar lo que haces',
    '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter',
];

const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSeleccionada = frases[indiceAleatorio];
    document.getElementById('frase').textContent = fraseSeleccionada;
});
