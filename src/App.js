import React,{ Component } from 'react';
import './App.css';
import Words from './components/Words/Words';
import Typearea from './components/Typearea/Typearea';

class App extends Component {

  state = {
    typedWord: '',
    char_counter: 1,
    word_counter: 0,
    words_array: 'This is an array of words in order to test the app',
    wordClass: '',
    wordHit: true
  }


  newCharacterHandler = (event) => {
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
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Type-Smash</h1>
          <h2>Test your typing skills!</h2>
        </header>
        <div className='inputContainer'>
          <Words
            value={this.state.words_array}
            class={this.state.wordClass}
            hit={this.state.wordHit}
          />
          <Typearea
            clicked={this.newCharacterHandler}
          />
        </div>
      </div>
    )
  }
}

export default App;
