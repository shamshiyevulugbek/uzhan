import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query"
import {queryClient} from "./queryies/index"
import {AnswersContextProvider} from "./context/answers"
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
              <App />
            </AnswersContextProvider>
          </CorrectAnswersContextProvider>
        </QuestionsContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


reportWebVitals();
