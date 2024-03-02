import { Injectable } from "@angular/core";

/* The `interface TextToSpeech` in the TypeScript code snippet defines a structure for objects that
represent text-to-speech data. It specifies the properties that an object of type `TextToSpeech`
should have: */
interface TextToSpeech {
    text: string;
    rate?: number,
    pitch?: number,
    voice?: SpeechSynthesisVoice
}

@Injectable()

export class SpeechService {

    /**
     * The `startSpeaking` function in TypeScript initiates text-to-speech synthesis with the provided
     * data.
     * @param {TextToSpeech} data - The `data` parameter in the `startSpeaking` function likely
     * contains the text that you want to convert to speech. This text will be used to create a speech
     * object that will be spoken using the Web Speech API.
     */
    startSpeaking(data: TextToSpeech) {
        const speech = this.createSpeech(data);
        this.stopSpeaking()
        speechSynthesis.speak(speech);
    }

    /**
     * The function `getVoices` returns an array of available voices for speech synthesis.
     * @returns The `getVoices()` function returns an array of `SpeechSynthesisVoice` objects, which
     * represent the available voices that can be used for speech synthesis.
     */
    getVoices(): SpeechSynthesisVoice[] {
        return speechSynthesis.getVoices()
    }

    /**
     * The function `stopSpeaking()` cancels any ongoing speech synthesis.
     */
    stopSpeaking() {
        speechSynthesis.cancel();
    }

    /**
     * The `pauseSpeaking` function pauses the speech synthesis in TypeScript.
     */
    pauseSpeaking() {
        speechSynthesis.pause()
    }

    /**
     * The `resumeSpeaking` function in TypeScript resumes speech synthesis.
     */
    resumeSpeaking() {
        speechSynthesis.resume()
    }

    /**
     * The function `createSpeech` creates a SpeechSynthesisUtterance object with the provided text,
     * rate, and pitch parameters.
     * @param {TextToSpeech} data - The `data` parameter in the `createSpeech` function is an object of
     * type `TextToSpeech` which contains the following properties:
     * @returns A SpeechSynthesisUtterance object is being returned.
     */
    private createSpeech(data: TextToSpeech) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = data.text;
        speech.rate = data.rate || 1;
        speech.pitch = data.pitch || 1;
        return speech;
    }
}