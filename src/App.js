import React, { Component } from "react";
import './estilo.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['A vida trará coisas boas se tiver paciência', 'Não compense na ira o que lhe falta na razão.' , 'A juventude não é uma época da vida, é um estado de espírito.' , 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.' , 'São os nossos amigos que nos ensinam as mais valiosas lições' , 'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.' , 'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.' , 'Todas as coisas são difíceis antes de se tornarem fáceis.' , 'Você é do tamanho do seu sonho.' , 'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.' , 'Deixe de lado as preocupações e seja feliz.' , 'A inspiração vem dos outros. A motivação vem de dentro de nós.'];
  }

  quebraBiscoito() {
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
      this.setState(state)
  }
  
  render() {
    return (
      <div className="container">
          <img src={require('./assets/biscoito.png')} className="biscoito"></img>
          <Botao nome="Abrir Biscoito" acaoBtn= {this.quebraBiscoito}></Botao>
          <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.acaoBtn}> {this.props.nome} </button>
      </div>
    )
  }
}

export default App;