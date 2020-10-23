
type Rule = {
    // Имя шага
    name: string;

    // Отображение вопроса
    question: () => {};

    // Получение ответа от пользователя
    answer: () => {};

    // Условия прохождения шага
    condition: (question, answer) => boolean;

    // Шаг для прехода в случае успеха
    successStep: string;
    
    // Шаг для прехода в случае не успеха
    failStep: string;

    // Событие в случае успешного прохождения шага
    onSuccessStep: () => void;
    
    // Событие в не успешного прохождения шага
    onFailStep: () => void;
}

type EngineConstrutor = {
    // Приветсвие в игре
    gameGreeting: () => {}
    // Описание правил игры
    rules: Rule[];
}

type ConfigureGameProps = {
    // Имя игры
    gameName: string;
    // Общие условия игры
    gameConditions: Partial<Rule>
}