import React from "react";

const historias = {
  Carmen: `Carmen Quilla, era una brillante ingeniera y apasionada por la ciencia. Provenía de una familia acomodada, tenía amigos, recursos y un futuro asegurado. Su hobby era el aikido, disciplina que practicaba con dedicación, disfrutando de la precisión, la fuerza y el control que le daba. Caminaba por La Paz con libertad y curiosidad, explorando sus callejones, techos y mercados, imaginando cada esquina como un desafío.

Cuando el mundo cambió, Carmen se vio involucrada en el Proyecto Kantuta, encargada de acompañar a los Chukuta Pico Verde en expediciones al Viejo Mundo, investigando las enredaderas escarlatas que brotaban del suelo. El 20 de octubre, tres años después del desastre, una traición acabó con su escuadrón: un grupo misterioso los atacó sin piedad. Carmen logró escapar, pero quedó atrapada para siempre en el Viejo Mundo.

Al borde de la muerte, se desmayó y tuvo un encuentro con una sombra luminosa, indefinida entre hombre y mujer, que le ofreció sobrevivir. Carmen despertó transformada: sus habilidades se multiplicaron, su fuerza y velocidad superaban lo humano. Vagó por la ciudad destruida, sobreviviendo entre ruinas y monstruos, hasta encontrar un enorme hueco en un cerro donde ella fundó la Casa de la Luz, un refugio para los pocos supervivientes que quedaban.

Doce años después, se había convertido en la Jefa, respetada y querida. Su ciudad, erigida entre rocas y grietas, se convirtió en un santuario y un símbolo de resistencia. Pero ella no olvidaba la traición, la muerte de su escuadrón y los secretos que ocultaba el Faro Kantuta. Mientras el Ajayu Oscuro seguía latiendo bajo el Viejo Mundo, Carmen sabía que la verdadera batalla apenas comenzaba y que su destino estaba ligado al de la ciudad que un día había amado.`,

  Santiago: `Santiago no tenía padres. Desde pequeño, su vida estuvo marcada por la diferencia, a los seis años ya percibía cosas que otros niños no podían, escuchaba voces y sonidos que nadie más escuchaba, y sentía una fuerza que superaba a la de alguien que le doblara la edad. A pesar de su rareza, disfrutaba profundamente de la ciudad que lo rodeaba: las fiestas que iluminaban La Paz, los bailes, los colores y los aromas de los platos tradicionales que llenaban los mercados. Era un niño curioso, extraño, pero profundamente vivo, absorbiendo cada detalle de la ciudad como si se grabara en su memoria.

El día del Juicio Final, Santiago fue uno de los pocos que logró llegar al Faro Kantuta. Allí, entre ruinas y criaturas, vio la muerte y la desesperación. Fue recibido y acogido por una abuelita de recursos modestos, quien lo protegió y cuidó durante los primeros años dentro del Faro. Su figura se convirtió en un ancla de humanidad en medio del caos, enseñándole paciencia, astucia y esperanza, y permaneció a su lado durante los doce años siguientes.

Con el tiempo, Santiago decidió que su vida tendría un propósito: proteger lo que quedaba de la humanidad. Se enlistó en los Chukuta Pico Verde, aprendiendo a dominar el Viejo Mundo, enfrentando a los Khari Khari, y ganándose respeto por su fuerza, rapidez y determinación. Cada expedición hacia la superficie era un riesgo, pero Santiago demostraba que no solo era un guerrero, sino también un estratega nato.

Doce años después, estaba a punto de ser nombrado capitán, liderando misiones cruciales para traer suministros del Viejo Mundo. Pero no todo sería sencillo, las criaturas se habían vuelto más astutas, las traiciones acechaban entre los guardianes y las sombras parecían susurrar secretos que nadie debía descubrir.

Santiago comprendió que la verdadera batalla no dependía solo de la fuerza física: astucia, estrategia y lealtad serían tan letales como cualquier Khari Khari. Cada paso lo acercaba a su destino, a su propio juicio, y a un momento en que su camino inevitablemente se cruzaría con otra fuerza capaz de cambiarlo todo.`,
};

const HistoriaPersonaje = ({ personaje }) => {
  if (!personaje) return null;

  const key = personaje === "Carmen" || personaje === "Carmen Quilla" ? "Carmen" : "Santiago";

  return (
    <div className="mt-8 max-w-5xl mx-auto p-6 bg-gray-900/70 rounded-xl border border-gray-700 shadow-lg">
      <h3 className="text-2xl font-bold mb-3">Historia — {key === "Carmen" ? "Carmen Quilla" : "Santiago"}</h3>
      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{historias[key]}</p>
    </div>
  );
};

export default HistoriaPersonaje;
