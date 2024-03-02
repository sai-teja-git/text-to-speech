import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-speech',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    SpeechService
  ],
  templateUrl: './speech.component.html',
  styleUrl: './speech.component.scss'
})
export class SpeechComponent {

  text_to_speak = "";
  pitch = 1;
  rate = 1;

  constructor(
    private speechService: SpeechService
  ) { }

  /**
   * The `start` function in TypeScript initiates the speech service to speak the provided text.
   */
  start() {
    this.speechService.startSpeaking({ text: this.text_to_speak, pitch: this.pitch, rate: this.rate })
  }

  /**
   * The `stop` function in TypeScript stops the speech service from speaking.
   */
  stop() {
    this.speechService.stopSpeaking()
  }

  /**
   * The `resume()` function calls the `resumeSpeaking()` method of the `speechService` object.
   */
  resume() {
    this.speechService.resumeSpeaking()
  }

  /**
   * The `pause` function in TypeScript pauses the speech service from speaking.
   */
  pause() {
    this.speechService.pauseSpeaking()
  }

  /**
   * The `resetOptions` function stops a process.
   */
  resetOptions() {
    this.stop()
  }

}
