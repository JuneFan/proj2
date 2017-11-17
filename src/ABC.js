import React, {Component} from 'react';
import classNames from 'classnames';
import alphabets from './alphabets.json';

class ABC extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alphabets: alphabets,
			currentPosition: 0,
			currentTick: 0,
			random: false,
			sound:true
		};
		this.next =this.next.bind(this);
		this.previous=this.previous.bind(this);
		this.playSound=this.playSound.bind(this);
		this.switchRandom=this.switchRandom.bind(this);
		this.randomNumber=this.randomNumber.bind(this);
		this.switchSound=this.switchSound.bind(this);
		this.manualPlay=this.manualPlay.bind(this);
	}
	componentDidMount() {
		let letterSound = document.querySelector('audio[data-key="letter"]');
		letterSound.play();
	}
	componentDidUpdate() {
		this.playSound();
	}
	switchRandom() {
		this.setState({random:!this.state.random});
	}
	switchSound() {
		this.setState({sound:!this.state.sound});
	}
	manualPlay() {
		let letterSound = document.querySelector('audio[data-key="letter"]');
		let wordSound = document.querySelector('audio[data-key="word"]');

		
		if(this.state.currentTick===0) {
			letterSound.play();
		}
		else {
			wordSound.play();
		}
		
	}
	playSound() {
		let letterSound = document.querySelector('audio[data-key="letter"]');
		let wordSound = document.querySelector('audio[data-key="word"]');
		if(this.state.sound){
			if(this.state.currentTick===0) {
				letterSound.play();
			}
			else {
				wordSound.play();
			}
	}
	}
	randomNumber(min, max) {
		return Math.floor(Math.random()*(max-min+1)) + min;
	}
	next() {
		if(this.state.random){
				if(this.state.currentTick<2){
					this.setState({currentTick:this.state.currentTick+1});
				}
				else{
					this.setState({currentPosition:this.randomNumber(0,25), currentTick:0});
				}
		}
		else{
		if(this.state.currentPosition === alphabets.length-1 && this.state.currentTick ===2)
			
			this.setState({currentPosition: 0, currentTick :0});
		else{
		if(this.state.currentTick < 2)
			this.setState({currentTick: this.state.currentTick + 1});
			
		else
			this.setState({currentPosition: this.state.currentPosition+1, currentTick :0});
			this.playSound;
		}
	}
	}
	previous() {

		if(this.state.currentPosition === 0)
			this.setState({currentPosition: 25, currentTick :0});
		else
			this.setState({currentPosition: this.state.currentPosition-1, currentTick: 0});

	}

	render() {
		let showImage=this.state.currentTick >=1 ? true : false;
		let showWord=this.state.currentTick ===2 ? true :false;

		return (
			<div className="game">
				<span className="random-label">Random Letter: </span>
				<label className="switch">
					<input type="checkbox" defaultValue="false" onClick={this.switchRandom} checked={this.state.random} />
					<div className="slider round"></div>
				</label>
				<span className="random-label">Sound: </span>
				<label className="switch">
					<input type="checkbox" defaultValue="false" onClick={this.switchSound} checked={this.state.sound} />
					<div className="slider round"></div>
				</label>
			  <div className="option">
					<div className="fields">
						<div className="field-block">
							{this.state.alphabets[this.state.currentPosition].letter}
						</div>
						<audio src={this.state.alphabets[this.state.currentPosition].letterSound}
							data-key="letter" />

					</div>
					<div className="buttons">
						<a className="button prev"  onClick={this.previous}>Previous</a>
						<a className="button sound" onClick={this.manualPlay}>Play Sound Again</a>
						<a className="button next" onClick={this.next}>Next</a>
					</div>
					<div className="fields">
						<div className="field-block">
							<div className="left-field">
								<div className={classNames('placeholder-span',{hide: showImage})}>Click Next To View Image</div>
									<img className={classNames('letter-image',{hide: !showImage})} src = {this.state.alphabets[this.state.currentPosition].image} 
									 alt = {this.state.alphabets[this.state.currentPosition].word}/>
									<audio src={this.state.alphabets[this.state.currentPosition].wordSound}
									data-key="word" />
							</div>
							<div className="right-field">
								<div className={classNames('placeholder-span',{hide: showWord})}>Click Next To View Spell</div>
									<div className={classNames('word',{hide: !showWord})}>
										{this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
									
								</div>
							</div>
							
						</div>
					</div>

				</div>
			</div>

			)
	}
}

export default ABC