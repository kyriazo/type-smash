import React,{ Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import WordsSpace from './components/WordsSpace/WordsSpace';
import Typearea from './components/Typearea/Typearea';
import Header from './components/Header/Header';
import Word from './components/Word/Word';

function initializeReactGA() {
  ReactGA.initialize('UA-147955947-1');
  ReactGA.pageview('/homepage');
}

initializeReactGA();

class App extends Component {

  state = {
    current_word_index: 0,
    prevtypedStringLength: 0,
    wordValidation: false,
    words_array : { 'after': 'test', 'before': '', 'tonight': '', 'believe': '', 'candle': '', 'however': '', 'extraordinary': '', 'include': '', 'cat': '', 'waves': '', 'important': '', 'America': '', 'yellow': '', 'sometimes': '' }
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

      if (this.state.wordValidation) {
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
      <div className="App">
        <Header />
        <div className='inputContainer'>
          <WordsSpace>
            {words}
          </WordsSpace>
          <Typearea
            clicked={this.newInputHandler}
          />
        </div>
      </div>
    )
  }
}

export default App;
