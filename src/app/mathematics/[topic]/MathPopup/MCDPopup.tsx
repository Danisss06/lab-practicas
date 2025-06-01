import React from "react";
import Image from "next/image";

type MCDPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const MCDPopup: React.FC<MCDPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <div className="relative h-[500px] overflow-hidden pt-6">
          <button
            onClick={onClose}
            className="absolute top-0 right-[-4px] hover:opacity-80 z-20"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>

          <div className="h-full overflow-y-auto pr-3 pb-5">
        <h2 className="text-xl font-bold mb-4">
          MCD
        </h2>
        <div className="overflow-y-auto pr-2">
          <p className="mb-4">
            Los algoritmos más complicados en las operaciones con fracciones, son
            las referentes a la suma y/o resta.
          </p>
          <p className="mb-4">
            El primer paso para la resolución de problemas de suma y/o resta es el
            cálculo del mínimo común denominador (
            <span className="font-bold">mcd</span>).
          </p>
          <p className="mb-4">
            El algoritmo que se utiliza es el siguiente:
          </p>

          <p className="mb-2">
            1. Se escriben los denominadores en el renglón, separándolos uno o dos
            espacios entre sí, y se traza una línea vertical a la derecha. Por
            ejemplo:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/2_3_linea.gif" // Placeholder for example image with denominators
              alt="Ejemplo de denominadores"
              width={250}
              height={40}
            />
          </div>

          <p className="mb-2">
            2. A la derecha de la línea se escriben los divisores de los
            denominadores, y a la izquierda de ella, y debajo de cada número, se
            escribe el resultado de la división. Si un número no es divisible por
            el divisor, se escribe el número tal como está.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/tabla_1.gif" // Placeholder for division example image
              alt="Ejemplo de división"
              width={300}
              height={80}
            />
          </div>

          <p className="mb-2">
            En el ejemplo que se está considerando 2 y 4 son múltiplos de 2,
            entonces se usa como divisor al 2 (
            <span className="italic">
              se dice que se saca la mitad de los números
            </span>
            ).
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/tabla_2.gif" // Placeholder for half division example
              alt="Sacar mitad de números"
              width={200}
              height={80}
            />
          </div>

          <p className="mb-2">
            Dado que el 3 se puede dividir por 3 (
            <span className="italic">tiene tercera</span>), se escribe al 3 como
            divisor, y los unos se escriben igual.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/tabla_3.gif" // Placeholder for common divisor example image
              alt="Ejemplo de divisor común"
              width={330}
              height={40}
            />
          </div>

          <p className="mb-4">
            El mínimo común denominador es el producto de los números escritos a
            la derecha de la línea vertical{" "}
            <span className="font-bold">2 x 2 x 3 = 12</span>
          </p>
          <p className="mb-2">
            3. El siguiente paso es: trazar la línea horizontal y escribir debajo
            de ella, el mínimo común denominador, y sobre ella se escriben los
            términos de la operación:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/mcd_big.gif" // Placeholder for formula image
              alt="Fórmula de operación"
              width={600}
              height={60}
              className="overflow-x-auto"
            />
          </div>

          <p className="mb-4">
            Siguiendo con el ejemplo, se tiene:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/2_3_1_2.gif" // Placeholder for MCD example image
              alt="Ejemplo de MCD"
              width={80}
              height={60}
            />
          </div>
          <p className="mb-4 font-bold">mcd = 12</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/12_3.gif" // Placeholder for MCD example image
              alt="Ejemplo de MCD"
              width={200}
              height={60}
            />
          </div>
          <p className="mb-4 ">debido a</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/12_3_4.gif" // Placeholder for MCD example image
              alt="Ejemplo de MCD"
              width={150}
              height={60}
            />
          </div>
          <p className="mb-4 ">
            por lo que la suma de fracciones se expresaría de la siguiente manera:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/23_12.gif" // Placeholder for MCD example image
              alt="Ejemplo de MCD"
              width={250}
              height={60}
            />
          </div>

          <p className="mb-4">
            Como el numerador 23 es mayor que 12, la{" "}
            <span className="font-bold">fracción es impropia</span> y puede
            convertirse en fracción mixta haciendo la división:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/12_23_1.gif" // Placeholder for mixed fraction conversion image
              alt="Conversión a fracción mixta"
              width={300}
              height={60}
            />
          </div>
          <p className="mb-4">
            Respuesta no simplificada: <span className="font-bold">1 (11/12)</span>
          </p>
          <p className="mb-4">
            Para simplificar la respuesta: se observa que 9 y 12 tienen un <span className="font-bold">divisor en común</span>
            que es el <span className="font-bold">3, (se dice que tiene tercera)</span> por lo que ambos se
            dividen por <span className="font-bold">3 (se saca tercera)</span> para simplificar.
          </p>

          <p className="mb-4">La respuesta es: </p>
          <div className="flex justify-center">
            <Image
              src="/images/1_9_12.gif" // Placeholder for simplified answer image
              alt="Respuesta simplificada"
              width={250}
              height={60}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MCDPopup;
