import React,{ Component } from 'react';
import ReactGA from 'react-ga';
import WordsSpace from './components/WordsSpace/WordsSpace';
import Typearea from './components/Typearea/Typearea';
import Header from './components/Header/Header';
import Word from './components/Word/Word';
import classes from './App.module.css';
import Countdown from './components/Countdown/Countdown';

function initializeReactGA() {
  ReactGA.initialize('UA-147955947-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

initializeReactGA();

class App extends Component {

  state = {
    current_word_index: 0,
    prevtypedStringLength: 0,
    wordValidation: false,
    words_array: { inquisitive: '', bomb: '', spooky: '', childlike: '', uncovered: '', flower: '', omniscient: '', fragile: '', voice: '', flow: '', frighten: '', hop: '', cross: '', morning: '', wreck: '', meat: '', meaty: '', laborer: '', adaptable: '', sour: '', gentle: '', recognise: '', distribution: '', illustrious: '', sassy: '', curtain: '', squeamish: '', plan: '', knot: '', title: '', spade: '', coordinated: '', equable: '', thrill: '', rhetorical: '', fretful: '', rub: '', judicious: '', short: '', theory: '', rabbit: '', quartz: '', suppose: '', suggestion: '', flowery: '', influence: '', four: '', own: '', camp: '', wax: '', question: '', anger: '', cure: '', outgoing: '', voracious: '', existence: '', work: '', girls: '', kill: '', partner: '', command: '', spotty: '', temper: '', wave: '', deliver: '', sheep: '', pump: '', elated: '', agonizing: '', top: '', dust: '', lettuce: '', solid: '', fair: '', wandering: '', stove: '', square: '', meal: '', trick: '', stretch: '', suck: '', kaput: '', cooing: '', change: '', haircut: '', join: '', greet: '', suspend: '', start: '', abortive: '', blushing: '', apparatus: '', tow: '', hum: '', slippery: '', marry: '', famous: '', tumble: '', spoon: '', terrible: '' },
    typingStarted : false,
  }

  resetHandler = () => {
    console.log('Bika sto reset');
    this.setState({typingStarted: false});
    console.log('To state typingStarted einai pleon', this.state.typingStarted);
  }
  
  newInputHandler = (event) => {

    const words_array = this.state.words_array;
    //Get the string from typing area.
    const typedString = event.target.value;

    //In case of backspace in empty area.
    if (typedString === '') {
      return;
    }

    //Examine if the string is a space
    if (typedString[typedString.length - 1] === ' ') {
      this.spaceHandler(typedString, words_array);
    }

    //If it is not a space, examine if it is a backspace
    if (this.state.prevtypedStringLength > typedString.length) {
      this.backspaceHandler(typedString);
    } else {
      //If the input is a character proceed with checking
      this.validCharacterHandler(typedString, words_array);
    }
  }

  backspaceHandler = (typedString) => {
    this.setState({ prevtypedStringLength: typedString.length });
    return;
  }

  spaceHandler = (typedString,words_array) => {
    //Ensures that hitting space wont trigger the highlight to the next word.
    if (typedString === ' ') {
      document.getElementById('typearea').value = "";
      return;
    } else {
      //If space is hit, change word
      let currentWordIndex = this.state.current_word_index;
      const newWordIndex = currentWordIndex++;
      this.setState({ current_word_index: newWordIndex })
      document.getElementById('typearea').value = "";
      this.setState({ current_word_index: this.state.current_word_index + 1 });
      this.setState({ prevtypedStringLength: 0 })
      const words = { ...this.state.words_array };
      const current_word = Object.keys(words_array)[this.state.current_word_index];
      const onlyTypedString = typedString.substring(0, typedString.length - 1);
      if (this.state.wordValidation && onlyTypedString === Object.keys(words_array)[currentWordIndex-1]) {
        words[current_word] = 'hit';
      } else {
        words[current_word] = 'miss'
      }

      this.setState({ words_array: words })
    }

    return;
  }

  validCharacterHandler = (typedString,words_array) => {
    this.setState({ prevtypedStringLength: typedString.length });
    const checkString = typedString.substr(typedString.lastIndexOf(' ') + 1);
    const validation = Object.keys(words_array)[this.state.current_word_index].startsWith(checkString);
    this.setState({ wordValidation: validation });
  }

  render() {

    const words_object = this.state.words_array;
    const words_array = Object.keys(words_object)
    
    const words = words_array.map((word, index) => {
      let typed = null;

      if (words_object[word] === 'hit') {
        typed = 'hit';
      }else if (words_object[word] === 'miss') {
        typed = 'miss';
      }else{
        typed = null;
      }

      return (
        <Word word={word} key={index} wordnr={index} currentIndex={this.state.current_word_index} valid={this.state.wordValidation} typed={typed}/>
      );
    });

    return (
      <div className={classes.App}>
        <Header />
        <div className={classes.inputContainer}>
          <WordsSpace>
            {words}
          </WordsSpace>
          <div className={classes.inputWrapper}>
            <Typearea
              clicked={this.newInputHandler}
            />
            <Countdown typingStarted={this.state.typingStarted}  reset={this.resetHandler}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
