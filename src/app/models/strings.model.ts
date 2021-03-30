import { Project } from "./project.model"

export class Strings {

    projects_eng: Project[];
    projects_pl: Project[];

    eng = {
        name: "Katarzyna Krawczyk",
        titles: {
            city: "City:",
            phone: "Phone:",
            email: "Email:",
            about_me: "About me",
            education: "Education",
            skills: "Skills",
            projects: "Projects"
        },
        content: {
            city: "Wrocław",
            phone: "+48 784 543 479",
            email: "k.krawczyk.w@gmail.com",
            about_me: "",
            education: {
                year: "2017 - 2021",
                school: "Wrocław University of Science and Technology",
                major: "Major: Computer Science",
                spec: "Specialization: Internet Engeenering"
            },
            skills: {
                good: "good",
                basic: "basic"
            },
            note: "* - I'm happy to learn more or I'm doing it right now.",
            technologies: "Technologies used: "
        }
    }

    pl = {
        name: "Katarzyna Krawczyk",
        titles: {
            city: "Miasto:",
            phone: "Telefon:",
            email: "Email:",
            about_me: "O mnie",
            education: "Wykształcenie",
            skills: "Umiejętności",
            projects: "Projekty"
        },
        content: {
            city: "Wrocław",
            phone: "+48 784 543 479",
            email: "k.krawczyk.w@gmail.com",
            about_me: "",
            education: {
                year: "2017 - 2021",
                school: "Politechnika Wrocławska",
                major: "Kierunek: Informatyka",
                spec: "Specjalność: Inżynieria Internetowa"
            },
            skills: {
                good: "dobry",
                basic: "podsatwowy"
            },
            note: "* - jestem chętna do dalszej nauki lub właśnie się uczę.",
            technologies: "Użyte technologie: "
        }
    }
    constructor() {
        this.projects_eng = new Array();
        this.projects_eng.push(new Project("Quiz", "Simple quiz application with simple design and graph of given answers", "https://kasiakrotka.github.io/SimpleQuiz/", ['HTML', 'CSS', 'JavaScript'], "assets/quiz.png"));
        this.projects_eng.push(new Project("Mood Tracker", "Application let user track his mood through the month. The purpose of app is therapeutic. User have a chance to fill fomrs which help him describe his day. Data collected in the app can be displayed as a graph.", "https://kasiakrotka.github.io/MoodTracker/", ['HTML', 'CSS', 'JavaScript', 'Angular'], "assets/moodtracker.png"));

        this.projects_pl = new Array();
        this.projects_pl.push(new Project("Quiz", "Prosta aplikacja będąca szablonem do utworzenia quizu. Na podsatwie udzielonych odpowiedzi, jako wynik wyświetlany jest graf.", "https://kasiakrotka.github.io/SimpleQuiz/", ['HTML', 'CSS', 'JavaScript'], "assets/quiz.png"));
        this.projects_pl.push(new Project("Mood Tracker", "Aplikacja pozwala użytkownikowi na śledzenie swoich emocji w ciągu miesiąca. Użytkownik ma możliwość wypełniania formularzy, które pomagają w opisaniu dnia. Dane zebrane w aplikacji wyświetlane są w formie grafu.", "https://kasiakrotka.github.io/MoodTracker/", ['HTML', 'CSS', 'JavaScript', 'Angular'], "assets/moodtracker.png"));

    }
}