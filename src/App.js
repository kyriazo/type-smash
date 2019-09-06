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
    words_array: 'This is an array of words in order to test the app',
    wordClass: '',
    wordHit: true,
    prevtypedStringLength: 0,
    typedflag: false,
    wordValidation: false,
    }


  newCharacterHandler = (event) => {

    const words_array = ['after', 'before', 'tonight', 'believe', 'candle', 'however', 'extraordinary', 'include', 'cat', 'waves', 'important', 'America', 'yellow', 'sometimes'];

    //Get the string from typing area.
    const typedString = event.target.value;
    this.setState({ typedflag: false });
    //In case of backspace in empty area.
    if(typedString === ' ') {
      return;
    }
    //Examine if the string is a space
    if (typedString[typedString.length - 1] === ' ') {
      console.log('space');
      let currentWord = this.state.current_word_index;
      const newWordIndex = currentWord++;
      this.setState({current_word_index: newWordIndex})
      if (typedString[typedString.length - 2] === ' '){
        return;
      }else{
        let currentIndex = this.current_word_index;
        const newIndex = currentIndex + 1;
        this.setState({current_word_index: 2});
        this.setState({prevtypedStringLength: 0})
        this.setState({typedflag: true});
        //Examine if wrong/right case goes in here
      }

      return;
    }
    //If it is not a space, examine if it is a backspace
    if (this.state.prevtypedStringLength > typedString.length) {
      //Do backspace stuff
      this.setState({ prevtypedStringLength: typedString.length });
      // console.log(this.state.prevtypedStringLength,typedString.length)
      console.log('Deleted character')
      return;
    }else{
    //If the input is a character proceed with checking
    console.log('Valid character');
    // console.log(this.state.prevtypedStringLength, typedString.length);
    this.setState({ prevtypedStringLength: typedString.length });
    // console.log(this.state.prevtypedStringLength, typedString.length);
    const checkString = typedString.substr(typedString.lastIndexOf(' ') + 1);
    const validation = words_array[this.state.current_word_index].startsWith(checkString);
    this.setState({wordValidation: validation});
    console.log(validation);
    }

  }

  
  
  render() {

    const words_array = ['after', 'before', 'tonight', 'believe', 'candle', 'however', 'extraordinary', 'include', 'cat', 'waves', 'important', 'America', 'yellow', 'sometimes'];

    const words = words_array.map((word, index) => {
      return (
        <Word word={word} key={index} valid={this.state.wordValidation} flag={this.state.typedflag}/>
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


/*
Backup 

 //This is a counter for the typed characters
    let typedCharCounter = this.state.char_counter;
    //This increments the above counter for each execution
    this.setState({char_counter:typedCharCounter+1});
    //This gets the current string typed in the text input
    const currentString = event.target.value;
    const currentChar = currentString[currentString.length - 1];
    // console.log(currentChar,this.state.char_counter);
    //This is the toType string array index
    let word_index = this.state.word_counter;
    //This is the toType string
    const words_string = this.state.words_array;
    //This is the toType words array
    const words_array = words_string.split(" ");
    // console.log(words_array[word_index]);
    //This is the current word to be typed
    const current_word = words_array[word_index];
    console.log(typedCharCounter,current_word);

    if (typedCharCounter >= current_word.length) {
      this.setState({char_counter: 0});
      const newWordCounter = word_index + 1;
      this.setState({word_counter: newWordCounter})
    }


    if(currentChar === current_word[typedCharCounter-1]){
      this.setState({wordHit: true});
    }else if (currentChar === ' '){
      this.setState({wordHit:'space'})
    }else{
      this.setState({wordHit: false});
    }

    */
