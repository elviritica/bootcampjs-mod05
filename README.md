# Juego de las 7 y media (Lab. Condicionales)


### Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).


## Instrucciones para Ejecutar el Juego
1. Abre el juego utilizando el sandbox de TypeScript o JS.
2. Haz clic en el botón "Pedir Carta" para comenzar a jugar.
3. Decide si tomar más cartas o plantarte según las reglas explicadas anteriormente.
4. Una vez que decidas plantarte o pierdas, se mostrará el resultado y podrás empezar una nueva partida.

## Funcionalidades del Juego
1. **Mostrar Puntuación:** El juego inicia con una puntuación de 0. La puntuación se muestra en un div y se actualiza después de cada carta tomada.

2. **Pedir Carta:** Haz clic en el botón "Pedir Carta" para obtener una carta aleatoria y decidir si tomar más o plantarte.

3. **Mostrar Carta:** Cada vez que pides una carta, se muestra la imagen de la carta obtenida en un elemento img.

4. **Sumar Puntuación:** La puntuación se actualiza según el valor de las cartas tomadas.

4. **Game Over:** Si la puntuación supera 7.5, se muestra un mensaje de "Game Over" y se deshabilita la opción de pedir más cartas.

6. **Me Planto:** Puedes decidir plantarte en cualquier momento. Se mostrará un mensaje según tu puntuación al plantarte.

7. **Nueva Partida:** Después de terminar una partida, puedes iniciar una nueva haciendo clic en el botón correspondiente.
