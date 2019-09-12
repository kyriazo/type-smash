import React,{ Component } from 'react';
import './App.css';
import WordsSpace from './components/WordsSpace/WordsSpace';
import Typearea from './components/Typearea/Typearea';
import Header from './components/Header/Header';
import Word from './components/Word/Word';

class App extends Component {

  state = {
    typedWord: '',
    char_counter: 1,
    current_word_index: 0,
    wordClass: '',
    wordHit: true,
    prevtypedStringLength: 0,
    typed: '',
    wordValidation: false,
    words_array : { 'after': 'test', 'before': '', 'tonight': '', 'believe': '', 'candle': '', 'however': '', 'extraordinary': '', 'include': '', 'cat': '', 'waves': '', 'important': '', 'America': '', 'yellow': '', 'sometimes': '' }

    }


  newCharacterHandler = (event) => {

    const words_array = this.state.words_array;
    console.log(words_array[0]);
    //Get the string from typing area.
    const typedString = event.target.value;
    console.log("This is the typedString:", typedString);

    //In case of backspace in empty area.
    if(typedString === '') {
      console.log("You have emptied the typing area.");
      console.log(' ');
      return;
    }

    //Examine if the string is a space
    if (typedString[typedString.length - 1] === ' ') {
      console.log("You have hit the space key!!!");
      console.log("This is the typed string:", typedString);
      //Ensures that hitting space wont trigger the highlight to the next word.
      if (typedString === ' '){
        document.getElementById('typearea').value = "";
        return;
      }else{
        //If space is hit, change word
        let currentWordIndex = this.state.current_word_index;
        console.log("This is the currentWordIndex", currentWordIndex)
        const newWordIndex = currentWordIndex++;
        console.log("This is the newWordIndex", newWordIndex)
        this.setState({ current_word_index: newWordIndex })
        console.log("The new word is:", Object.keys(words_array)[this.state.current_word_index + 1]);
        document.getElementById('typearea').value="";
        this.setState({current_word_index: this.state.current_word_index+1});
        this.setState({prevtypedStringLength: 0})
        console.log('The validation flag is:', this.state.wordValidation );
        const words = {...this.state.words_array};
        const current_word = Object.keys(words_array)[this.state.current_word_index];
        console.log("TCL: App -> newCharacterHandler -> words", words,current_word,'Tadaa',words[current_word])
        if (this.state.wordValidation) {
          words[current_word] = 'hit';
        }else{
          words[current_word] = 'miss'
        }
        this.setState({words_array:words})
        console.log('The new typed value is', this.state.typed);
        //Examine if wrong/right case goes in here
      }
      console.log(' ');
      return;
    }
    //If it is not a space, examine if it is a backspace
    if (this.state.prevtypedStringLength > typedString.length) {
      console.log('You have hit backspace!!!');
      console.log("This is the length of the typed string.", typedString.length);
      console.log("This is the previous string length", this.state.prevtypedStringLength);
      this.setState({ prevtypedStringLength: typedString.length });
      console.log(' ');
      return;
    }else{
    //If the input is a character proceed with checking
    console.log('You have inserted a character!');
    this.setState({ prevtypedStringLength: typedString.length });
    const checkString = typedString.substr(typedString.lastIndexOf(' ') + 1);
    console.log("This is the string to check for validation", checkString);
    console.log("The current word is:", Object.keys(words_array)[this.state.current_word_index]);
    const validation = Object.keys(words_array)[this.state.current_word_index].startsWith(checkString);
    console.log("Does the typedString match the current word?", validation)
    this.setState({wordValidation: validation});
    console.log(' ');
    }
  }

  render() {

    const words_object = this.state.words_array;
    const words_array = Object.keys(words_object)
    
    const words = words_array.map((word, index) => {
      
      console.log(word,index,'frfr',words_object[word])
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
          <WordsSpace
            value={this.state.words_array}
            class={this.state.wordClass}
            hit={this.state.wordHit}
          >
            {words}
          </WordsSpace>
          <Typearea
            clicked={this.newCharacterHandler}
          />
        </div>
      </div>
    )
  }
}

export default App;
