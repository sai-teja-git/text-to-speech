# TextToSpeach

The Angular Text-to-Speech Project is a web application developed using the Angular framework, designed to convert text into speech for an enhanced user experience. This project enables users to input text through a user-friendly interface and receive a natural-sounding audio representation of the provided content. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Package installation

To install packages use command `npm i` or `npm install`

## Usage

 Here's an example of how you can provide the `speechService` in your app module or the relevant feature module:

 ```typescript
    // Import necessary modules and components
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';

    // Import the SpeechService
    import { SpeechService } from './path-to-speech-service/speech.service';

    @NgModule({
        declarations: [
            // Include your components here
            AppComponent,
        ],
        imports: [
            // Include necessary modules here, such as BrowserModule or HttpClientModule
            BrowserModule,
        ],
        providers: [
            // Provide the SpeechService at the module level
            SpeechService,
        ],
        bootstrap: [AppComponent],
    })
    export class AppModule { }
 ```
 When providing a service specifically for a standalone component, you can do so by adding the service to the `providers` array within the `@Component` decorator of your component.

 ```typescript
    import { Component } from '@angular/core';

    // Import the SpeechService
    import { SpeechService } from './path-to-speech-service/speech.service';

    @Component({
        selector: 'app-your-component',
        standalone: true,
        imports: [
            FormsModule
        ],
        providers: [SpeechService], // Provide the SpeechService at the component level
        templateUrl: './your-component.component.html',
        styleUrls: ['./your-component.component.css'],
    })
    export class YourComponent {
        // Your component logic goes here
    }
 ```
 for using its functions
```typescript
    import { Component } from '@angular/core';

    // Import the SpeechService
    import { SpeechService } from './path-to-speech-service/speech.service';

    @Component({
        selector: 'app-your-component',
        standalone: true,
        imports: [
            FormsModule
        ],
        providers: [SpeechService], // Provide the SpeechService at the component level
        templateUrl: './your-component.component.html',
        styleUrls: ['./your-component.component.css'],
    })
    export class YourComponent {
        // Your component logic goes here

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
    }
```