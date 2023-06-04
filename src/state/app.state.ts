

export enum AppStatePage {
    INTRO = 1,
    Q_AGE,
    Q_GENDER,
    Q_JAUNDICE,
    Q_AUTISM,
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6,
    Q7,
    Q8,
    Q9,
    Q10,
    RESULT_AUTISM,
    RESULT_NOT_AUTISM,
}



export class AppState {
    page : AppStatePage;
    data : number[];

    constructor(
        page : AppStatePage, 
        data : number[]
    ) {
        this.page = page;
        this.data  = data;
    }
}


export const initialState = new AppState(
    AppStatePage.INTRO,
    Array(17).fill(0)
)