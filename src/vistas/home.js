
export default () => {
  const dashboard = `
  <header  class="header"> <!--cabecera-->
  <div class="wrapper">
   
        <div class="logo-navegation text-uppercase logo-content">
        <img src="../src/img/pinterest.svg" alt="logo" class="logo" width="70" height="70">
        </div>
      
       <form class="inputWithIcon">
       
          <input id="buscar" class="form-input" type="search" placeholder="Buscar">
         
        </form>
         <div class="navbar">
          <nav class="navegation  text-uppercase">
          <i class="fa fa-search"></i>
           <a href="">Inicio</a>
           <a href="">Siguiendo</a>
           <a href="">Usuario</a>
           <a href=""><img class="icons" src="/src/img/chat.svg" alt="commentIcon"></a>
           <a href=""><img class="icons" src="/src/img/bell.svg" alt="bellIcon"></a>
           <a href=""><img class="icons" src="/src/img/more.svg" alt="moreIcon"></a>
          </nav>
          <div>
        </div>
</header>
<section>
    <p>La intrépida abeja vaga de rama en rama,
          Con su hirsuto abrigo y ligeras alas,
          Ahora sobre el pétalo del lirio,
          Ahora balanceándose en un jacinto,
          En torno a él:
          Estaba cerca el amor; y fue aquí, supongo,
          Donde realicé mi voto.
          
          Juré que dos almas deberían ser una,
          Mientras las gaviotas amen el mar,
          Mientras los girasoles amen el sol.
          Será, dije, nuestra eternidad,
          Tuya y mía.
          Querida amiga, aquellos tiempos se han ido,
          La red del Amor se ha cerrado.
          
          Mira hacia arriba, donde los álamos
          Danzan y danzan en el aire del estío,
          Aquí en el valle, la brisa nunca
          Agita los frutos, pero allí
          Los grandes vientos soplan,
          Y desde el susurro místico del mar
          Arriban las olas que acarician la costa.
          
          Mira hacia arriba, donde gritan las níveas gaviotas,
          ¿Qué pueden contemplar qué nosotros no vemos?
          ¿Acaso una estrella? ¿O quizás la lámpara que ruge
          En algún lejano y perdido buque?
          ¡Ah, puede ser!
          ¡Hemos vivido en una tierra de sueños!
          Y que triste parece.
          
          Mi Vida, no queda nada por decir,
          Salvo esto: el amor nunca se pierde,
          El filo del invierno desgarra el pecho de mayo,
          Y sus rosas carmesí brotan quebrando el hielo.
          Los navíos de la tempestad
          En alguna bahía encontrarán su muelle,
          Así como nosotros deberíamos hacerlo.
          
          Y no queda nada por hacer
          Salvo besarnos una vez más, y partir.
          No, no hay nada que debamos lamentar,
          Yo tengo mi belleza, y tu el arte.
          No, que nunca comience,
          Un mundo no es suficiente
          Para dos como tú y yo.</p>
</section>`;

  const divElement = document.createElement('section');
  divElement.className = "body";
  divElement.innerHTML = dashboard;
  return divElement;
};

{/* <input type="text"><i class="fa fa-search btn-search" aria-hidden="true"></i> </i></input>*/}
