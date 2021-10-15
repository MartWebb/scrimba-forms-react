import './App.css';
import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destinations: '',
            restrictions: {
                isVegan: false,
                isVegetarian: false
            }
            
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    
    changeHandler(event) {
        const { name, type, value, checked } = event.target
        type === 'checkbox' ? 
        this.setState(prevState => {
            return{
                restrictions: {
                    ...prevState.restrictions,
                    [name] : checked
                }
            }
        }) :
        this.setState({[name]: value })
        
    }
    
    
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.changeHandler} 
                        placeholder="First Name" /><br />
                    <input name="lastName" value={this.state.lastName} onChange={this.changeHandler} placeholder="Last Name" /><br />
                    <input name="age" value={this.state.age} onChange={this.changeHandler} placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                    <input type="radio" name="gender" value='male' checked={this.state.gender === 'male'} onChange={this.changeHandler} /> Male<br />
                    
                    </label>
                    <label>
                    <input type="radio" name="gender" value='female' checked={this.state.gender === 'female'} onChange={this.changeHandler} /> Female
                    </label>
                    
                    <br />
                    
                    {/* Create select box for location here */}
                    <select 
                        value={this.state.destinations}
                        name="destinations"
                        onChange={this.changeHandler}
                    >
                        
                        <option value="spain">Spain</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="england">England</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label htmlFor="vegan">Vegan</label>
                    <input 
                        id="vegan" 
                        type="checkbox" 
                        name="isVegan"  
                        checked={this.state.restrictions.isVegan} 
                        onChange={this.changeHandler}
                    />
                    <label htmlFor="vegetarian">Vegetarian</label>
                    <input 
                        id="vegetarian" 
                        type="checkbox" 
                        name="isVegetarian" 
                        checked={this.state.restrictions.isVegetarian} 
                        onChange={this.changeHandler}
                        />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destinations}</p>
                <p>
                    Your dietary restrictions: 
                     Your dietary restrictions: 
                    Vegan: {this.state.restrictions.isVegan ? "Yes" : "No"}
                    Kosher: {this.state.restrictions.isVegetarian ? "Yes" : "No"}
                    
                </p>
            </main>
        )
    }
}

export default App
