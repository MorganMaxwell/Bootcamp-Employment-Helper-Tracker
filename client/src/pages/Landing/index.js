import React, { Component } from "react";
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <header id="showcase">
          <h1>
          <span class="first">$</span>
            <span class ="parenth">(</span>
            <span class ="dev">Dev</span>
            <span class ="money">.Money</span>
            <span class ="parenth">)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            officiis ipsum officia numquam expedita ullam.
          </p>
          <a href="/login" class="button">
            Login
          </a>
          ~ OR ~
          <a href="#" class="button">
            Register
          </a>
        </header>
        <section id="section-a">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            minus impedit maxime, quae soluta quis cumque perferendis! Doloribus
            quaerat, placeat iste facere, aspernatur ex cum veritatis
            laudantium, officia, non porro exercitationem incidunt quis dolore?
            Officia ex accusamus expedita optio, voluptatem minus? In maiores
            omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt,
            delectus dolor, id voluptates optio aspernatur aliquam saepe atque
            labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident
            perferendis sapiente in numquam blanditiis, enim, illo error nulla
            incidunt quos quidem ratione repellat ipsa molestias veritatis?
            Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum
            quam culpa fuga deleniti quae.
          </p>
        </section>
        {/* <section id="section-b">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            minus impedit maxime, quae soluta quis cumque perferendis! Doloribus
            quaerat, placeat iste facere, aspernatur ex cum veritatis
            laudantium, officia, non porro exercitationem incidunt quis dolore?
            Officia ex accusamus expedita optio, voluptatem minus? In maiores
            omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt,
            delectus dolor, id voluptates optio aspernatur aliquam saepe atque
            labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident
            perferendis sapiente in numquam blanditiis, enim, illo error nulla
            incidunt quos quidem ratione repellat ipsa molestias veritatis?
            Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum
            quam culpa fuga deleniti quae.
          </p>
        </section>
        <section id="section-c">
          <div class="box-1">
            Track various stats of your cohort!
          </div>
          <div class="box-2">
            Post interview questions and advice to help your fellow Bootcamp alumni! alsdkjf;alskdjf;aoiehjf;laksndv;oaisdf;alksdnf;aksjd
          </div>
          <div class="box-3">
            Enter info on interviews and job offers of your own!
          </div>
        </section>
         */}
      </div>
    );
  }
}

export default Landing;
