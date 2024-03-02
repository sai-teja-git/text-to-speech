import { Routes } from '@angular/router';
import { SpeechComponent } from './speech/speech.component';

export const routes: Routes = [
    {
        path: "speech-to-text",
        component: SpeechComponent
    },
    {
        path: "",
        redirectTo: "speech-to-text",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "speech-to-text",
    }
];
