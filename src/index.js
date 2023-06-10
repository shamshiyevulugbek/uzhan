import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query"
import {queryClient} from "./queryies/index"
import {AnswersContextProvider} from "./context/answers"
import {BotInfoContextProvider} from "./context/botInfo"
import {CorrectAnswersContextProvider} from "./context/correctAnswers"
import {QuestionsContextProvider} from "./context/questions"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QuestionsContextProvider>
          <CorrectAnswersContextProvider>
            <AnswersContextProvider>
              <BotInfoContextProvider>
                <App />
              </BotInfoContextProvider>
            </AnswersContextProvider>
          </CorrectAnswersContextProvider>
        </QuestionsContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


reportWebVitals();
